#!/usr/bin/env bash
set -euo pipefail

# Deploy OliviaBissetDotCom (Next.js) on Ubuntu 24.04
# Run as root on the droplet: bash deploy-droplet.sh

REPO_URL="${REPO_URL:-https://github.com/LemonadeCodeGirl/OliviaBissetDotCom.git}"
APP_DIR="${APP_DIR:-/var/www/oliviabisset}"
DOMAIN="${DOMAIN:-oliviabisset.com}"
PORT="${PORT:-3000}"

echo "==> Installing system packages..."
export DEBIAN_FRONTEND=noninteractive
apt-get update -qq
apt-get install -y -qq curl git nginx

if ! command -v node >/dev/null 2>&1 || [[ "$(node -v)" != v20* ]]; then
  echo "==> Installing Node.js 20..."
  curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
  apt-get install -y -qq nodejs
fi

if ! command -v pnpm >/dev/null 2>&1; then
  echo "==> Installing pnpm..."
  corepack enable
  corepack prepare pnpm@10.19.0 --activate
fi

if ! command -v pm2 >/dev/null 2>&1; then
  echo "==> Installing PM2..."
  npm install -g pm2
fi

echo "==> Cloning or updating repository..."
mkdir -p "$(dirname "$APP_DIR")"
if [[ -d "$APP_DIR/.git" ]]; then
  cd "$APP_DIR"
  git fetch origin
  git reset --hard origin/main
else
  git clone "$REPO_URL" "$APP_DIR"
  cd "$APP_DIR"
fi

echo "==> Building Next.js app..."
cd "$APP_DIR/my-app"
pnpm install --frozen-lockfile
pnpm build

echo "==> Starting app with PM2..."
pm2 delete oliviabisset 2>/dev/null || true
pm2 start pnpm --name oliviabisset -- start -- -p "$PORT"
pm2 save
pm2 startup systemd -u root --hp /root 2>/dev/null | tail -1 | bash || true

echo "==> Configuring nginx..."
cat > /etc/nginx/sites-available/oliviabisset <<EOF
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name $DOMAIN www.$DOMAIN _;

    location / {
        proxy_pass http://127.0.0.1:$PORT;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

ln -sf /etc/nginx/sites-available/oliviabisset /etc/nginx/sites-enabled/oliviabisset
rm -f /etc/nginx/sites-enabled/default
nginx -t
systemctl enable nginx
systemctl restart nginx

echo ""
echo "Deploy complete."
echo "  Site:  http://$DOMAIN (or http://$(curl -s ifconfig.me 2>/dev/null || hostname -I | awk '{print $1}'))"
echo "  App:   $APP_DIR/my-app"
echo "  Logs:  pm2 logs oliviabisset"
