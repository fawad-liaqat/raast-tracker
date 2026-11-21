"""
Makes the share image for the Raast Adoption Gap Tracker: public/og-image.png (1200x630).
LinkedIn, WhatsApp and other apps show it when someone shares the tracker's link.
Same look as the portfolio's series share images.

How to rerun (from the repo root, normal user, no admin rights needed), after the
headline figures change:

    python scripts/make-og.py

Writes only public/og-image.png. Vite copies public/ into the built site, so after
`npm run deploy` the image is served at
https://fawad-liaqat.github.io/raast-tracker/og-image.png
Needs Python with `playwright` and Google Chrome (set CHROME_PATH if Chrome is not at
/usr/bin/google-chrome). Fonts load from Google Fonts.

Figures (SBP Annual Payment Systems Review FY26): Raast transactions 1,276 million (FY25)
and 2,755 million (FY26); merchant payments 6.6% of Raast volume; cash withdrawals
97.6% of ATM transactions.
UPI merchant share (63% of UPI volume): Government of India, Ministry of Finance (PIB), UPI Completes 10 Years.
"""
import os
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "og-image.png"
OUT.parent.mkdir(parents=True, exist_ok=True)

FONTS = ('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600'
         '&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=block">')

PAGE = f"""<!doctype html><html><head><meta charset="utf-8">{FONTS}<style>
  * {{ box-sizing: border-box; margin: 0; }}
  body {{ width: 1200px; height: 630px; background: #070B14; color: #EEF3FA;
         padding: 64px 80px; display: flex; flex-direction: column;
         background-image:
           linear-gradient(rgba(151,173,214,.10) 1px, transparent 1px),
           linear-gradient(90deg, rgba(151,173,214,.10) 1px, transparent 1px);
         background-size: 60px 60px; }}
  .top {{ display: flex; justify-content: space-between; align-items: center;
          font: 600 28px "Space Grotesk", Arial, sans-serif; }}
  .name {{ display: flex; align-items: center; gap: 16px; }}
  .name::before {{ content: ""; width: 14px; height: 14px; border-radius: 3px; background: #4FE3C1; }}
  .tag {{ font: 500 24px "IBM Plex Mono", monospace; color: #4FE3C1; }}
  h1 {{ font: 600 66px/1.06 "Space Grotesk", Arial, sans-serif; letter-spacing: -0.025em; margin-top: 56px; }}
  .stats {{ display: flex; gap: 28px; margin-top: auto; }}
  .stat {{ flex: 1; border: 1px solid rgba(151,173,214,.28); border-radius: 14px; padding: 22px 26px;
           background: rgba(13,20,34,.85); }}
  .num {{ font: 600 46px "Space Grotesk", Arial, sans-serif; color: #4FE3C1; letter-spacing: -0.02em; }}
  .lab {{ font: 400 22px/1.35 Inter, Arial, sans-serif; color: #A9B6C9; margin-top: 8px; }}
  .bars {{ display: flex; align-items: flex-end; gap: 10px; height: 46px; }}
  .bar {{ width: 34px; border-radius: 4px 4px 0 0; background: rgba(79,227,193,.45); }}
  .bar.now {{ background: #4FE3C1; }}
  .src {{ font: 400 18px "IBM Plex Mono", monospace; color: #6F7E95; margin-top: 22px; }}
</style></head><body>
  <div class="top"><span class="name">Fawad Liaqat</span><span class="tag">Live dashboard</span></div>
  <h1>Raast Adoption Gap Tracker</h1>
  <div class="stats">
    <div class="stat"><div class="num">2.76 bn</div><div class="lab">Raast payments in FY26, up from 1.28 bn in FY25</div></div>
    <div class="stat"><div class="num">6.6%</div><div class="lab">of Raast volume goes to merchants, against 63% on India's UPI</div></div>
    <div class="stat"><div class="num">97.6%</div><div class="lab">of ATM transactions are still cash withdrawals</div></div>
  </div>
  <div class="src">Sources: State Bank of Pakistan, Payment Systems Review FY26; Government of India (PIB) for UPI</div>
</body></html>"""

with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=os.environ.get("CHROME_PATH", "/usr/bin/google-chrome"),
                                args=["--no-sandbox"])
    tab = browser.new_page(viewport={"width": 1200, "height": 630})
    tab.set_content(PAGE, wait_until="networkidle")
    tab.evaluate("document.fonts.ready")
    tab.wait_for_timeout(300)
    tab.screenshot(path=str(OUT))
    browser.close()
print(f"Wrote {OUT}")
