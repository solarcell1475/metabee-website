#!/usr/bin/env python3
"""Generate three Sky-Guard A4 PDF datasheets for the MetaBee website."""

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm, cm
from reportlab.lib.colors import HexColor, white, black
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
    PageBreak,
    Image as RLImage,
    KeepTogether,
)
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT
from reportlab.pdfgen.canvas import Canvas
import os
import datetime

BRAND_DARK = HexColor("#0a0a0a")
BRAND_AMBER = HexColor("#f0b429")
BRAND_AMBER_LIGHT = HexColor("#fef3c7")
BRAND_WHITE = HexColor("#ffffff")
BRAND_GRAY = HexColor("#404040")
BRAND_LIGHTGRAY = HexColor("#a3a3a3")
BRAND_BORDER = HexColor("#e5e5e5")

DATE_CODE = datetime.date.today().strftime("%B %Y")

COMPANY_INFO = {
    "name": "MetaBee Technology Limited",
    "email": "metabeelimited@gmail.com",
    "address": "Unit 836, 8/F, Building 8, Hong Kong-Shenzhen Innovation and Technology Park",
    "web": "www.metabee.com.hk",
}

DISCLAIMER = (
    "DISCLAIMER — The information contained in this document is provided for reference purposes only. "
    "All specifications are subject to change without prior notice. MetaBee Technology Limited makes no "
    "warranties, express or implied, regarding the accuracy or completeness of the information herein. "
    "Actual product performance may vary depending on the operating environment, configuration, and "
    "deployment conditions. This document does not constitute a binding offer or contract. Final "
    "deployment performance depends on operating environment and configuration. For the most up-to-date "
    "specifications, please contact MetaBee Technology Limited directly."
)

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "public", "downloads")
IMAGE_DIR = os.path.join(os.path.dirname(__file__), "public", "assets", "images", "products")
LOGO_DIR = os.path.join(os.path.dirname(__file__), "public", "assets", "images", "logo")

os.makedirs(OUTPUT_DIR, exist_ok=True)

title_style = ParagraphStyle(
    "Title",
    fontName="Helvetica-Bold",
    fontSize=22,
    leading=26,
    textColor=BRAND_DARK,
    spaceAfter=4 * mm,
)
subtitle_style = ParagraphStyle(
    "Subtitle",
    fontName="Helvetica",
    fontSize=12,
    leading=16,
    textColor=BRAND_GRAY,
    spaceAfter=6 * mm,
)
heading_style = ParagraphStyle(
    "Heading",
    fontName="Helvetica-Bold",
    fontSize=13,
    leading=17,
    textColor=BRAND_DARK,
    spaceBefore=8 * mm,
    spaceAfter=3 * mm,
)
body_style = ParagraphStyle(
    "Body",
    fontName="Helvetica",
    fontSize=9.5,
    leading=14,
    textColor=BRAND_GRAY,
)
bullet_style = ParagraphStyle(
    "Bullet",
    fontName="Helvetica",
    fontSize=9.5,
    leading=14,
    textColor=BRAND_GRAY,
    leftIndent=12,
    bulletIndent=0,
    bulletFontName="Helvetica",
    bulletFontSize=9.5,
)
small_style = ParagraphStyle(
    "Small",
    fontName="Helvetica",
    fontSize=7.5,
    leading=10,
    textColor=BRAND_LIGHTGRAY,
)
footer_style = ParagraphStyle(
    "Footer",
    fontName="Helvetica",
    fontSize=8,
    leading=11,
    textColor=BRAND_GRAY,
    alignment=TA_CENTER,
)
disclaimer_style = ParagraphStyle(
    "Disclaimer",
    fontName="Helvetica",
    fontSize=7.5,
    leading=10.5,
    textColor=BRAND_LIGHTGRAY,
)


def _amber_bar():
    """A thin amber accent bar."""
    t = Table([[""]],
              colWidths=[170 * mm],
              rowHeights=[2 * mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), BRAND_AMBER),
        ("LINEBELOW", (0, 0), (-1, -1), 0, BRAND_AMBER),
    ]))
    return t


