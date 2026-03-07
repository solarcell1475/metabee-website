#!/usr/bin/env python3
"""Generate an animated GIF of the MetaBee logo with rotating wing effect."""

from PIL import Image, ImageDraw, ImageFont
import numpy as np
import os

LOGO_ICON = "/Users/solarcell1474/metabee website/metabee-site/public/assets/images/logo/logo-hexagon-master.png"
OUT_DIR = "/Users/solarcell1474/metabee website/metabee-site/public/assets/images/logo"

AMBER = (240, 180, 41)
BG = (10, 10, 10)

TOTAL_FRAMES = 24
FRAME_DURATION_MS = 100

WING_BOX = (370, 440, 710, 760)
WING_CX = (WING_BOX[0] + WING_BOX[2]) // 2
WING_CY = (WING_BOX[1] + WING_BOX[3]) // 2


def make_base_and_wing(icon):
    """Split icon into a base (wing erased) and a wing-only image."""
    base = icon.copy()
    wing = Image.new("RGBA", icon.size, (0, 0, 0, 0))

    base_arr = np.array(base)
    wing_arr = np.array(wing)
    icon_arr = np.array(icon)

    l, t, r, b = WING_BOX
    wing_arr[t:b, l:r] = icon_arr[t:b, l:r]
    base_arr[t:b, l:r, 3] = 0

    return Image.fromarray(base_arr, "RGBA"), Image.fromarray(wing_arr, "RGBA")


def rotate_wing(wing_img, angle):
    """Rotate wing around its center point, keeping everything else transparent."""
    rotated = wing_img.rotate(angle, resample=Image.BICUBIC, center=(WING_CX, WING_CY))
    return rotated


def compose_frame(base, wing, angle, bg_color=BG):
    """Compose a single frame: dark background + static base + rotated wing."""
    canvas = Image.new("RGBA", base.size, (*bg_color, 255))
    canvas = Image.alpha_composite(canvas, base)
    rotated_wing = rotate_wing(wing, angle)
    canvas = Image.alpha_composite(canvas, rotated_wing)
    return canvas


def make_icon_with_text(frame, text, target_height, bg_color=BG):
    """Scale icon frame and add text to the right."""
    scale = target_height / frame.height
    icon_w = int(frame.width * scale)
    icon_resized = frame.resize((icon_w, target_height), Image.LANCZOS)

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
    total_w = icon_w + gap + text_w + 10
    canvas = Image.new("RGBA", (total_w, target_height), (*bg_color, 255))
    canvas.paste(icon_resized, (0, 0), icon_resized)

    draw = ImageDraw.Draw(canvas)
    text_y = (target_height - text_h) // 2 - text_bbox[1]
    draw.text((icon_w + gap, text_y), text, fill=(*AMBER, 255), font=font)

    return canvas


def generate():
    print("Loading icon...")
    icon = Image.open(LOGO_ICON).convert("RGBA")
    print(f"  Size: {icon.size}")

    print("Splitting base and wing...")
    base, wing = make_base_and_wing(icon)

    print(f"Generating {TOTAL_FRAMES} rotation frames...")
    target_h = 120
    frames = []

    for i in range(TOTAL_FRAMES):
        angle = (360.0 / TOTAL_FRAMES) * i
        composed = compose_frame(base, wing, angle)
        frame_with_text = make_icon_with_text(composed, "MetaBee", target_h)
        frames.append(frame_with_text.convert("RGB"))

    hold_frames = 8
    for _ in range(hold_frames):
        frames.append(frames[0].copy())

    out_path = os.path.join(OUT_DIR, "logo-metabee-animated.gif")
    frames[0].save(
        out_path,
        save_all=True,
        append_images=frames[1:],
        duration=FRAME_DURATION_MS,
        loop=0,
    )
    print(f"  Saved: {out_path} ({len(frames)} frames, {len(frames) * FRAME_DURATION_MS}ms)")

    navbar_frames = []
    for f in frames:
        small = f.resize((f.width * 80 // target_h, 80), Image.LANCZOS)
        navbar_frames.append(small)

    navbar_path = os.path.join(OUT_DIR, "logo-metabee-navbar-animated.gif")
    navbar_frames[0].save(
        navbar_path,
        save_all=True,
        append_images=navbar_frames[1:],
        duration=FRAME_DURATION_MS,
        loop=0,
    )
    print(f"  Saved: {navbar_path} ({navbar_frames[0].size})")


if __name__ == "__main__":
    generate()
    print("Done!")
