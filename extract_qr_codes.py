#!/usr/bin/env python3
"""Extract QR code regions from WeChat and WhatsApp contact images."""

from PIL import Image
import os

BASE = os.path.dirname(os.path.abspath(__file__))
OUT_DIR = os.path.join(BASE, "public", "assets", "images", "namecard")
os.makedirs(OUT_DIR, exist_ok=True)

# WeChat: 864x1245 - white bg, QR in center with WeChat logo
wechat_path = os.path.join(BASE, "public", "Wechat_NGKUNGBO.jpeg")
if os.path.exists(wechat_path):
    img = Image.open(wechat_path).convert("RGB")
    w, h = img.size
    qr_size = 450
    left = (w - qr_size) // 2
    top = int(h * 0.22)  # below header
    box = (left, top, left + qr_size, top + qr_size)
    crop = img.crop(box)
    crop.save(os.path.join(OUT_DIR, "qr-wechat.png"), "PNG")
    print(f"Saved: {OUT_DIR}/qr-wechat.png")

# WhatsApp: 946x2048 - phone screenshot, QR in white box on dark card
wa_path = os.path.join(BASE, "public", "WhatsApp NGKUNGBO.jpeg")
if os.path.exists(wa_path):
    img = Image.open(wa_path).convert("RGB")
    w, h = img.size
    qr_size = 480
    left = (w - qr_size) // 2
    top = int(h * 0.28)  # below nav + profile
    box = (left, top, left + qr_size, top + qr_size)
    crop = img.crop(box)
    crop.save(os.path.join(OUT_DIR, "qr-whatsapp.png"), "PNG")
    print(f"Saved: {OUT_DIR}/qr-whatsapp.png")
