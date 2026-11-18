# Pranay & Supriya — Wedding Invitation

A responsive static wedding invitation website.

## Run locally
Open `index.html` in a browser, or run a local static server:
- Python: `python -m http.server 8000`
- Then visit http://localhost:8000

## Deploy free with Cloudflare Pages
1. Push this folder to a GitHub repository.
2. In Cloudflare Dashboard, choose Workers & Pages → Create → Pages → Connect to Git.
3. Framework preset: None.
4. Build command: leave blank.
5. Build output directory: `/` (repository root).
6. Deploy. Your free URL will end in `.pages.dev`.

## Edit wedding details
Edit `index.html` for names, family names, event details and venue.
Edit the countdown date in `script.js` (`weddingDate`).
The blessings demo uses browser localStorage only; it does not transmit wishes to the couple.

## Notes to confirm before publishing
- Haldi venue is not printed in the supplied patrika; the website currently says “Venue details to be shared”.
- The wedding/reception venue is transcribed from the patrika. Please verify the English spelling of the venue and street before sharing.
- This is an initial static website version; add your own couple photos/music only if you want them included.
