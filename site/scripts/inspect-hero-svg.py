from pathlib import Path
import re

p = Path(r"C:\Users\gabri\Desktop\Evernote\site\public\assets\images\upgrade-hero.svg")
t = p.read_text(encoding="utf-8")
print("len", len(t), "lines", t.count("\n"))
print("text tags", len(re.findall(r"<text", t)))
print("ids", re.findall(r'id="([^"]+)"', t)[:80])
fills = re.findall(r'fill="(#[0-9A-Fa-f]{3,8}|[a-zA-Z]+)"', t)
from collections import Counter
print("top fills", Counter(fills).most_common(25))
print("images", len(re.findall(r"<image", t)))
print("patterns", re.findall(r'id="(pattern[^"]+|image[^"]+)"', t))
print("viewBox", re.search(r'viewBox="([^"]+)"', t).group(1))
# first 30 unique path fill+rough
print("clip", re.findall(r'clipPath id="([^"]+)"', t))
