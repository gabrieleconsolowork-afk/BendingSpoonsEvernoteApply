# Evernote brand identity (v11 / 2025–2026)

Local kit extracted from [evernote.com](https://evernote.com/) on 2026-08-14.
Official trademark rules: [evernote.com/legal/trademark-use](https://evernote.com/legal/trademark-use).

**EVERNOTE, the Evernote Elephant logo and REMEMBER EVERYTHING are trademarks of Bending Spoons US Inc.** Local copies are for reference only. Do not ship derivative elephants, copy the look-and-feel into a competing product, or use marks without following those guidelines.

## Positioning

- **Line:** Your second brain
- **Mascot:** Mads (elephant; folded ear = page corner)
- **Owner:** Bending Spoons US Inc.
- **Refresh:** Oct 2025 (Mads + evernote.com), v11 Jan 2026

System = warm paper notebook. Cream canvas, charcoal type, one lime highlighter. Not cold SaaS white.

## Logo

| File | Use |
|------|-----|
| `logos/evernote-logo.svg` | Lockup: Mads green + Figtree wordmark charcoal |
| `logos/evernote-logo-inverted.svg` | Same on dark (wordmark white) |
| `logos/evernote-mark.svg` | Mads only |
| `logos/evernote-logo-ios.png` | App icon raster |
| `logos/favicon.ico` | Favicon |

- Elephant fill: `#00A82D` (Pantone 2422 C)
- Wordmark: `#141414` (light) / `#FFFFFF` (dark)
- Do not recolor Mads, crop, add stroke, or invent elephant variants

## Color

### Brand

| Token | Hex | Role |
|-------|-----|------|
| Evernote Green | `#00A82D` | Logo only |
| Lime Sprout | `#94E130` | CTA / highlight — one per viewport, never large fills |

### Surfaces

| Token | Hex | Role |
|-------|-----|------|
| Paper Cream | `#F9F6F2` | Page canvas (not pure white) |
| Ivory Card | `#F4EEE5` | Warm elevated panel |
| Pure White | `#FFFFFF` | Cards, screenshots |
| Onyx | `#000000` | Dark contrast bands |

### Text / stroke

| Token | Hex | Role |
|-------|-----|------|
| Charcoal | `#141414` | Primary text, dark CTA |
| Iron | `#262626` | Secondary / dark surfaces |
| Graphite | `#4E4D4C` | Body secondary |
| Stone | `#737373` | Helper |
| Smoke | `#A1A1A1` | Link underline, button stroke |
| Slate Border | `#E7E7E7` | Card hairline |

### Feature-card squares (site accents)

`#4D64FF` blue · `#E2A62F` gold · `#E54E40` red · `#5BB4D0` cyan

### CSS aliases (from site)

Light: `--color-bg-primary: #F9F6F2`, `--color-text-primary: #141414`.
Dark: `--color-bg-primary: #141414`, `--color-text-primary: #FFFFFF`.

Machine files: `tokens.css`, `tokens.json`.

## Type

| Role | Face | Notes |
|------|------|--------|
| Brand / UI | **Figtree** | Headlines, nav, buttons, body |
| Secondary | **Inter** | Longer copy, site default stack |

- Display signature: Figtree **300**, 72px, letter-spacing **-3.6px**
- Nav / CTA: Figtree **500**, 14–16px
- Do not put weight 600+ on display headlines
- Google Fonts OFL copies in `fonts/Figtree-*.woff2`
- Site subsets: `fonts/Figtree-latin.woff2`, `fonts/Inter-latin.woff2`

## Shape / space

- Base unit **8px** · max width **1200px** · section gap **80px** · card pad **32px**
- Radius: buttons/nav **5px**, cards **10px**, large cards **16px**, pills **52px**
- Cards: 1px `#E7E7E7` border, **no drop shadow**

## Components (site)

- **CTA light:** fill `#141414`, text white, 5px radius, pad 14×28
- **CTA dark sections:** fill `#94E130`, text `#141414`
- **Ghost:** white, 1px charcoal border
- **Feature card:** white, 10px radius, 40×40 colored icon square
- **Dark band:** `#000000` + organic gradient blobs; lime CTA

## Voice

Calm, editorial, second-brain. Sentence case. No shouty all-caps.

## Do / don’t

**Do:** cream canvas · lime once per screen · 5px buttons · 80px section gaps · dark CTA on cream, lime CTA on black.

**Don’t:** white full-page bg · lime as background · pill (9999px) buttons · extra accent colors · looser heading tracking than -0.03em · derivative elephants.

## Sources

- [evernote.com](https://evernote.com/) — live CSS, SVG, fonts
- [Trademark use](https://evernote.com/legal/trademark-use)
- [2025 recap / Mads refresh](https://evernote.com/blog/2025-recap)
- [v11 brand note](https://www.businesswire.com/news/home/20260119103272/en/Evernote-Releases-v11-Marking-a-New-Chapter-in-AI-Powered-Productivity)
