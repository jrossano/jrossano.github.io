#!/usr/bin/env python3
"""Copy Joe's JR logo into public/brand and export favicon sizes.

Preferred source: the 1024px transparent app icon
(public/brand/jr-logo-app-icon-transparent.png). That file is copied
unchanged and resized for the nav mark, favicon, and Apple touch icon.

The original JPEG is kept beside it as public/brand/jr-logo.jpg.

If neither file is on disk, renders a stand-in from the brand tokens and
records that in public/brand/SOURCE.txt.
"""

from __future__ import annotations

import shutil
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parents[1]
BRAND = ROOT / "public" / "brand"
APP = ROOT / "app"
FONT = Path("/tmp/fonts/Inter-ExtraBold.ttf")

UPLOADS = Path("/home/ubuntu/.cursor/projects/agent-repos-tmp-5ed7a33db108ba0d/uploads")

PNG_CANDIDATES = [
    UPLOADS / "jr-logo-app-icon-transparent_ae6e.png",
    UPLOADS / "jr-logo-app-icon-transparent.png",
    ROOT / "uploads" / "jr-logo-app-icon-transparent.png",
    BRAND / "jr-logo-app-icon-transparent.png",
]

JPG_CANDIDATES = [
    UPLOADS / "jr-logo_fd9a.jpg",
    UPLOADS / "jr-logo.jpg",
    Path("/workspace/site/jr-logo.jpg"),
    Path("/workspace/uploads/jr-logo.jpg"),
    ROOT / "uploads" / "jr-logo.jpg",
    BRAND / "jr-logo.jpg",
]


def nearly_white(r: int, g: int, b: int, a: int) -> bool:
    return a > 200 and r > 245 and g > 245 and b > 245


def content_bbox(im: Image.Image) -> tuple[int, int, int, int]:
    rgba = im.convert("RGBA")
    pixels = rgba.load()
    w, h = rgba.size
    minx, miny, maxx, maxy = w, h, 0, 0
    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            if not nearly_white(r, g, b, a):
                minx = min(minx, x)
                miny = min(miny, y)
                maxx = max(maxx, x)
                maxy = max(maxy, y)
    if maxx <= minx or maxy <= miny:
        return (0, 0, w, h)
    return (minx, miny, maxx + 1, maxy + 1)


def crop_mark(src: Image.Image) -> Image.Image:
    box = content_bbox(src)
    cropped = src.convert("RGBA").crop(box)
    pixels = cropped.load()
    w, h = cropped.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            if nearly_white(r, g, b, a):
                pixels[x, y] = (r, g, b, 0)
    return cropped


def squircle(size: int, radius_ratio: float = 0.22) -> Image.Image:
    mask = Image.new("L", (size, size), 0)
    draw = ImageDraw.Draw(mask)
    radius = int(size * radius_ratio)
    draw.rounded_rectangle((0, 0, size - 1, size - 1), radius=radius, fill=255)
    return mask


def render_mark(size: int = 1024) -> Image.Image:
    """Brand-token stand-in used only when the original file is missing."""
    base = Image.new("RGB", (size, size), "#0E1A4F")
    draw = ImageDraw.Draw(base)
    # Diagonal gradient, Deep Navy (top-left) to Electric Sky (bottom-right).
    pixels = base.load()
    for y in range(size):
        for x in range(size):
            t = (x * 0.35 + y * 0.65) / size
            t = max(0.0, min(1.0, t))
            r = int(0x0E + (0x00 - 0x0E) * t)
            g = int(0x1A + (0xA8 - 0x1A) * t)
            b = int(0x4F + (0xFF - 0x4F) * t)
            pixels[x, y] = (r, g, b)
    mask = squircle(size)
    mark = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    mark.paste(base, (0, 0), mask)

    font = ImageFont.truetype(str(FONT), int(size * 0.46))
    text = "JR"
    bbox = font.getbbox(text)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    tx = (size - tw) / 2 - bbox[0]
    ty = (size - th) / 2 - bbox[1] - size * 0.02

    glow = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    gdraw = ImageDraw.Draw(glow)
    gdraw.text((tx, ty), text, font=font, fill=(255, 255, 255, 180))
    glow = glow.filter(ImageFilter.GaussianBlur(radius=size * 0.025))
    mark = Image.alpha_composite(mark, glow)
    sharp = ImageDraw.Draw(mark)
    sharp.text((tx, ty), text, font=font, fill=(255, 255, 255, 255))
    return mark


