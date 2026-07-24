#!/bin/zsh
# Cloudflare cutover — activates the Vidas Transformadas backend (D1 + moderation).
# Run from the repo root. Prereq: `npx wrangler login` (opens the browser once).
# Everything else is automated; safe to re-run (each step is idempotent or skipped).
set -e
export PATH="$HOME/.local/node/bin:$PATH"
cd "$(dirname "$0")/.."

echo "→ checking wrangler auth…"
npx wrangler whoami >/dev/null 2>&1 || { echo "✗ not logged in — run: npx wrangler login"; exit 1; }

DB_NAME="thaisazevedo-depoimentos"
echo "→ ensuring D1 database $DB_NAME…"
if ! npx wrangler d1 info "$DB_NAME" >/dev/null 2>&1; then
  npx wrangler d1 create "$DB_NAME"
fi
DB_ID=$(npx wrangler d1 info "$DB_NAME" --json | python3 -c 'import sys,json;d=json.load(sys.stdin);print(d.get("uuid") or d.get("database_id"))')
echo "  database_id: $DB_ID"

echo "→ wiring database_id into wrangler.toml…"
sed -i '' "s/^database_id = .*/database_id = \"$DB_ID\"/" wrangler.toml

echo "→ applying schema…"
npx wrangler d1 execute "$DB_NAME" --remote --file=db/schema.sql -y

echo "→ building site…"
npm run build

echo "→ deploying to Cloudflare Pages (creates the project on first run)…"
npx wrangler pages deploy

echo "→ setting MOD_SECRET (auto-generated) — paste it nowhere, it lives only in CF…"
openssl rand -hex 32 | npx wrangler pages secret put MOD_SECRET

cat <<'EOF'

✔ Backend deployed. Remaining manual steps (CF dashboard):
  1. RESEND_API_KEY secret (enables the moderation email to Thais):
     resend.com → API key → npx wrangler pages secret put RESEND_API_KEY
     + verify the sending domain (or set NOTIFY_FROM to a verified sender).
  2. DNS cutover: point thaisazevedo.org (+ www) at the Pages project
     (Pages → Custom domains). Until then the backend runs on the *.pages.dev URL.
  3. Smoke test: POST a depoimento on the pages.dev URL → check email → approve →
     confirm it renders. Then tell the session to notify Thais it's 100%.
EOF
