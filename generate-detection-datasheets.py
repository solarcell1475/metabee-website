#!/usr/bin/env python3
"""Generate Sky-Guard Detection Systems A4 PDF datasheets."""

from __future__ import annotations

import datetime
import os
from pathlib import Path

from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase.cidfonts import UnicodeCIDFont
from reportlab.pdfbase.pdfmetrics import registerFont
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    Image as RLImage,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

ROOT = Path(__file__).resolve().parent
OUTPUT_DIR = ROOT / "public" / "downloads"
IMAGE_DIR = ROOT / "public" / "assets" / "images" / "products" / "detection"

OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

registerFont(UnicodeCIDFont("STSong-Light"))

ARIAL_UNICODE = "/System/Library/Fonts/Supplemental/Arial Unicode.ttf"
if not os.path.exists(ARIAL_UNICODE):
    ARIAL_UNICODE = "/Library/Fonts/Arial Unicode.ttf"
if os.path.exists(ARIAL_UNICODE):
    registerFont(TTFont("ArialUnicode", ARIAL_UNICODE))
else:
    ARIAL_UNICODE = ""

BRAND_DARK = HexColor("#0a0a0a")
BRAND_AMBER = HexColor("#f0b429")
BRAND_GRAY = HexColor("#404040")
BRAND_LIGHTGRAY = HexColor("#737373")
BRAND_BORDER = HexColor("#e5e5e5")

COMPANY_INFO = {
    "name": "MetaBee Technology Limited",
    "email": "info@metabee.com.hk",
    "web": "www.metabee.com.hk",
    "address": "Unit 836, 8/F, Building 8, Hong Kong-Shenzhen Innovation and Technology Park, Hong Kong",
}

DATE_CODE = datetime.date.today().strftime("%B %Y")

DISCLAIMER_EN = (
    "The information contained in this document is provided for reference purposes only. "
    "Specifications are subject to change without prior notice. Actual performance may vary "
    "depending on operating environment, deployment configuration, and integration conditions."
)

DISCLAIMER_ZH = (
    "本文件信息仅供参考，产品规格可能在不另行通知的情况下调整。实际性能会因运行环境、"
    "部署配置及系统集成条件而有所不同，最终参数以正式技术文件和项目确认版本为准。"
)


def style(name: str, font: str, size: float, leading: float, color=BRAND_GRAY, **kwargs):
    return ParagraphStyle(
        name,
        fontName=font,
        fontSize=size,
        leading=leading,
        textColor=color,
        **kwargs,
    )


STYLES = {
    "en": {
        "font": "Helvetica",
        "bold": "Helvetica-Bold",
        "title": style("TitleEN", "Helvetica-Bold", 22, 27, BRAND_DARK),
        "subtitle": style("SubtitleEN", "Helvetica", 12, 16, BRAND_GRAY),
        "heading": style("HeadingEN", "Helvetica-Bold", 13, 17, BRAND_DARK, spaceBefore=7 * mm, spaceAfter=3 * mm),
        "body": style("BodyEN", "Helvetica", 9.5, 13.5, BRAND_GRAY),
        "small": style("SmallEN", "Helvetica", 7.5, 10, BRAND_LIGHTGRAY),
    },
    "zh": {
        "font": "ArialUnicode" if ARIAL_UNICODE else "STSong-Light",
        "bold": "ArialUnicode" if ARIAL_UNICODE else "STSong-Light",
        "title": style("TitleZH", "ArialUnicode" if ARIAL_UNICODE else "STSong-Light", 21, 27, BRAND_DARK),
        "subtitle": style("SubtitleZH", "ArialUnicode" if ARIAL_UNICODE else "STSong-Light", 12, 17, BRAND_GRAY),
        "heading": style("HeadingZH", "ArialUnicode" if ARIAL_UNICODE else "STSong-Light", 13, 18, BRAND_DARK, spaceBefore=7 * mm, spaceAfter=3 * mm),
        "body": style("BodyZH", "ArialUnicode" if ARIAL_UNICODE else "STSong-Light", 9.5, 14, BRAND_GRAY),
        "small": style("SmallZH", "ArialUnicode" if ARIAL_UNICODE else "STSong-Light", 7.5, 10.5, BRAND_LIGHTGRAY),
    },
}