def _header_bar(product_name):
    """Logo on left + product name on right, separated by amber line."""
    logo_path = os.path.join(LOGO_DIR, "logo-metabee-pdf.png")
    header_elements = []

    logo_cell = ""
    if os.path.exists(logo_path):
        logo_cell = RLImage(logo_path, width=40 * mm, height=15 * mm)

    product_para = Paragraph(
        f"<b>{product_name}</b>",
        ParagraphStyle("HeaderProduct", fontName="Helvetica-Bold", fontSize=11,
                       textColor=BRAND_GRAY, alignment=TA_RIGHT),
    )

    data = [[logo_cell, product_para]]
    t = Table(data, colWidths=[90 * mm, 80 * mm])
    t.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("ALIGN", (0, 0), (0, 0), "LEFT"),
        ("ALIGN", (1, 0), (1, 0), "RIGHT"),
        ("LINEBELOW", (0, 0), (-1, -1), 1.5, BRAND_AMBER),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
    ]))
    return t


def _spec_table(rows):
    """Parameter / Value table."""
    data = [[Paragraph(f"<b>{r[0]}</b>", body_style), Paragraph(r[1], body_style)] for r in rows]
    t = Table(data, colWidths=[85 * mm, 85 * mm])
    style = [
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("TOPPADDING", (0, 0), (-1, -1), 3),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
        ("LINEBELOW", (0, 0), (-1, -1), 0.5, BRAND_BORDER),
    ]
    for i in range(len(data)):
        if i % 2 == 0:
            style.append(("BACKGROUND", (0, i), (-1, i), HexColor("#f9f9f9")))
    t.setStyle(TableStyle(style))
    return t


def _packing_table(rows):
    """Packing list table with header."""
    header = [
        Paragraph("<b>#</b>", body_style),
        Paragraph("<b>Item</b>", body_style),
        Paragraph("<b>Qty</b>", body_style),
        Paragraph("<b>Remark</b>", body_style),
    ]
    data = [header]
    for r in rows:
        data.append([
            Paragraph(str(r[0]), body_style),
            Paragraph(r[1], body_style),
            Paragraph(str(r[2]), body_style),
            Paragraph(r[3], body_style),
        ])
    t = Table(data, colWidths=[12 * mm, 60 * mm, 15 * mm, 83 * mm])
    style = [
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("TOPPADDING", (0, 0), (-1, -1), 3),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
        ("LINEBELOW", (0, 0), (-1, 0), 1, BRAND_DARK),
        ("LINEBELOW", (0, 1), (-1, -1), 0.5, BRAND_BORDER),
        ("BACKGROUND", (0, 0), (-1, 0), HexColor("#f0f0f0")),
    ]
    t.setStyle(TableStyle(style))
    return t


def _footer_block():
    """Company info + date code + disclaimer."""
    elements = []
    elements.append(Spacer(1, 10 * mm))
    elements.append(_amber_bar())
    elements.append(Spacer(1, 6 * mm))

    elements.append(Paragraph(f"<b>{COMPANY_INFO['name']}</b>", body_style))
    elements.append(Spacer(1, 2 * mm))
    elements.append(Paragraph(COMPANY_INFO["address"], small_style))
    elements.append(Paragraph(f"Email: {COMPANY_INFO['email']}  |  Web: {COMPANY_INFO['web']}", small_style))
    elements.append(Spacer(1, 2 * mm))
    elements.append(Paragraph(f"Date Code: {DATE_CODE}", small_style))
    elements.append(Spacer(1, 6 * mm))

    elements.append(Paragraph("<b>Disclaimer</b>", ParagraphStyle("dh", parent=small_style, fontName="Helvetica-Bold")))
    elements.append(Spacer(1, 2 * mm))
    elements.append(Paragraph(DISCLAIMER, disclaimer_style))
    return elements


