#!/usr/bin/env python3
"""Process the MetaBee hexagonal logo: remove background, crop, generate variants."""

from PIL import Image, ImageDraw, ImageFont
import numpy as np
import os

SRC = "/Users/solarcell1474/metabee website/Metabee raw material/proposal material/BeeLogo_Company_large/metabee logo.png"
OUT_DIR = "/Users/solarcell1474/metabee website/metabee-site/public/assets/images/logo"
FAVICON_DIR = "/Users/solarcell1474/metabee website/metabee-site/public"

AMBER = (240, 180, 41, 255)  # #f0b429
BG_COLOR = (58, 58, 58)
BG_TOLERANCE = 30

os.makedirs(OUT_DIR, exist_ok=True)


def remove_background(img):
    """Replace near-#3a3a3a pixels with transparent."""
    arr = np.array(img.convert("RGBA")).copy()
    r, g, b = arr[:, :, 0].astype(int), arr[:, :, 1].astype(int), arr[:, :, 2].astype(int)
    bg_mask = (
        (abs(r - BG_COLOR[0]) < BG_TOLERANCE)
        & (abs(g - BG_COLOR[1]) < BG_TOLERANCE)
        & (abs(b - BG_COLOR[2]) < BG_TOLERANCE)
    )
    arr[bg_mask, 3] = 0
    return Image.fromarray(arr, "RGBA")


def get_content_bbox(img):
    """Get bounding box of non-transparent content."""
    arr = np.array(img)
    alpha = arr[:, :, 3]
    rows = np.any(alpha > 10, axis=1)
    cols = np.any(alpha > 10, axis=0)
    rmin, rmax = np.where(rows)[0][[0, -1]]
    cmin, cmax = np.where(cols)[0][[0, -1]]
    return cmin, rmin, cmax + 1, rmax + 1


def crop_with_padding(img, bbox, pad=10):
    """Crop to bbox with optional padding."""
    left, top, right, bottom = bbox
    left = max(0, left - pad)
    top = max(0, top - pad)
    right = min(img.width, right + pad)
    bottom = min(img.height, bottom + pad)
    return img.crop((left, top, right, bottom))


def make_icon_with_text(icon_img, text, target_height):
    """Compose icon + text horizontally at given height."""
    scale = target_height / icon_img.height
    icon_w = int(icon_img.width * scale)
    icon_resized = icon_img.resize((icon_w, target_height), Image.LANCZOS)

    font_size = int(target_height * 0.45)
    try:
        font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", font_size, index=1)
    except Exception:
        font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", font_size)

    temp = Image.new("RGBA", (2000, target_height), (0, 0, 0, 0))
    draw = ImageDraw.Draw(temp)
    text_bbox = draw.textbbox((0, 0), text, font=font)
    text_w = text_bbox[2] - text_bbox[0]
    text_h = text_bbox[3] - text_bbox[1]

    gap = int(target_height * 0.15)
    total_w = icon_w + gap + text_w
    canvas = Image.new("RGBA", (total_w, target_height), (0, 0, 0, 0))
    canvas.paste(icon_resized, (0, 0), icon_resized)

    draw = ImageDraw.Draw(canvas)
    text_y = (target_height - text_h) // 2 - text_bbox[1]
    draw.text((icon_w + gap, text_y), text, fill=AMBER, font=font)

    return canvas


print("1. Loading source logo...")
src_img = Image.open(SRC).convert("RGBA")
print(f"   Source: {src_img.size}")

print("2. Removing background...")
transparent = remove_background(src_img)

print("3. Cropping icon region (rows 330-1100)...")
icon_region = transparent.crop((1040, 330, 1780, 1100))
icon_bbox = get_content_bbox(icon_region)
icon_cropped = crop_with_padding(icon_region, icon_bbox, pad=5)
print(f"   Icon cropped: {icon_cropped.size}")

master_path = os.path.join(OUT_DIR, "logo-hexagon-master.png")
icon_cropped.save(master_path)
print(f"   Saved: {master_path}")

print("4. Generating navbar logo (icon + 'MetaBee', h=100)...")
navbar = make_icon_with_text(icon_cropped, "MetaBee", 100)
navbar_path = os.path.join(OUT_DIR, "logo-metabee-navbar.png")
navbar.save(navbar_path)
print(f"   Saved: {navbar_path} ({navbar.size})")

print("5. Generating footer logo (icon + 'MetaBee', h=60)...")
footer = make_icon_with_text(icon_cropped, "MetaBee", 60)
footer_path = os.path.join(OUT_DIR, "logo-metabee-footer.png")
footer.save(footer_path)
print(f"   Saved: {footer_path} ({footer.size})")

print("6. Generating PDF logo (icon + 'MetaBee', h=150)...")
pdf_logo = make_icon_with_text(icon_cropped, "MetaBee", 150)
pdf_path = os.path.join(OUT_DIR, "logo-metabee-pdf.png")
pdf_logo.save(pdf_path)
print(f"   Saved: {pdf_path} ({pdf_logo.size})")

print("7. Generating favicons...")
for size, name in [(32, "favicon-32.png"), (64, "favicon-64.png"), (180, "apple-touch-icon.png")]:
    if size == 180:
        pad = 20
        inner = size - 2 * pad
        scaled = icon_cropped.resize((inner, inner), Image.LANCZOS)
        canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
        canvas.paste(scaled, (pad, pad), scaled)
    else:
        canvas = icon_cropped.resize((size, size), Image.LANCZOS)
    out_path = os.path.join(FAVICON_DIR, name)
    canvas.save(out_path)
    print(f"   Saved: {out_path} ({size}x{size})")

print("\nAll logo variants generated successfully!")