PRODUCTS = [
    {
        "lang": "en",
        "filename": "Sky-Guard_Remote_ID_Monitoring_Node_Datasheet_EN.pdf",
        "title": "Sky-Guard BG-360R Remote ID Monitoring Node",
        "subtitle": "Receive-only Remote ID reception for cooperative airspace awareness",
        "summary": "A fixed-mounted, receive-only Remote ID monitoring node. Each node listens to Remote ID broadcasts from compliant drones — serial number, type, position, speed, altitude, and pilot location — building a live cooperative traffic picture for sites, corridors, and city-scale networks. Aircraft without Remote ID stand out for spectrum-sensor confirmation.",
        "image": "bg360r-node-render-print.jpg",
        "features": [
            "Receive-only operation with zero RF emissions — licence-friendly for dense urban and corridor deployments.",
            "Decodes Remote ID broadcasts: serial number, type, position, speed, altitude, and pilot location.",
            "≤ 25 W power draw — solar-viable for standalone node deployments.",
            "Dual-band Remote ID receiver in a sealed sensor dome with 360° horizontal, 90° vertical coverage.",
            "Networked operation with the LAWN platform and third-party UTM feeds.",
        ],
        "specs": [
            ("Model", "BG-360R"),
            ("Detection Mode", "Remote ID broadcast reception (receive-only)"),
            ("Coverage", "0–1 km urban / 1–3 km open, per node"),
            ("Concurrent Targets", "50+ aircraft"),
            ("Refresh Rate", "1–3 s position updates"),
            ("Field of View", "360° horizontal; 90° vertical"),
            ("Power Draw", "≤ 25 W — solar-viable"),
            ("RF Emissions", "None (receive-only)"),
        ],
    },
    {
        "lang": "zh",
        "filename": "Sky-Guard_天卫BG-360R_Remote_ID监测节点_产品手册.pdf",
        "title": "Sky-Guard 天卫 BG-360R Remote ID 监测节点",
        "subtitle": "只收不发的 Remote ID 接收，构建合作目标空情感知",
        "summary": "固定安装、只收不发的 Remote ID 监测节点。每个节点持续接收合规无人机的 Remote ID 广播——序列号、机型、位置、速度、高度和飞手位置——为站点、走廊和城市级网络构建实时合作目标空情。未广播 Remote ID 的目标即时凸显，转交频谱传感器确认。",
        "image": "bg360r-node-render-print.jpg",
        "features": [
            "只收不发、零射频辐射，适合城市与走廊密集部署。",
            "解码 Remote ID 广播：序列号、机型、位置、速度、高度与飞手位置。",
            "功耗 ≤ 25 W，支持太阳能独立供电。",
            "密封传感器罩内的双频 Remote ID 接收机，单节点水平 360°、垂直 90° 覆盖。",
            "接入 LAWN 平台及第三方 UTM 数据链路组网。",
        ],
        "specs": [
            ("型号", "BG-360R"),
            ("工作模式", "Remote ID 广播接收（只收不发）"),
            ("覆盖范围", "单节点城市 0–1 km / 空旷 1–3 km"),
            ("同时侦测数量", "≥ 50 架"),
            ("刷新率", "位置更新 1–3 s"),
            ("视场", "水平 360°；垂直 90°"),
            ("功耗", "≤ 25 W，支持太阳能"),
            ("射频辐射", "无（纯接收）"),
        ],
    },
    {
        "lang": "en",
        "filename": "Sky-Guard_Radar_Detection_System_Datasheet_EN.pdf",
        "title": "Sky-Guard Radar Detection System",
        "subtitle": "360° low-altitude UAV detection and precision EO cueing",
        "summary": "A Ku-band radar subsystem composed of the radar unit, motorised turntable, and operator terminal software. It detects and tracks low-altitude UAV targets, outputs real-time 3D target parameters, and provides precise cueing for electro-optical, jamming, and spoofing subsystems.",
        "image": "radar-detection-1.png",
        "features": [
            "360° mechanical azimuth scan with electronic elevation coverage from 0° to 30°.",
            "Outputs range, azimuth, altitude, speed, longitude, and latitude in real time.",
            "Supports tripod deployment, vehicle-roof mobile monitoring, or fixed rooftop stations.",
            "Fully coherent pulse-Doppler processing, monopulse angle measurement, MTD integration, and CFAR detection.",
            "Track initiation, target association, terminal reporting, and guidance output for EO identification.",
        ],
        "specs": [
            ("Frequency Band", "Ku, 16 GHz ± 100 MHz"),
            ("Azimuth / Elevation", "360° mechanical / ≥ 30° electronic"),
            ("Max Detection Range", "≥ 3 km (DJI Phantom 3/4, Pd = 85%)"),
            ("Minimum Detection Range", "≤ 250 m"),
            ("Minimum Detectable Speed", "≤ 1.5 m/s"),
            ("3D Accuracy", "Range ≤ 10 m; azimuth/elevation ≤ 0.5° RMS"),
            ("Refresh Rate", "3 s per 360° scan"),
            ("Weight / Power", "≤ 30 kg; ≤ 150 W including turntable"),
        ],
    },
    {
        "lang": "zh",
        "filename": "Sky-Guard_天卫雷达探测系统_产品手册.pdf",
        "title": "Sky-Guard 天卫雷达探测系统",
        "subtitle": "360°低空无人机探测与光电精确引导",
        "summary": "由雷达主机、转台和操控终端软件组成，面向低空无人机目标探测与跟踪，可实时输出距离、方位、高度、速度、经纬度等三维目标信息，并为光电识别、干扰或诱骗系统提供精确引导。",
        "image": "radar-detection-1.png",
        "features": [
            "方位 360° 机械周扫，俯仰 0°–30° 相扫覆盖。",
            "实时输出距离、方位角、高度、速度、经纬度等目标参数。",
            "支持三脚架独立部署、车顶移动监测站和楼顶固定站部署。",
            "采用全相参脉冲多普勒、和差单脉冲测角、MTD 相参积累与 CFAR 恒虚警检测。",
            "目标建航、跟踪、关联与显控终端上报，可向光电识别系统输出引导信息。",
        ],
        "specs": [
            ("工作频段", "Ku，16 GHz ± 100 MHz"),
            ("方位 / 俯仰", "360° 机械扫描 / ≥ 30° 电子扫描"),
            ("最大探测距离", "≥ 3 km（大疆精灵 3/4，Pd = 85%）"),
            ("最小探测距离", "≤ 250 m"),
            ("最低探测速度", "≤ 1.5 m/s"),
            ("三坐标精度", "距离 ≤ 10 m；方位/俯仰 ≤ 0.5° RMS"),
            ("数据刷新率", "3 s / 360° 周扫"),
            ("重量 / 功耗", "≤ 30 kg；≤ 150 W（含转台）"),
        ],
    },
    {
        "lang": "en",
        "filename": "Sky-Guard_AoA_Drone_Signal_Detection_System_Datasheet_EN.pdf",
        "title": "Sky-Guard SG-6000F AoA Drone Signal Detection System",
        "subtitle": "Passive 360° RF sensing for unattended site protection",
        "summary": "A fixed-mounted passive drone detection system based on SDR architecture and spectrum identification technology. It performs 360° reconnaissance, identification, direction finding, and tracking for multiple UAV types, supporting long-range detection and integration with external systems.",
        "image": "aoa-luneburg-rooftop-deployment.png",
        "features": [
            "Passive RF detection with no active emissions.",
            "Customisable detection bands from 20 MHz to 6 GHz with 200 MHz instantaneous bandwidth.",
            "24/7 unattended wake-up, alerting, historical query, and trajectory playback.",
            "Spectrum recognition, protocol parsing, Remote ID, O4 decoding, and 600+ model recognition.",
        ],
        "specs": [
            ("Model", "SG-6000F"),
            ("Detection Mode", "Radio-frequency passive detection"),
            ("Coverage Band", "20 MHz to 6000 MHz"),
            ("Instantaneous Bandwidth", "200 MHz"),
            ("Detection Direction", "360° omnidirectional"),
            ("Detection Range", "5–8 km open areas; 1–3 km urban areas"),
            ("Simultaneous Targets", "≥ 100 aircraft"),
            ("Protection / Temperature", "IP66; -30°C to +65°C"),
            ("Size / Weight", "Approx. Φ450 × H400 mm; approx. 13 kg"),
        ],
    },
    {
        "lang": "zh",
        "filename": "Sky-Guard_天卫AoA无人机信号侦测系统_产品手册.pdf",
        "title": "Sky-Guard 天卫 SG-6000F AoA 无人机信号侦测系统",
        "subtitle": "面向无人值守站点防护的 360° AoA 无源射频侦测",
        "summary": "基于 SDR 架构、频谱识别技术和 AoA / Luneburg lens 天线能力的无源无人机信号侦测系统，可对各类无人机进行 360° 全向侦察、识别、测向与跟踪，支持远距离探测和多系统集成。",
        "image": "aoa-luneburg-rooftop-deployment.png",
        "features": [
            "无源射频侦测，不主动发射信号。",
            "20 MHz 至 6 GHz 多频段覆盖，重点频段可配置。",
            "AoA / Luneburg lens 多波束天线提升 360° 方位感知和测向能力。",
            "支持 24 小时无人值守、自动唤醒、告警、历史查询与轨迹回放。",
            "支持频谱识别、协议解析、Remote ID、O4 解码和 600+ 机型识别。",
        ],
        "specs": [
            ("型号", "SG-6000F"),
            ("工作模式", "无线电无源侦测"),
            ("侦测覆盖频段", "20 MHz 至 6000 MHz"),
            ("最大瞬时带宽", "200 MHz"),
            ("侦测方向", "360° 全向"),
            ("侦测距离", "空旷环境 5–8 km；城市环境 1–3 km"),
            ("同时侦测数量", "≥ 100 架"),
            ("防护 / 温度", "IP66；-30°C 至 +65°C"),
            ("尺寸 / 重量", "约 Φ450 × H400 mm；约 13 kg"),
        ],
    },
    {
        "lang": "en",
        "filename": "Sky-Guard_Handheld_Drone_Locator_Datasheet_EN.pdf",
        "title": "Sky-Guard SG-6000P Handheld Drone Locator",
        "subtitle": "Portable drone and pilot locating for field security teams",
        "summary": "A new-generation handheld drone detection and locating device for low-altitude security operations. It integrates spectrum detection, protocol analysis, Remote ID recognition, FPV detection, and real-time warning in a lightweight field-ready form factor.",
        "image": "handheld-locator-1.png",
        "features": [
            "Portable single-operator device weighing approximately 658 g with antenna.",
            "Detects 900+ drone types including DJI O4, Autel, Feimi, Wi-Fi drones, and FPV racing drones.",
            "Supports drone positioning, pilot positioning, trajectory playback, and route navigation.",
            "Low-frequency FPV detection, first-person-view image demodulation, Remote ID, and platform networking.",
        ],
        "specs": [
            ("Model", "SG-6000P"),
            ("Frequency Range", "100 MHz to 6 GHz"),
            ("Detection Radius", "1.5–2 km urban; 2–3 km open areas"),
            ("Response Time", "3–5 s"),
            ("Simultaneous Detection", "≥ 10 targets"),
            ("Dimensions / Weight", "185 × 80 × 33 mm; 658 ± 10 g with antenna"),
            ("Battery / Runtime", "8000 mAh; 3–4 h typical runtime"),
            ("Display", "6-inch touch screen, 1080 × 2160"),
            ("System", "Android 12; 8 GB memory; 256 GB storage"),
        ],
    },
    {
        "lang": "zh",
        "filename": "Sky-Guard_天卫手持式无人机侦测定位设备_产品手册.pdf",
        "title": "Sky-Guard 天卫 SG-6000P 手持式无人机侦测定位设备",
        "subtitle": "面向现场安保团队的便携式无人机与飞手定位",
        "summary": "全新一代手持式无人机侦测定位设备，面向低空安防现场应用，集频谱探测、协议解析、Remote ID 识别、FPV 探测和实时告警于一体，轻量便携、即开即用。",
        "image": "handheld-locator-1.png",
        "features": [
            "单兵便携，含天线重量约 658 g。",
            "支持 900+ 型无人机侦测，包括大疆 O4、道通、飞米、Wi-Fi 机和自制穿越机。",
            "支持无人机定位、飞手定位、轨迹回放和位置导航。",
            "支持低频 FPV 探测、第一视角图像解调、Remote ID 和平台组网联动。",
        ],
        "specs": [
            ("型号", "SG-6000P"),
            ("探测频段", "100 MHz 至 6 GHz"),
            ("侦测半径", "城市环境 1.5–2 km；空旷环境 2–3 km"),
            ("响应时间", "3–5 s"),
            ("同时侦测数量", "≥ 10 架次"),
            ("尺寸 / 重量", "185 × 80 × 33 mm；658 ± 10 g（含天线）"),
            ("电池 / 续航", "8000 mAh；典型续航 3–4 小时"),
            ("显示屏", "6 英寸触控屏，1080 × 2160"),
            ("系统", "Android 12；8 GB 内存；256 GB 存储"),
        ],
    },
    {
        "lang": "en",
        "filename": "Sky-Guard_EO_Tracking_System_Datasheet_EN.pdf",
        "title": "Sky-Guard EO Tracking System",
        "subtitle": "Visible-light and thermal imaging for target confirmation",
        "summary": "An electro-optical tracking subsystem combining visible-light imaging, infrared thermal imaging, multi-spectral fusion, and servo tracking. It delivers day/night target detection, tracking, identification, and intelligent warning for low, slow, and small aerial targets.",
        "image": "eo-rooftop-waterfront-deployment.jpg",
        "features": [
            "Visible-light + thermal imaging channels with multi-spectral data fusion.",
            "48× optical continuous zoom with automatic focus and optical defogging.",
            "Horizontal 360° continuous rotation and -90° to +90° pitch coverage.",
            "Radar guidance, spectrum-positioning guidance, GPS, environmental data, and power-management access.",
        ],
        "specs": [
            ("Visible Camera", "1920 × 1080 @ 25/30 fps"),
            ("Optical Lens", "F6.5–312 mm, 48× continuous zoom"),
            ("Thermal Imaging", "Uncooled 640 × 512; 75 mm fixed lens"),
            ("Day UAV Detection", "≥ 2.5 km detection; ≥ 2 km tracking"),
            ("Night UAV Detection", "≥ 1.2 km detection; ≥ 1 km tracking"),
            ("Gimbal", "360° pan; -90° to +90° tilt; ±0.01° preset accuracy"),
            ("Power / Weight", "≤ 30 W steady-state; ≤ 8 kg"),
            ("Protection", "IP66"),
        ],
    },
    {
        "lang": "zh",
        "filename": "Sky-Guard_天卫光电跟踪系统_产品手册.pdf",
        "title": "Sky-Guard 天卫光电跟踪系统",
        "subtitle": "可见光与红外热成像融合的目标确认与跟踪",
        "summary": "光电跟踪系统融合可见光成像、红外热成像、多光谱数据融合和伺服跟踪能力，可实现低小慢目标的昼夜探测、跟踪、识别和智能预警。",
        "image": "eo-rooftop-waterfront-deployment.jpg",
        "features": [
            "可见光 + 红外热成像，多通道成像与数据融合。",
            "48 倍光学连续变焦，支持自动聚焦和光学透雾。",
            "水平 360° 无限位旋转，俯仰 -90° 至 +90° 覆盖。",
            "可接入雷达引导、频谱定位引导、GPS、环境数据和电源管理。",
        ],
        "specs": [
            ("可见光相机", "1920 × 1080 @ 25/30 fps"),
            ("光学镜头", "F6.5–312 mm，48 倍连续变焦"),
            ("红外热像", "非制冷 640 × 512；75 mm 定焦镜头"),
            ("白天无人机探测", "探测 ≥ 2.5 km；跟踪 ≥ 2 km"),
            ("夜间无人机探测", "探测 ≥ 1.2 km；跟踪 ≥ 1 km"),
            ("云台", "360° 水平；-90° 至 +90° 俯仰；预置位精度 ±0.01°"),
            ("功耗 / 重量", "稳态 ≤ 30 W；整机 ≤ 8 kg"),
            ("防护等级", "IP66"),
        ],
    },
]


