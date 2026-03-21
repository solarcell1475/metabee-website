#!/usr/bin/env python3
"""Generate name card PDF for Dr. NG KUNG BO (English + Chinese).
   Style: reference card with hexagon, company yellow as main frame color.
   Fonts are embedded for consistent display across all devices.
"""

import math
import os
import sys
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor, white
from reportlab.pdfgen.canvas import Canvas
from reportlab.graphics.shapes import Drawing, Polygon
from reportlab.graphics import renderPDF
from reportlab.platypus import Table, TableStyle
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import Paragraph

# Business card: 90 x 54 mm
CARD_W = 90 * mm
CARD_H = 54 * mm

# Company yellow as main frame color
BRAND_YELLOW = HexColor("#f0b429")
BRAND_DARK = HexColor("#0a0a0a")
BRAND_GRAY = HexColor("#404040")
LIGHT_BG = HexColor("#f5f5f5")

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "public", "downloads")
LOGO_DIR = os.path.join(os.path.dirname(__file__), "public", "assets", "images", "logo")
LOGO_TRANSPARENT = os.path.join(LOGO_DIR, "logo-hexagon-transparent.png")
QRC_DIR = os.path.join(os.path.dirname(__file__), "public", "assets", "images", "namecard")
os.makedirs(OUTPUT_DIR, exist_ok=True)


def _ensure_transparent_logo():
    """Create logo with black/dark background removed if not exists."""
    if os.path.exists(LOGO_TRANSPARENT):
        return
    master = os.path.join(LOGO_DIR, "logo-hexagon-master.png")
    if not os.path.exists(master):
        return
    try:
        from PIL import Image
        import numpy as np
        img = Image.open(master).convert("RGBA")
        arr = np.array(img)
        r, g, b = arr[:, :, 0], arr[:, :, 1], arr[:, :, 2]
        dark = (r < 80) & (g < 80) & (b < 80)
        dark2 = (r < 120) & (g < 120) & (b < 120) & (r + g + b < 200)
        arr[dark, 3] = 0
        arr[dark2, 3] = 0
        Image.fromarray(arr, "RGBA").save(LOGO_TRANSPARENT)
    except Exception:
        pass


def draw_hexagon(c, cx, cy, r, fill_color, stroke_color=None):
    """Draw a flat-top regular hexagon using reportlab graphics."""
    pts = []
    for i in range(6):
        ang = math.pi / 3 * i - math.pi / 6
        pts.extend([r + r * math.cos(ang), r + r * math.sin(ang)])
    poly = Polygon(pts)
    poly.fillColor = fill_color
    poly.strokeColor = stroke_color or fill_color
    poly.strokeWidth = 0.5 * mm if stroke_color else 0
    d = Drawing(2 * r, 2 * r)
    d.add(poly)
    renderPDF.draw(d, c, cx - r, cy - r)