def find_file(candidates: list[Path]) -> Path | None:
    for path in candidates:
        if path.is_file() and path.stat().st_size > 1000:
            return path
    return None


def copy_unchanged(src: Path, dest: Path) -> None:
    if src.resolve() == dest.resolve():
        return
    shutil.copyfile(src, dest)


def write_sizes(mark: Image.Image) -> None:
    BRAND.mkdir(parents=True, exist_ok=True)
    APP.mkdir(parents=True, exist_ok=True)
    master = mark.resize((512, 512), Image.Resampling.LANCZOS)
    master.save(BRAND / "logo.png", "PNG")
    master.save(APP / "icon.png", "PNG")
    master.resize((180, 180), Image.Resampling.LANCZOS).save(APP / "apple-icon.png", "PNG")
    master.resize((32, 32), Image.Resampling.LANCZOS).save(BRAND / "favicon-32.png", "PNG")
    master.resize((16, 16), Image.Resampling.LANCZOS).save(BRAND / "favicon-16.png", "PNG")


def main() -> None:
    BRAND.mkdir(parents=True, exist_ok=True)
    png = find_file(PNG_CANDIDATES)
    jpg = find_file(JPG_CANDIDATES)
    if png:
        png_dest = BRAND / "jr-logo-app-icon-transparent.png"
        copy_unchanged(png, png_dest)
        if jpg:
            copy_unchanged(jpg, BRAND / "jr-logo.jpg")
        mark = Image.open(png_dest).convert("RGBA")
        write_sizes(mark)
        lines = [
            "Preferred mark: public/brand/jr-logo-app-icon-transparent.png",
            f"1024px cleaned app icon, copied unchanged ({mark.size[0]}x{mark.size[1]} RGBA).",
            "The nav uses that file directly.",
            "public/brand/logo.png, favicon-32.png, favicon-16.png, app/icon.png,",
            "and app/apple-icon.png are Lanczos resizes of it. Transparency is kept.",
        ]
        if jpg:
            lines.append("Original JPEG copied unchanged to public/brand/jr-logo.jpg.")
        else:
            lines.append("Original JPEG was not found beside the transparent PNG.")
        (BRAND / "SOURCE.txt").write_text("\n".join(lines) + "\n")
        print(f"used transparent PNG {png} ({mark.size[0]}x{mark.size[1]})")
        return

    original = jpg
    if original:
        dest = BRAND / "jr-logo.jpg"
        copy_unchanged(original, dest)
        mark = crop_mark(Image.open(dest))
        w, h = mark.size
        side = max(w, h)
        square = Image.new("RGBA", (side, side), (0, 0, 0, 0))
        square.paste(mark, ((side - w) // 2, (side - h) // 2), mark)
        write_sizes(square)
        (BRAND / "SOURCE.txt").write_text(
            f"Original logo file: {original}\nCopied unchanged to public/brand/jr-logo.jpg.\n"
            "The transparent app icon was not found, so logo.png, favicon sizes,\n"
            "app/icon.png, and app/apple-icon.png are cropped from the JPEG.\n"
        )
        print(f"cropped original {original} ({w}x{h})")
        return

    mark = render_mark(1024)
    # Also store a jpg of the stand-in so the brand folder is never empty,
    # clearly labeled so it is not mistaken for Joe's file.
    rgb = Image.new("RGB", mark.size, (255, 255, 255))
    rgb.paste(mark, mask=mark.split()[-1])
    rgb.save(BRAND / "jr-logo-stand-in.jpg", "JPEG", quality=95)
    write_sizes(mark)
    (BRAND / "SOURCE.txt").write_text(
        "stand-in: the supplied jr-logo.jpg was not on disk when brand assets were built.\n"
        "public/brand/logo.png is rendered from the brand tokens "
        "(Deep Navy #0E1A4F to Electric Sky #00A8FF, white JR, Inter ExtraBold).\n"
        "Drop the original file at public/brand/jr-logo.jpg and re-run scripts/prepare-brand.py.\n"
    )
    print("rendered stand-in; original jpg was not found")


if __name__ == "__main__":
    main()
