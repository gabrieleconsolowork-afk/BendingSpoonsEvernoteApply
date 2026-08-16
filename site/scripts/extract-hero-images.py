from pathlib import Path
import re, base64

p = Path(r"C:\Users\gabri\Desktop\Evernote\site\public\assets\images\upgrade-hero.svg")
t = p.read_text(encoding="utf-8")
out = Path(r"C:\Users\gabri\Desktop\Evernote\site\public\assets\images\hero-anim")
out.mkdir(exist_ok=True)

# extract images
for m in re.finditer(
    r'<image[^>]*id="(image\d+_[^"]+)"[^>]*width="([^"]+)"[^>]*height="([^"]+)"[^>]*href="data:image/([^;]+);base64,([^"]+)"',
    t,
):
    ident, w, h, fmt, b64 = m.groups()
    ext = "png" if "png" in fmt else ("jpg" if "jpeg" in fmt or "jpg" in fmt else fmt)
    dest = out / f"{ident}.{ext}"
    dest.write_bytes(base64.b64decode(b64))
    print(f"{ident} {w}x{h} {fmt} {dest.stat().st_size}b")

# also xlink:href variant
if not list(out.iterdir()):
    for m in re.finditer(
        r'<image[^>]*id="(image\d+_[^"]+)"[^>]*width="([^"]+)"[^>]*height="([^"]+)"[^>]*xlink:href="data:image/([^;]+);base64,([^"]+)"',
        t,
    ):
        ident, w, h, fmt, b64 = m.groups()
        ext = "png" if "png" in fmt else ("jpg" if "jpeg" in fmt or "jpg" in fmt else fmt)
        dest = out / f"{ident}.{ext}"
        dest.write_bytes(base64.b64decode(b64))
        print(f"xlink {ident} {w}x{h} {fmt} {dest.stat().st_size}b")

print("--- pattern uses ---")
for m in re.finditer(r'<rect([^>]+fill="url\(#(pattern\d+_[^"]+)\)"[^>]*)>', t):
    attrs = m.group(0)
    print(attrs[:200])

print("--- image tags ---")
for m in re.finditer(r"<image[^>]+>", t):
    s = m.group(0)
    print(s[:180], "...")
