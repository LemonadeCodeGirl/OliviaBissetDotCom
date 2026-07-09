# Deploying updates to oliviabisset.com

This guide covers how to push code changes from your Mac to the live server on DigitalOcean.

## Overview

```text
Your Mac  →  GitHub  →  DigitalOcean droplet  →  oliviabisset.com
```

The server pulls code from GitHub, builds the Next.js app, and runs it with PM2 behind nginx.

| Item | Value |
|------|-------|
| GitHub repo | `https://github.com/LemonadeCodeGirl/OliviaBissetDotCom.git` |
| Server path | `/var/www/oliviabisset` |
| App path | `/var/www/oliviabisset/my-app` |
| PM2 process name | `oliviabisset` (only one process should run) |
| App port | `3000` (proxied by nginx on port 80/443) |
| Node version | `20.x` (Node 22 also works, but 20 is recommended) |
| Package manager | `pnpm@10.19.0` |

> **Important:** Only run **one** PM2 process on port 3000. If you previously started `myapp` during initial setup, delete it before starting `oliviabisset`.

---

## Regular update (most of the time)

Use this every time you change code and want it live.

### Step 1 — Commit and push from your Mac

```bash
cd /Users/oliviabisset/OliviaBissetDotCom

git status
git add .
git commit -m "Describe your change"
git push origin main
```

Confirm the push succeeded before moving on.

### Step 2 — SSH into the server

```bash
ssh root@192.81.210.250
```

### Step 3 — Pull, build, and restart

Paste this on the server:

```bash
cd /var/www/oliviabisset
git pull origin main

cd my-app
pnpm install --frozen-lockfile
pnpm build

pm2 delete oliviabisset 2>/dev/null || true
pm2 start ecosystem.config.cjs
pm2 save
pm2 status
```

### Step 4 — Verify

On the server:

```bash
git log -1 --oneline
pm2 logs oliviabisset --lines 20 --nostream
```

In your browser:

- Open `https://oliviabisset.com`
- Hard refresh: **Cmd + Shift + R** (Mac) or open an incognito window

You should see your latest changes.

---

## First-time server setup

Only needed once when setting up a new droplet. A full script lives at `scripts/deploy-droplet.sh` in the repo root.

Quick version on a fresh Ubuntu server:

```bash
apt-get update
apt-get install -y curl git nginx

curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs

corepack enable
corepack prepare pnpm@10.19.0 --activate
npm install -g pm2

git clone https://github.com/LemonadeCodeGirl/OliviaBissetDotCom.git /var/www/oliviabisset

cd /var/www/oliviabisset/my-app
pnpm install --frozen-lockfile
pnpm build

pm2 start ecosystem.config.cjs
pm2 save
pm2 startup
```

