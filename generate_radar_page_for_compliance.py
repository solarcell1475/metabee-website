#!/usr/bin/env python3
"""Generate Sky-Guard Radar R5000 page in customer (Skybase) style and replace page 5 in compliance PDF."""

import os
from reportlab.lib.colors import HexColor
from reportlab.pdfgen.canvas import Canvas

# Customer PDF page size (from pdfinfo)
PAGE_W = 1280.16
PAGE_H = 720

# Customer style colors
DARK_BLUE = HexColor("#1a3a5c")
LIGHT_GRAY = HexColor("#f5f5f5")
BODY_GRAY = HexColor("#4a4a4a")
WHITE = HexColor("#ffffff")
ACCENT_BLUE = HexColor("#2563eb")

BASE = os.path.dirname(os.path.abspath(__file__))
IMAGE_DIR = os.path.join(BASE, "public", "assets", "images", "products")
OUTPUT_DIR = os.path.join(BASE, "public", "downloads")
CUSTOMER_PDF = "/Users/solarcell1474/Downloads/Skybase Project_Compliance_StandardV1 2.pdf"


def draw_rounded_rect(c, x, y, w, h, r, fill_color):
    """Draw rounded rectangle."""
    c.setFillColor(fill_color)
    c.setStrokeColor(fill_color)
    c.roundRect(x, y, w, h, r, fill=1, stroke=0)


def build_radar_page():
    """Build single-page PDF in customer style."""
    path = os.path.join(OUTPUT_DIR, "Sky-Guard_Radar_R5000_Compliance_Page.pdf")
    c = Canvas(path, pagesize=(PAGE_W, PAGE_H))

    # Background: gradient (dark blue top, lighter bottom)
    c.setFillColor(HexColor("#2d4a6f"))
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    c.setFillColor(HexColor("#3d5a7f"))
    c.rect(0, 0, PAGE_W, PAGE_H * 0.4, fill=1, stroke=0)
    c.setFillColor(HexColor("#2d5a3a"))
    c.rect(0, 0, PAGE_W, PAGE_H * 0.25, fill=1, stroke=0)

    # Layout: card left, image right, both vertically centered
    margin = 60
    gap = 50
    card_w = 520
    card_h = 560
    card_x = margin
    card_y = (PAGE_H - card_h) / 2
    img_area_x = margin + card_w + gap
    img_area_w = PAGE_W - img_area_x - margin

    # Left: info card (rounded, light gray)
    draw_rounded_rect(c, card_x, card_y, card_w, card_h, 20, LIGHT_GRAY)

    # Text block: center vertically in card
    pad = 35
    text_x = card_x + pad
    # Total text block height ~220pt
    block_h = 220
    block_top = card_y + (card_h - block_h) / 2 + block_h
    y = block_top - 30

    # Title
    c.setFillColor(DARK_BLUE)
    c.setFont("Helvetica-Bold", 30)
    c.drawString(text_x, y, "Sky-Guard Radar R5000")
    y -= 28
    c.setFont("Helvetica", 15)
    c.setFillColor(BODY_GRAY)
    c.drawString(text_x, y, "Ku-Band Low-Altitude UAV Detection Radar")
    y -= 40

    # Key specs (side by side)
    c.setFillColor(DARK_BLUE)
    c.setFont("Helvetica-Bold", 34)
    c.drawString(text_x, y, "16 GHz")
    c.drawString(text_x + 165, y, "5 km")
    c.setFont("Helvetica", 11)
    c.setFillColor(BODY_GRAY)
    c.drawString(text_x, y - 18, "Frequency Band")
    c.drawString(text_x + 165, y - 18, "Max Detection Range")
    y -= 45

    # Bullet points
    bullets = [
        ("360° Full-Domain Surveillance", "Continuously sweeps 360° in azimuth, 0°–30° in elevation. Automatic track initiation and target association."),
        ("Precise 3D Target Cueing", "Outputs range, azimuth, altitude, speed, longitude, latitude. Cues EO systems and counter-UAS effectors. Pd = 85% vs DJI Phantom 3/4."),
    ]
    for title, desc in bullets:
        c.setFillColor(DARK_BLUE)
        c.setFont("Helvetica-Bold", 13)
        c.drawString(text_x, y, f"• {title}")
        c.setFont("Helvetica", 10)
        c.setFillColor(BODY_GRAY)
        c.drawString(text_x, y - 16, desc)
        y -= 52

    # Right: product image (original aspect ratio, vertically centered)
    img_path = os.path.join(IMAGE_DIR, "product-skyguard-radar.png")
    if os.path.exists(img_path):
        try:
            from PIL import Image
            pil = Image.open(img_path)
            asp = pil.width / pil.height  # ~0.68 portrait
        except Exception:
            asp = 848 / 1242
        max_h = 500
        max_w = img_area_w
        img_h = min(max_h, max_w / asp)
        img_w = img_h * asp
        img_x = img_area_x + (img_area_w - img_w) / 2
        img_y = (PAGE_H - img_h) / 2
        c.drawImage(img_path, img_x, img_y, width=img_w, height=img_h)

    c.save()
    return path


def replace_page_in_pdf():
    """Replace page 5 in customer PDF with our radar page."""
    from pypdf import PdfReader, PdfWriter

    radar_path = os.path.join(OUTPUT_DIR, "Sky-Guard_Radar_R5000_Compliance_Page.pdf")
    out_path = os.path.join(OUTPUT_DIR, "Skybase_Project_Compliance_StandardV1_RadarR5000.pdf")

    reader = PdfReader(CUSTOMER_PDF)
    radar_reader = PdfReader(radar_path)
    writer = PdfWriter()

    for i in range(len(reader.pages)):
        if i == 4:  # page 5 (0-indexed)
            writer.add_page(radar_reader.pages[0])
        else:
            writer.add_page(reader.pages[i])

    with open(out_path, "wb") as f:
        writer.write(f)

    return out_path


def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    print("1. Generating Radar R5000 page in customer style...")
    build_radar_page()
    print("   ✓ Sky-Guard_Radar_R5000_Compliance_Page.pdf")
    print("2. Replacing page 5 in customer PDF...")
    out = replace_page_in_pdf()
    print(f"   ✓ {out}")
    print("Done!")


if __name__ == "__main__":
    main()