def header_table(product, styles):
    logo = Paragraph(
        '<font color="#f0b429"><b>MetaBee</b></font>',
        ParagraphStyle(
            "Logo",
            fontName=styles["bold"],
            fontSize=18,
            leading=22,
            textColor=BRAND_DARK,
        ),
    )
    product_name = Paragraph(
        f"<b>{product['title']}</b>",
        ParagraphStyle(
            "HeaderProduct",
            fontName=styles["bold"],
            fontSize=10,
            leading=13,
            textColor=BRAND_GRAY,
            alignment=TA_RIGHT,
        ),
    )
    table = Table([[logo, product_name]], colWidths=[70 * mm, 100 * mm])
    table.setStyle(
        TableStyle(
            [
                ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
                ("LINEBELOW", (0, 0), (-1, -1), 1.5, BRAND_AMBER),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
            ]
        )
    )
    return table


def spec_table(product, styles):
    body = styles["body"]
    rows = [[Paragraph(f"<b>{label}</b>", body), Paragraph(value, body)] for label, value in product["specs"]]
    table = Table(rows, colWidths=[70 * mm, 100 * mm])
    table_style = [
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("TOPPADDING", (0, 0), (-1, -1), 3),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
        ("LINEBELOW", (0, 0), (-1, -1), 0.5, BRAND_BORDER),
    ]
    for idx in range(len(rows)):
        if idx % 2 == 0:
            table_style.append(("BACKGROUND", (0, idx), (-1, idx), HexColor("#f9f9f9")))
    table.setStyle(TableStyle(table_style))
    return table