def _register_embedded_fonts():
    """Register embedded fonts for consistent PDF display across devices."""
    # Latin: Arial (embedded)
    arial_paths = [
        "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/Library/Fonts/Arial.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    ]
    for p in arial_paths:
        if os.path.exists(p):
            try:
                pdfmetrics.registerFont(TTFont("ArialEmbed", p))
                bold_p = os.path.join(os.path.dirname(p), "Arial Bold.ttf")
                if os.path.exists(bold_p):
                    pdfmetrics.registerFont(TTFont("ArialEmbed-Bold", bold_p))
            except Exception:
                pass
            break

    # Chinese: use STSong-Light (CID) for full character coverage; Songti TTF misses glyphs
    try:
        from reportlab.pdfbase.cidfonts import UnicodeCIDFont
        pdfmetrics.registerFont(UnicodeCIDFont("STSong-Light"))
    except Exception:
        pass
    # Fallback: try Heiti TTF if CID fails
    if "STSong-Light" not in pdfmetrics.getRegisteredFontNames():
        for p in ["/System/Library/Fonts/STHeiti Medium.ttc", "/System/Library/Fonts/Supplemental/Songti.ttc"]:
            if os.path.exists(p):
                try:
                    pdfmetrics.registerFont(TTFont("ChineseEmbed", p, subfontIndex=0))
                    break
                except Exception:
                    pass


def _latin_font():
    return "ArialEmbed" if "ArialEmbed" in pdfmetrics.getRegisteredFontNames() else "Helvetica"


def _latin_font_bold():
    return "ArialEmbed-Bold" if "ArialEmbed-Bold" in pdfmetrics.getRegisteredFontNames() else "Helvetica-Bold"


def _chinese_font():
    # Prefer STSong-Light (full CJK coverage, no missing chars)
    if "STSong-Light" in pdfmetrics.getRegisteredFontNames():
        return "STSong-Light"
    if "ChineseEmbed" in pdfmetrics.getRegisteredFontNames():
        return "ChineseEmbed"
    return _latin_font()


def draw_card_front(c: Canvas, lang: str) -> None:
    """Front: yellow frame, white hexagon, logo, company name, tagline, horizontal lines."""
    c.setPageSize((CARD_W, CARD_H))
    # Yellow background (main frame color)
    c.setFillColor(BRAND_YELLOW)
    c.rect(0, 0, CARD_W, CARD_H, fill=1, stroke=0)

    cx, cy = CARD_W / 2, 32 * mm
    hex_r = 10 * mm

    # Dark gray hexagon (lighter black, unified with logo)
    draw_hexagon(c, cx, cy, hex_r, HexColor("#3a3a3a"), BRAND_YELLOW)

    # Logo inside hexagon (transparent bg, no black)
    logo_path = LOGO_TRANSPARENT
    if os.path.exists(logo_path):
        logo_w = 12 * mm
        c.drawImage(logo_path, cx - logo_w / 2, cy - logo_w / 2, width=logo_w, height=logo_w)

    # Horizontal lines extending from hexagon
    c.setStrokeColor(white)
    c.setLineWidth(0.8 * mm)
    line_y = cy
    c.line(8 * mm, line_y, cx - hex_r - 2 * mm, line_y)
    c.line(cx + hex_r + 2 * mm, line_y, CARD_W - 8 * mm, line_y)

    # Company name
    c.setFillColor(BRAND_DARK)
    if lang == "zh":
        c.setFont(_chinese_font(), 10)
    else:
        c.setFont(_latin_font_bold(), 10)
    company = "Metabee Technology Limited" if lang == "en" else "雲峰科技有限公司"
    c.drawCentredString(cx, 18 * mm, company)
    if lang == "zh":
        c.setFont(_chinese_font(), 8)
    else:
        c.setFont(_latin_font(), 8)
    tagline = "LAE Management Solution" if lang == "en" else "LAE 管理解决方案"
    c.drawCentredString(cx, 14 * mm, tagline)

    # QR codes (front: near left/right edges, low to avoid blocking company name)
    qr_size = 12 * mm
    qr_y = 4 * mm
    qr_margin = 4 * mm
    qr_wechat = os.path.join(QRC_DIR, "qr-wechat.png")
    qr_wa = os.path.join(QRC_DIR, "qr-whatsapp.png")
    if os.path.exists(qr_wa):
        c.drawImage(qr_wa, qr_margin, qr_y, width=qr_size, height=qr_size)  # WeChat, left edge
    if os.path.exists(qr_wechat):
        c.drawImage(qr_wechat, CARD_W - qr_margin - qr_size, qr_y, width=qr_size, height=qr_size)  # WhatsApp, right edge
    c.setFont(_latin_font(), 5)
    c.setFillColor(BRAND_DARK)
    c.drawString(qr_margin, qr_y - 1.5 * mm, "WeChat")
    c.drawString(CARD_W - qr_margin - qr_size, qr_y - 1.5 * mm, "WhatsApp")


def draw_card_back(c: Canvas, lang: str) -> None:
    """Back: light bg, name, profession, contact with icons, yellow vertical line + hexagon."""
    c.setPageSize((CARD_W, CARD_H))
    c.setFillColor(LIGHT_BG)
    c.rect(0, 0, CARD_W, CARD_H, fill=1, stroke=0)

    if lang == "zh":
        c.setFont(_chinese_font(), 12)
    else:
        c.setFont(_latin_font_bold(), 12)

    # Left: name, profession
    c.setFillColor(BRAND_DARK)
    name = "Dr. Aaron NG K. B." if lang == "en" else "吳公保 博士"
    c.drawString(8 * mm, 44 * mm, name)
    if lang == "zh":
        c.setFont(_chinese_font(), 9)
    else:
        c.setFont(_latin_font(), 9)
    c.setFillColor(BRAND_YELLOW)
    prof = "Consultant, RF & Integration" if lang == "en" else "顾问 · 射频与集成"
    c.drawString(8 * mm, 39 * mm, prof)

    # Contact info: Table for precise alignment (like LaTeX tabular)
    font_name = _chinese_font() if lang == "zh" else _latin_font()
    bullet = "•"
    if lang == "en":
        rows = [
            [bullet, "+852 93555325"],
            [bullet, "+86 19518730317"],
            [bullet, "metabeelimited@gmail.com"],
            [bullet, "Unit 836, 8/F, Bldg 8,"],
            ["", "HK-SZ Innovation Park, N.T., Hong Kong."],
        ]
    else:
        rows = [
            [bullet, "+852 93555325"],
            [bullet, "+86 19518730317"],
            [bullet, "metabeelimited@gmail.com"],
            [bullet, "香港新界深圳創新科技園 8號樓8層單元836"],
        ]
    t = Table(rows, colWidths=[3 * mm, 48 * mm])
    t.setStyle(TableStyle([
        ("FONTNAME", (0, 0), (0, -1), _latin_font()),
        ("FONTSIZE", (0, 0), (-1, -1), 7),
        ("FONTNAME", (1, 0), (1, -1), font_name),
        ("TEXTCOLOR", (0, 0), (0, -1), BRAND_YELLOW),
        ("TEXTCOLOR", (1, 0), (1, -1), BRAND_GRAY),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (0, -1), 0),
        ("RIGHTPADDING", (0, 0), (0, -1), 2),
        ("TOPPADDING", (0, 0), (-1, -1), 0.5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0.5),
    ]))
    t.wrapOn(c, 55 * mm, 30 * mm)
    t.drawOn(c, 8 * mm, 12 * mm)

    # Website near right lower edge (smaller, dark yellow)
    c.setFont(_latin_font(), 9)
    c.setFillColor(HexColor("#c49320"))
    c.drawRightString(CARD_W - 8 * mm, 4 * mm, "www.metabee.com.hk")

    # Right: yellow vertical line + hexagon with logo
    line_x = CARD_W - 14 * mm
    c.setStrokeColor(BRAND_YELLOW)
    c.setLineWidth(1.2 * mm)
    c.line(line_x, 8 * mm, line_x, CARD_H - 8 * mm)

    # Hexagon with logo
    hex_cx, hex_cy = line_x, 32 * mm
    hex_r = 5 * mm
    draw_hexagon(c, hex_cx, hex_cy, hex_r, HexColor("#3a3a3a"), BRAND_YELLOW)
    logo_path = LOGO_TRANSPARENT
    if os.path.exists(logo_path):
        logo_w = 6 * mm
        c.drawImage(logo_path, hex_cx - logo_w / 2, hex_cy - logo_w / 2, width=logo_w, height=logo_w)