def _try_image(filename, width, max_height=None):
    path = os.path.join(IMAGE_DIR, filename)
    if os.path.exists(path):
        from PIL import Image as PILImage
        pil_img = PILImage.open(path)
        orig_w, orig_h = pil_img.size
        aspect = orig_h / orig_w
        height = width * aspect
        if max_height and height > max_height:
            height = max_height
            width = height / aspect
        img = RLImage(path, width=width, height=height)
        img.hAlign = "CENTER"
        return img
    return Spacer(1, 30 * mm)


RADAR_PACKING = [
    (1, "Radar Unit", 1, ""),
    (2, "Motorised Turntable", 1, ""),
    (3, "Tripod", 1, ""),
    (4, "GNSS/INS Antenna", 2, ""),
    (5, "Cable Set", 1, "Power + data, 10 m"),
    (6, "Fastener Kit", 1, ""),
]


def build_radar_pdf(model, max_range, peak_power, power_consumption, weight, weight_note, filename):
    path = os.path.join(OUTPUT_DIR, filename)
    doc = SimpleDocTemplate(
        path,
        pagesize=A4,
        leftMargin=20 * mm,
        rightMargin=20 * mm,
        topMargin=20 * mm,
        bottomMargin=20 * mm,
    )

    elements = []

    elements.append(_header_bar(f"Sky-Guard Radar {model}"))
    elements.append(Spacer(1, 6 * mm))
    elements.append(Paragraph(f"Sky-Guard Radar {model}", title_style))
    elements.append(Paragraph(f"{max_range} km Low-Altitude UAV Detection Radar", subtitle_style))
    elements.append(_try_image("product-skyguard-radar.png", 80 * mm, max_height=100 * mm))
    elements.append(Spacer(1, 6 * mm))

    elements.append(Paragraph("Overview", heading_style))
    elements.append(Paragraph(
        f"The Sky-Guard Radar {model} is a compact, fully coherent Ku-band pulse-Doppler radar "
        f"purpose-built for detecting and tracking low-altitude unmanned aerial vehicles. The system "
        f"comprises a radar unit, a motorised turntable, and display-and-control terminal software. "
        f"It outputs real-time 3D target data — range, azimuth, altitude, speed, longitude, and "
        f"latitude — and provides precise cueing to co-located electro-optical or counter-UAS effectors. "
        f"Maximum detection range is {max_range} km against small consumer-class UAVs (DJI Phantom 3/4, Pd = 85%).",
        body_style,
    ))

    elements.append(Paragraph("Operating Mode", heading_style))
    elements.append(Paragraph(
        "360° Full-Domain Low-Altitude Surveillance — the radar continuously sweeps 360° in azimuth "
        "while electronically scanning 0°–30° in elevation, automatically initiating track, maintaining "
        "target association, and reporting results to the display console.",
        body_style,
    ))

    elements.append(Paragraph("Applications", heading_style))
    bullets = [
        "Standalone tripod-mounted deployment for independent UAV detection and tracking",
        "Integration with EO identification, jamming, or spoofing sub-systems for detect-track-neutralise chains",
        "Vehicle-mounted (mobile) or rooftop-mounted (fixed) monitoring station configurations",
    ]
    for b in bullets:
        elements.append(Paragraph(f"• {b}", bullet_style))

    elements.append(Paragraph("Key Technology", heading_style))
    tech_items = [
        "Fully coherent pulse-Doppler processing",
        "Sum-and-difference monopulse angle measurement",
        "MTD coherent integration",
        "CFAR (Constant False-Alarm Rate) detection",
    ]
    for t in tech_items:
        elements.append(Paragraph(f"• {t}", bullet_style))

    elements.append(Paragraph("Specifications", heading_style))
    specs = [
        ("Frequency Band", "Ku, 16 GHz ± 100 MHz"),
        ("Azimuth Scan", "360° mechanical"),
        ("Elevation Scan (electronic)", "≥ 30°"),
        ("Beam Width (Az / El)", "≤ 3° / ≤ 6°"),
        ("Peak Transmit Power", f"≤ {peak_power} W"),
        ("Max Detection Range", f"≥ {max_range} km (DJI Phantom 3/4, Pd = 85%)"),
        ("Min Detection Range", "≤ 250 m"),
        ("Min Detectable Speed", "≤ 2.5 m/s"),
        ("Range Accuracy (RMS)", "≤ 10 m"),
        ("Azimuth Accuracy (RMS)", "≤ 0.5°"),
        ("Elevation Accuracy (RMS)", "≤ 0.5°"),
        ("Data Refresh Rate", "3 s (full 360° sweep)"),
        ("Radar Unit Dimensions", "≤ 650 × 400 × 100 mm"),
        ("Radar + Turntable Dimensions", "≤ 650 × 650 × 250 mm"),
        ("Power Supply", "+28 V DC"),
        ("Power Consumption", f"≤ {power_consumption} W (incl. turntable)"),
        ("System Weight", f"≤ {weight} kg ({weight_note})"),
        ("Interface", "Gigabit Ethernet"),
    ]
    elements.append(_spec_table(specs))

    elements.append(Paragraph("Display & Control Software", heading_style))
    elements.append(Paragraph(
        "The accompanying terminal software handles radar operation control, parameter configuration, "
        "data parsing, target display, and experimental data logging. It converts native protocols to "
        "customer-specified formats for seamless integration with third-party C2 systems.",
        body_style,
    ))

    elements.append(Paragraph("Packing List", heading_style))
    elements.append(_packing_table(RADAR_PACKING))

    elements.extend(_footer_block())

    doc.build(elements)
    print(f"  ✓ {filename}")


