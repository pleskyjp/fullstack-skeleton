#!/bin/sh
set -e

CONTAINER_NAME="fullstack-skeleton-caddy-1"
CERT_PATH="/data/caddy/pki/authorities/local/root.crt"
LOCAL_CERT="./caddy-root.crt"

echo "Copying Caddy root CA certificate..."
docker cp "$CONTAINER_NAME:$CERT_PATH" "$LOCAL_CERT"

echo "Trusting certificate on macOS (requires sudo)..."
sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain "$LOCAL_CERT"

echo ""
echo "Done! Caddy root CA is now trusted."
echo "HTTPS URLs:"
echo "  https://app.localhost"
echo "  https://api.localhost"
echo "  https://craft.localhost/admin"
echo ""
echo "Restart your browser to pick up the new certificate."
