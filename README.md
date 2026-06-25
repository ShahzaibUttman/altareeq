# Almasa Signs — Website

Static single-page site for a UAE signage, design & printing company.

## Files
- `index.html` — the full site (HTML/CSS/JS, no build step)
- `Code.gs` — Google Apps Script that receives the contact form and appends rows to a Google Sheet

## Deploy
Static site. Vercel auto-detects it — no build command, output is the repo root.

## Contact form
1. Deploy `Code.gs` as a Google Apps Script Web App (Execute as: Me, Access: Anyone).
2. Paste the Web App URL into `SHEET_ENDPOINT` in `index.html`.
