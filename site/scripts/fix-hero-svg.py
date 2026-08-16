"""Prepare Figma CSS-animated SVG for the browser.

1. Close the unclosed Frame_1 <g> (Figma export bug).
2. Strip SVG transform="" from nodes whose CSS keyframes already
   include that translate — otherwise the browser composes both and
   every layer is shifted.
"""
from pathlib import Path
import re

src = Path(r"C:\Users\gabri\Desktop\Evernote\site\public\assets\assets\animazione hero.svg")
dst = Path(r"C:\Users\gabri\Desktop\Evernote\site\public\assets\images\upgrade-hero.svg")

text = src.read_text(encoding="utf-8")

stack = []
for line in text.splitlines():
    for m in re.finditer(r"</?g(?:\s[^>]*)?>", line):
        tag = m.group(0)
        if tag.startswith("</"):
            if stack:
                stack.pop()
        elif not tag.endswith("/>"):
            ident = "?"
            mm = re.search(r'id="([^"]+)"', tag)
            if mm:
                ident = mm.group(1)
            stack.append(ident)
print("unclosed before fix:", stack)
if stack:
    missing = "".join("</g>" for _ in stack)
    if "\n<defs>" in text:
        text = text.replace("\n<defs>", f"\n{missing}\n<defs>", 1)
    else:
        text = text.replace("</svg>", f"{missing}</svg>", 1)

style, _, rest = text.partition("</style>")

transform_kfs = set()
for part in re.split(r"@keyframes\s+", style)[1:]:
    name = part.split("{", 1)[0].strip()
    body = part.split("{", 1)[1] if "{" in part else ""
    if re.search(r"\btransform\s*:", body):
        transform_kfs.add(name)
print("transform keyframes:", len(transform_kfs))

animated_ids = set()
for m in re.finditer(r"#([A-Za-z_][\w]*)\s*\{([^}]*)\}", style):
    ident, body = m.group(1), m.group(2)
    anim = re.search(r"animation\s*:\s*([^;]+)", body)
    if not anim:
        continue
    used = anim.group(1)
    if any(kf in used for kf in transform_kfs):
        animated_ids.add(ident)
print("ids to strip transform attr:", len(animated_ids))
print(", ".join(sorted(animated_ids)))


def strip_attr(match):
    full = match.group(0)
    ident = match.group(1)
    if ident in animated_ids:
        return re.sub(r'\s+transform="[^"]*"', "", full)
    return full


rest = re.sub(
    r"<(?:g|path|rect|use|image|text)\b[^>]*id=\"([^\"]+)\"[^>]*>",
    strip_attr,
    rest,
)

# Make origin unambiguous inside the SVG document.
if "transform-box:" not in style:
    style = style.replace(
        "<style>",
        "<style>\n* { transform-box: view-box; transform-origin: 0 0; }\n",
        1,
    )

text = style + "</style>" + rest
dst.write_text(text, encoding="utf-8", newline="\n")

# verify
v = dst.read_text(encoding="utf-8")
opens = len(re.findall(r"<g(?:\s|>)", v))
closes = v.count("</g>")
print(f"dest size: {dst.stat().st_size}  g open/close: {opens}/{closes}")
print("src untouched size:", src.stat().st_size)

# spot-check Main / Tasklist / Calendar no longer have svg transform
for ident in ("Main", "Tasklist", "Calendar", "Sidebar"):
    m = re.search(rf'<(?:g|path)[^>]*id="{ident}"[^>]*>', v)
    print(ident, "->", m.group(0)[:120] if m else "NOT FOUND")