Configure nginx to proxy port 80 to `localhost:3000`, then add SSL with certbot (see [SSL setup](#ssl-setup) below).

---

## SSL setup

After DNS points to the server and the site loads over HTTP:

```bash
apt-get install -y certbot python3-certbot-nginx
certbot --nginx -d oliviabisset.com -d www.oliviabisset.com
```

Verify auto-renewal:

```bash
certbot renew --dry-run
```

---

## Full redeploy (when something is broken)

Use this if the site is crash-looping, showing old content, or `pm2 restart` did not help.

```bash
set -e

APP_DIR="/var/www/oliviabisset"

# Stop ALL old PM2 processes (including legacy "myapp")
pm2 delete all || true

corepack enable
corepack prepare pnpm@10.19.0 --activate

cd "$APP_DIR"
git fetch origin
git reset --hard origin/main

cd my-app
rm -rf .next
pnpm install --frozen-lockfile
pnpm build

pm2 start ecosystem.config.cjs
pm2 save

pm2 status
ss -tulpn | grep 3000
pm2 logs oliviabisset --lines 30 --nostream
```

After this, `pm2 status` should show:

- **Only one** process (`oliviabisset`) — no `myapp`
- `status: online`
- `uptime` increasing (not stuck at `0s`)
- `restarts` staying at `0`

---

## Troubleshooting

### Site still shows old content

1. Confirm GitHub has your latest commit:
   ```bash
   # On your Mac
   git log -1 --oneline
   ```

2. Confirm the server pulled it:
   ```bash
   # On the server
   cd /var/www/oliviabisset
   git log -1 --oneline
   ```
   Both should show the same commit hash.

3. Rebuild and restart:
   ```bash
   cd /var/www/oliviabisset/my-app
   rm -rf .next
   pnpm build
   pm2 restart oliviabisset
   ```

4. Hard refresh your browser (Cmd + Shift + R).

### PM2 keeps restarting (high restart count)

Check logs:

```bash
pm2 logs oliviabisset --lines 50 --nostream
```

#### Error: `EADDRINUSE: address already in use :::3000`

Two apps are trying to use port 3000. This usually means an old `myapp` process is still running from initial setup.

Check what's running:

```bash
pm2 list
ss -tulpn | grep 3000
```

Fix it — keep only `oliviabisset`:

```bash
pm2 delete myapp || true
pm2 delete oliviabisset || true

cd /var/www/oliviabisset/my-app
pm2 start ecosystem.config.cjs
pm2 save

pm2 status
ss -tulpn | grep 3000
```

You should see **one** process on port 3000 and `restarts` staying at `0`.

Optional cleanup of the old clone from initial setup:

```bash
rm -rf /root/OliviaBissetDotCom
```

#### Error: `Invalid project directory ... /my-app/-p`

**Wrong start command** — do NOT use this:

```bash
# BAD: causes "Invalid project directory ... /my-app/-p"
pm2 start pnpm --name oliviabisset -- start -- -p 3000
```

Use this instead:

```bash
# GOOD: loads .env.local and starts Next.js on port 3000
cd /var/www/oliviabisset/my-app
pm2 start ecosystem.config.cjs
```

### Contact form fails on the live site

The API route needs Supabase env vars at runtime. PM2 does **not** load `.env.local` automatically unless you use `ecosystem.config.cjs`.

1. Confirm the env file exists in the **app** directory (not the repo root):
   ```bash
   ls -la /var/www/oliviabisset/my-app/.env.local
   cat /var/www/oliviabisset/my-app/.env.local
   ```
   It should contain `SUPABASE_URL` and `SUPABASE_SECRET_KEY`.

2. Restart with the ecosystem config (not plain `pm2 restart` after an old setup):
   ```bash
   cd /var/www/oliviabisset/my-app
   pm2 delete oliviabisset || true
   pm2 start ecosystem.config.cjs
   pm2 save
   ```

3. Test the API directly:
   ```bash
   curl -s -X POST https://oliviabisset.com/api/contact \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","message":"hello"}'
   ```
   A successful response looks like: `{"ok":true}`

#### Node version warnings

The app prefers Node 20. Node 22 usually works, but if you want to switch:

```bash
node -v   # if this shows v22.x and you want v20.x:

apt-get remove -y nodejs
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt-get install -y nodejs
node -v   # should now show v20.x
```

> `apt install nodejs` alone will **not** downgrade from 22 to 20 — you must `apt-get remove nodejs` first.

### Build fails with out-of-memory errors

On a 1 GB droplet, try:

```bash
export NODE_OPTIONS="--max-old-space-size=768"
pnpm build
```

### Check if the app is actually running

```bash
pm2 describe oliviabisset
curl -I http://localhost:3000
curl -I https://oliviabisset.com
```

### Useful diagnostic commands

```bash
cd /var/www/oliviabisset
pwd
git remote -v
git status
git log -3 --oneline
pm2 status
pm2 describe oliviabisset
nginx -t
systemctl status nginx
```

---

## Quick reference

| Task | Command |
|------|---------|
| Push changes | `git push origin main` |
| SSH to server | `ssh root@192.81.210.250` |
| Update site | `git pull && cd my-app && pnpm install && pnpm build && pm2 restart oliviabisset` |
| View logs | `pm2 logs oliviabisset` |
| Check process | `pm2 status` |
| Check commit on server | `cd /var/www/oliviabisset && git log -1 --oneline` |

---

## Checklist before you close the terminal

- [ ] Changes committed and pushed to `main` on GitHub
- [ ] `git pull` ran on the server without errors
- [ ] `pnpm build` completed successfully
- [ ] `pm2 list` shows **only** `oliviabisset` (no `myapp`)
- [ ] `pm2 status` shows `online` with growing uptime and low restarts
- [ ] `ss -tulpn | grep 3000` shows one listener on port 3000
- [ ] Site looks correct in browser (hard refresh)