def main():
    _register_embedded_fonts()
    _ensure_transparent_logo()
    # Extract QR codes from source images if needed
    qr_wechat = os.path.join(QRC_DIR, "qr-wechat.png")
    qr_wa = os.path.join(QRC_DIR, "qr-whatsapp.png")
    if not os.path.exists(qr_wechat) or not os.path.exists(qr_wa):
        try:
            import subprocess
            subprocess.run(
                [sys.executable, os.path.join(os.path.dirname(__file__), "extract_qr_codes.py")],
                check=True,
                capture_output=True,
            )
        except Exception:
            pass

    # English PDF (front + back)
    path_en = os.path.join(OUTPUT_DIR, "NameCard_Dr_NG_KUNG_BO_EN.pdf")
    c_en = Canvas(path_en, pagesize=(CARD_W, CARD_H))
    draw_card_front(c_en, "en")
    c_en.showPage()
    draw_card_back(c_en, "en")
    c_en.save()
    print(f"Generated: {path_en}")

    # Chinese PDF (front + back)
    path_zh = os.path.join(OUTPUT_DIR, "NameCard_Dr_NG_KUNG_BO_ZH.pdf")
    c_zh = Canvas(path_zh, pagesize=(CARD_W, CARD_H))
    draw_card_front(c_zh, "zh")
    c_zh.showPage()
    draw_card_back(c_zh, "zh")
    c_zh.save()
    print(f"Generated: {path_zh}")


if __name__ == "__main__":
    main()
