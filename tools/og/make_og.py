"""Erzeugt die Social-Share-Bilder (1200x630 JPG) aus tools/og/og.html.

Benötigt: Python 3 + Pillow (pip install pillow) und Microsoft Edge oder Google Chrome.
Aufruf (im Repo-Ordner):   python tools/og/make_og.py
Optional einzelne Varianten: python tools/og/make_og.py opencue hometv

Neue Seite? In og.html einen neuen Block (.only-NAME / .v-NAME) ergänzen, hier in VARIANTS eintragen.
"""
import os
import subprocess
import sys
import tempfile
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
TEMPLATE = Path(__file__).resolve().parent / "og.html"
OUT_DIR = ROOT / "assets" / "img" / "og"
VARIANTS = ["home", "projekte", "opencue", "hometv"]

BROWSERS = [
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
]


def find_browser():
    for b in BROWSERS:
        if os.path.exists(b):
            return b
    sys.exit("Kein Edge/Chrome gefunden – Pfad in BROWSERS ergänzen.")


def main():
    names = sys.argv[1:] or VARIANTS
    browser = find_browser()
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory() as tmp:
        for name in names:
            png = Path(tmp) / f"og-{name}.png"
            url = TEMPLATE.as_uri() + f"?v={name}"
            subprocess.run(
                [browser, "--headless", "--disable-gpu", "--hide-scrollbars",
                 "--window-size=1200,630", "--virtual-time-budget=6000",
                 f"--screenshot={png}", url],
                check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL,
            )
            img = Image.open(png).convert("RGB")
            if img.size != (1200, 630):
                img = img.crop((0, 0, 1200, 630))
            target = OUT_DIR / f"og-{name}.jpg"
            img.save(target, quality=90, optimize=True, progressive=True)
            print(f"{target.relative_to(ROOT)}  {target.stat().st_size // 1024} KB")


if __name__ == "__main__":
    main()