def product_image(product):
    path = IMAGE_DIR / product["image"]
    if not path.exists():
        return Spacer(1, 10 * mm)
    img = RLImage(str(path), width=95 * mm, height=45 * mm, kind="proportional")
    img.hAlign = "CENTER"
    return img


def footer(styles, lang):
    disclaimer = DISCLAIMER_ZH if lang == "zh" else DISCLAIMER_EN
    return [
        Spacer(1, 7 * mm),
        Table([[""]], colWidths=[170 * mm], rowHeights=[1.8 * mm], style=[("BACKGROUND", (0, 0), (-1, -1), BRAND_AMBER)]),
        Spacer(1, 4 * mm),
        Paragraph(f"<b>{COMPANY_INFO['name']}</b>", styles["body"]),
        Paragraph(COMPANY_INFO["address"], styles["small"]),
        Paragraph(f"Email: {COMPANY_INFO['email']}  |  Web: {COMPANY_INFO['web']}", styles["small"]),
        Paragraph(f"Date Code: {DATE_CODE}", styles["small"]),
        Spacer(1, 3 * mm),
        Paragraph(disclaimer, styles["small"]),
    ]


def build_pdf(product):
    styles = STYLES[product["lang"]]
    doc = SimpleDocTemplate(
        str(OUTPUT_DIR / product["filename"]),
        pagesize=A4,
        rightMargin=20 * mm,
        leftMargin=20 * mm,
        topMargin=16 * mm,
        bottomMargin=16 * mm,
        title=product["title"],
        author=COMPANY_INFO["name"],
    )
    story = [
        header_table(product, styles),
        Spacer(1, 8 * mm),
        Paragraph(product["title"], styles["title"]),
        Paragraph(product["subtitle"], styles["subtitle"]),
        product_image(product),
        Spacer(1, 6 * mm),
        Paragraph("Overview" if product["lang"] == "en" else "产品概述", styles["heading"]),
        Paragraph(product["summary"], styles["body"]),
        Paragraph("Key Capabilities" if product["lang"] == "en" else "核心能力", styles["heading"]),
    ]
    for feature in product["features"]:
        story.append(Paragraph(f"- {feature}", styles["body"]))
        story.append(Spacer(1, 1.4 * mm))
    story.extend(
        [
            Paragraph("Technical Specifications" if product["lang"] == "en" else "技术参数", styles["heading"]),
            spec_table(product, styles),
            *footer(styles, product["lang"]),
        ]
    )
    doc.build(story)