def build_console_pdf():
    filename = "Sky-Guard_Console_Datasheet.pdf"
    path = os.path.join(OUTPUT_DIR, filename)
    doc = SimpleDocTemplate(
        path,
        pagesize=A4,
        leftMargin=20 * mm,
        rightMargin=20 * mm,
        topMargin=20 * mm,
        bottomMargin=20 * mm,
    )

    elements = []

    elements.append(_header_bar("Sky-Guard Console"))
    elements.append(Spacer(1, 6 * mm))
    elements.append(Paragraph("Sky-Guard Console", title_style))
    elements.append(Paragraph("Digital Intelligent Flight Decision Support System", subtitle_style))
    elements.append(_try_image("product-skyguard-console-map.png", 140 * mm))
    elements.append(Spacer(1, 6 * mm))

    elements.append(Paragraph("Background", heading_style))
    elements.append(Paragraph(
        "As the low-altitude economy accelerates and public interest in recreational aviation grows, "
        "flight camps — serving general aviation, paragliding, drone testing, powered hang-gliders, "
        "hot-air balloons, and other light aircraft — are transitioning from experience-based management "
        "to data-driven, intelligent operations. Weather conditions such as wind speed, temperature, "
        "humidity, barometric pressure, cloud ceiling, and precipitation have a decisive impact on "
        "the safety and performance of light aircraft. The Sky-Guard Console bridges the gap between "
        "raw meteorological data and actionable flight decisions.",
        body_style,
    ))

    elements.append(Paragraph("Core Capabilities", heading_style))
    caps = [
        "Real-Time Weather Assessment — continuously evaluates whether conditions meet safe takeoff and landing thresholds for each aircraft type",
        "Flight Simulation — models flight attitude, climb rate, glide ratio, and control difficulty under varying meteorological scenarios",
        "Optimal Flight Planning — recommends best takeoff/landing direction, timing, climb profiles, holding patterns, and return-to-home waypoints",
        "Ideal Flight Window Prediction — forecasts time-slot-based operating windows to optimise camp scheduling and customer booking",
        "Automated Risk Alerts — generates flight-risk warnings and operational recommendations to support instructors and pilots",
        "Personalised Flight Advice — tailors recommendations based on site terrain, user profile, and spatiotemporal context",
    ]
    for c in caps:
        elements.append(Paragraph(f"• {c}", bullet_style))

    elements.append(Paragraph("Personalised Camp Features", heading_style))
    features = [
        "Individual flight decision recommendations per visitor",
        "3-day advance safety risk forecast",
        "Optimal flight period suggestions",
        "Visual flight-path preview and simulation",
        "Locally-tuned AI decision model that improves over time",
        "Emergency / sudden-change weather alerts",
    ]
    for f in features:
        elements.append(Paragraph(f"• {f}", bullet_style))

    elements.append(Paragraph("Solution Architecture", heading_style))
    elements.append(Paragraph(
        "The system fuses real-time meteorological data ingestion, an aircraft performance parameter library, "
        "aerodynamic models, and AI-assisted decision algorithms into a unified platform. Data sources include "
        "gridded weather model outputs (1–2 km resolution), on-site sensor calibration, and historical "
        "operational records.",
        body_style,
    ))

    elements.append(Paragraph("Service Tiers", heading_style))
    tier_header = [
        Paragraph("<b>Feature</b>", body_style),
        Paragraph("<b>Standard</b>", body_style),
        Paragraph("<b>Professional</b>", body_style),
        Paragraph("<b>Enterprise</b>", body_style),
    ]
    tier_data = [
        tier_header,
        [Paragraph("Core Output", body_style), Paragraph("Index monitoring & review", body_style),
         Paragraph("Index-driven decision loop", body_style), Paragraph("Full custom pipeline", body_style)],
        [Paragraph("Forecast Horizon", body_style), Paragraph("24 h rolling", body_style),
         Paragraph("48 h rolling", body_style), Paragraph("72–120 h trend", body_style)],
        [Paragraph("Monitored Points", body_style), Paragraph("5 locations", body_style),
         Paragraph("10 locations", body_style), Paragraph("10+ (expandable)", body_style)],
        [Paragraph("AI Service", body_style), Paragraph("—", body_style),
         Paragraph("Multi-index analytics", body_style), Paragraph("Self-learning model", body_style)],
        [Paragraph("Alert Channel", body_style), Paragraph("Web dashboard", body_style),
         Paragraph("Real-time push", body_style), Paragraph("Multi-channel + audit trail", body_style)],
        [Paragraph("Deliverables", body_style),
         Paragraph("Flight data logging, 24 h forecast, 5-pt report, web portal", body_style),
         Paragraph("Daily report + video, 48 h forecast, 10-pt report, push notifications", body_style),
         Paragraph("Custom reports, behaviour logging, 72–120 h forecast, 10–15 pt report, multi-system push", body_style)],
    ]
    t = Table(tier_data, colWidths=[35 * mm, 40 * mm, 45 * mm, 50 * mm])
    t.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("TOPPADDING", (0, 0), (-1, -1), 3),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
        ("LINEBELOW", (0, 0), (-1, 0), 1, BRAND_DARK),
        ("LINEBELOW", (0, 1), (-1, -1), 0.5, BRAND_BORDER),
        ("BACKGROUND", (0, 0), (-1, 0), HexColor("#f0f0f0")),
    ]))
    elements.append(t)

    elements.append(Paragraph("Compliance & Risk Boundaries", heading_style))
    compliance = [
        "The service provides indices and advisory actions only; it does not replace any certified environmental data product.",
        "Indices serve as decision support, not the sole basis for safety or regulatory compliance. Operators must retain final authority and on-site verification procedures.",
        "When historical data is insufficient or significantly biased, model uncertainty will increase. The system flags such conditions and supports fallback to rule-based / conservative strategies.",
    ]
    for c in compliance:
        elements.append(Paragraph(f"• {c}", bullet_style))

    elements.extend(_footer_block())

    doc.build(elements)
    print(f"  ✓ {filename}")


if __name__ == "__main__":
    print("Generating Sky-Guard datasheets...")
    build_radar_pdf("R3000", 3, 20, 150, 30, "radar + turntable", "Sky-Guard_Radar_R3000_Datasheet.pdf")
    build_radar_pdf("R5000", 5, 100, 200, 35, "radar + turntable + tripod", "Sky-Guard_Radar_R5000_Datasheet.pdf")
    build_console_pdf()
    print("Done! PDFs saved to:", OUTPUT_DIR)