def build_console_pdf():
    styles = STYLES["en"]
    filename = "Sky-Guard_Console_Datasheet.pdf"
    doc = SimpleDocTemplate(
        str(OUTPUT_DIR / filename),
        pagesize=A4,
        rightMargin=20 * mm,
        leftMargin=20 * mm,
        topMargin=16 * mm,
        bottomMargin=16 * mm,
        title="Sky-Guard Console",
        author=COMPANY_INFO["name"],
    )
    product = {"title": "Sky-Guard Console"}
    image_path = ROOT / "public/assets/images/products/product-skyguard-console-map.png"
    image_flowable = Spacer(1, 8 * mm)
    if image_path.exists():
        image_flowable = RLImage(str(image_path), width=120 * mm, height=55 * mm, kind="proportional")
        image_flowable.hAlign = "CENTER"

    body = styles["body"]
    small = styles["small"]
    tier_header = [Paragraph(f"<b>{h}</b>", body) for h in ["Feature", "Standard", "Professional", "Enterprise"]]
    tier_rows = [tier_header]
    for row in [
        ("Core Output", "Index monitoring & review", "Index-driven decision loop", "Full custom pipeline"),
        ("Forecast Horizon", "24 h rolling", "48 h rolling", "72–120 h trend"),
        ("Monitored Points", "5 custom locations", "10 custom locations", "10+ (expandable)"),
        ("AI Service", "—", "Multi-index analytics", "Self-learning model"),
        ("Alert Channel", "Web dashboard", "Real-time push notifications", "Multi-channel + audit trail"),
        (
            "Deliverables",
            "Flight data logging, 24 h forecast, 5-point report, web portal",
            "Daily report + video briefing, 48 h forecast, 10-point report, push notifications",
            "Custom decision reports, flight behaviour logging, 72–120 h forecast, 10–15 point report, multi-system push",
        ),
    ]:
        tier_rows.append([Paragraph(cell, small) for cell in row])
    tier_table = Table(tier_rows, colWidths=[32 * mm, 46 * mm, 46 * mm, 46 * mm])
    tier_style = [
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("TOPPADDING", (0, 0), (-1, -1), 3),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
        ("BACKGROUND", (0, 0), (-1, 0), HexColor("#f4f4f4")),
        ("LINEBELOW", (0, 0), (-1, -1), 0.4, BRAND_BORDER),
    ]
    for idx in range(1, len(tier_rows)):
        if idx % 2 == 0:
            tier_style.append(("BACKGROUND", (0, idx), (-1, idx), HexColor("#f9f9f9")))
    tier_table.setStyle(TableStyle(tier_style))

    capabilities = [
        "<b>Real-Time Weather Assessment:</b> Continuously evaluates whether current conditions meet safe takeoff and landing thresholds for each aircraft type.",
        "<b>Flight Simulation:</b> Models flight attitude, climb rate, glide ratio, and control difficulty under varying meteorological scenarios.",
        "<b>Optimal Flight Planning:</b> Recommends best takeoff/landing direction, timing, climb profiles, holding patterns, and return-to-home waypoints.",
        "<b>Ideal Flight Window Prediction:</b> Forecasts time-slot-based operating windows to optimise camp scheduling and customer booking.",
        "<b>Automated Risk Alerts:</b> Generates flight-risk warnings and operational recommendations to support instructors and pilots in real-time decision making.",
        "<b>Personalised Flight Advice:</b> Tailors recommendations based on site terrain, user profile (age, activity intensity), and spatiotemporal context.",
    ]
    camp = [
        "Individual flight decision recommendations per visitor",
        "3-day advance safety risk forecast for the camp",
        "Optimal flight period suggestions",
        "Visual flight-path preview and simulation",
        "Locally-tuned AI decision model that improves over time",
        "Emergency / sudden-change weather alerts",
    ]
    compliance = [
        "The service provides indices and advisory actions only; it does not replace any certified environmental data product.",
        "Indices serve as decision support, not the sole basis for safety or regulatory compliance. Operators must retain final authority and on-site verification procedures.",
        "When historical data is insufficient or significantly biased, model uncertainty will increase. The system flags such conditions and supports fallback to rule-based / conservative strategies.",
    ]

    story = [
        header_table(product, styles),
        Spacer(1, 8 * mm),
        Paragraph("Sky-Guard Console", styles["title"]),
        Paragraph("Digital Intelligent Flight Decision Support System", styles["subtitle"]),
        image_flowable,
        Spacer(1, 5 * mm),
        Paragraph("Background", styles["heading"]),
        Paragraph(
            "As the low-altitude economy accelerates and public interest in recreational aviation grows, flight camps — serving general aviation, paragliding, drone testing, powered hang-gliders, hot-air balloons, and other light aircraft — are transitioning from experience-based management to data-driven, intelligent operations. Weather conditions such as wind speed, temperature, humidity, barometric pressure, cloud ceiling, and precipitation have a decisive impact on the safety and performance of light aircraft. The Sky-Guard Console bridges the gap between raw meteorological data and actionable flight decisions.",
            body,
        ),
        Paragraph("Core Capabilities", styles["heading"]),
    ]
    for item in capabilities:
        story.append(Paragraph(f"- {item}", body))
        story.append(Spacer(1, 1.2 * mm))
    story.append(Paragraph("Personalised Camp Features", styles["heading"]))
    for item in camp:
        story.append(Paragraph(f"- {item}", body))
        story.append(Spacer(1, 1.0 * mm))
    story.extend(
        [
            Paragraph("Solution Architecture", styles["heading"]),
            Paragraph(
                "The system fuses real-time meteorological data ingestion, an aircraft performance parameter library, aerodynamic models, and AI-assisted decision algorithms into a unified platform. Data sources include gridded weather model outputs (1–2 km resolution), on-site sensor calibration, and historical operational records.",
                body,
            ),
            Paragraph("Service Tiers", styles["heading"]),
            tier_table,
            Paragraph("Compliance &amp; Risk Boundaries", styles["heading"]),
        ]
    )
    for item in compliance:
        story.append(Paragraph(f"- {item}", body))
        story.append(Spacer(1, 1.0 * mm))
    story.extend(footer(styles, "en"))
    doc.build(story)
    print("generated", filename)


def main():
    for product in PRODUCTS:
        build_pdf(product)
        print("generated", product["filename"])
    build_console_pdf()


if __name__ == "__main__":
    main()
