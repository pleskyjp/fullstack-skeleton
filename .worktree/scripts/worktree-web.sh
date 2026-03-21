#!/bin/bash
set -euo pipefail

# --- Path resolution ---
# Two separate roots are needed because the script can run from a worktree branch:
#   SCRIPT_REPO_ROOT = where this script physically lives (has compose file, nginx config)
#   MAIN_REPO_ROOT   = always the main repo (has worktrees/ directory with checkout data)
# After merge to develop, both are identical. On a worktree branch, they differ.
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
WT_MODULE_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
PROJECT_ROOT="$(cd "$WT_MODULE_DIR/.." && pwd)"
SCRIPT_REPO_ROOT="$PROJECT_ROOT"
# git worktree list always outputs the main worktree first — works from any worktree
MAIN_REPO_ROOT="$(git -C "$SCRIPT_DIR" worktree list | head -1 | awk '{print $1}')"

# --- Compose files ---
COMPOSE_BASE="$WT_MODULE_DIR/docker/docker-compose.base.yml"
COMPOSE_OVERRIDE="$PROJECT_ROOT/docker-compose.worktree-web.yml"

# --- Load configuration ---
CONF_FILE="$PROJECT_ROOT/.worktree.conf"
if [ ! -f "$CONF_FILE" ]; then
    echo "Error: Configuration file not found: $CONF_FILE"
    echo "Run: bash .worktree/init.sh"
    exit 1
fi
# shellcheck source=../../.worktree.conf
source "$CONF_FILE"

# Validate required config
for var in WT_PROJECT_NAME WT_DOMAIN WT_ISSUE_PATTERN WT_PORT_BASE WT_WEB_SUBDIR WT_NETWORK; do
    if [ -z "${!var:-}" ]; then
        echo "Error: Required config variable $var is not set in $CONF_FILE"
        exit 1
    fi
done

# Defaults for optional config
WT_NUXT_PORT="${WT_NUXT_PORT:-3000}"
WT_CERTS_DIR="${WT_CERTS_DIR:-${HOME}/.config/dev-proxy/certs}"

# Derive issue prefix for container name matching: "VLCI-[0-9]+" → "vlci"
WT_ISSUE_PREFIX=$(echo "$WT_ISSUE_PATTERN" | sed 's/-\[0-9\].*//' | tr '[:upper:]' '[:lower:]')

usage() {
    echo "Usage: $0 <command> [branch-name]"
    echo ""
    echo "Commands:"
    echo "  start <branch>   Start web container for worktree"
    echo "  stop <branch>    Stop web container for worktree"
    echo "  logs <branch>    Show logs for worktree web container"
    echo "  bash <branch>    Open shell in worktree web container"
    echo "  list             List running worktree web containers"
    echo ""
    echo "Example:"
    echo "  $0 start VLCI-123-feature-name"
    exit 1
}

# --- Helpers ---

# Extract lowercase slug from branch name: "VLCI-272-feature" → "vlci-272"
# Returns empty string (not error) if no match — callers decide how to handle
# || true prevents set -e from killing the script when grep finds no match
get_slug() {
    local branch="$1"
    echo "$branch" | grep -oiE "$WT_ISSUE_PATTERN" | head -1 | tr '[:upper:]' '[:lower:]' || true
}

# Derive port from issue number: VLCI-272 → 4272 (= WT_PORT_BASE + 272)
get_port() {
    local branch="$1"
    local num
    num=$(echo "$branch" | grep -oiE "$WT_ISSUE_PATTERN" | head -1 | grep -oE '[0-9]+' || true)
    if [ -z "$num" ]; then
        echo "Error: Could not derive port from branch name '$branch'" >&2
        exit 1
    fi
    local port=$((WT_PORT_BASE + num))
    if [ "$port" -gt 65535 ]; then
        echo "Error: Derived port $port exceeds maximum 65535" >&2
        exit 1
    fi
    echo "$port"
}

# get_slug wrapper that exits on failure — single validation point for all commands
require_slug() {
    local branch="$1"
    local slug
    slug=$(get_slug "$branch")
    if [ -z "$slug" ]; then
        echo "Error: Could not derive slug from branch name '$branch'"
        echo "Branch must contain pattern matching: $WT_ISSUE_PATTERN"
        exit 1
    fi
    echo "$slug"
}

# Verify main stack is running by checking its Docker network existence
# Faster and more reliable than checking specific container names
require_main_stack() {
    if ! docker network inspect "$WT_NETWORK" >/dev/null 2>&1; then
        echo "Error: Main stack is not running ($WT_NETWORK network not found)"
        echo "Start it first: dsdev up"
        exit 1
    fi
}

# Locate worktree directory and verify web subdir exists
# Always looks in MAIN_REPO_ROOT — worktrees live in the main repo, never nested
resolve_worktree_dir() {
    local branch="$1"
    local dir="$MAIN_REPO_ROOT/worktrees/$branch"

    if [ ! -d "$dir/$WT_WEB_SUBDIR" ]; then
        echo "Error: Worktree web directory not found: $dir/$WT_WEB_SUBDIR"
        echo "Create the worktree first: /worktree $branch"
        exit 1
    fi

    echo "$dir"
}

# Run docker compose with base + optional override
run_compose() {
    local args=(-f "$COMPOSE_BASE")
    [ -f "$COMPOSE_OVERRIDE" ] && args+=(-f "$COMPOSE_OVERRIDE")
    docker compose "${args[@]}" "$@"
}

# --- Compose environment ---

# Export all env vars that compose files need
# Docker compose reads these from the shell environment at runtime
set_compose_env() {
    local branch="$1"
    local slug
    slug=$(require_slug "$branch")

    export WORKTREE_SLUG="$slug"
    export WT_MODULE_DIR="$WT_MODULE_DIR"
    export PROJECT_ROOT="$PROJECT_ROOT"
    export SCRIPT_REPO_ROOT="$SCRIPT_REPO_ROOT"
    export MAIN_REPO_ROOT="$MAIN_REPO_ROOT"
    # Isolates this worktree's containers into its own compose project
    export COMPOSE_PROJECT_NAME="${WT_PROJECT_NAME}-wt-${slug}"
    export WORKTREE_PORT="$(get_port "$branch")"

    # Config vars for compose/nginx consumption
    export WT_DOMAIN
    export WT_NUXT_PORT
    export WT_CERTS_DIR
    export WT_NETWORK

    local worktree_dir
    worktree_dir=$(resolve_worktree_dir "$branch")
    export WORKTREE_WEB_DIR="$worktree_dir/$WT_WEB_SUBDIR"
}

# --- Commands ---

cmd_start() {
    local branch="$1"
    require_main_stack
    set_compose_env "$branch"

    echo "Starting web container for worktree: $branch"
    echo "  Slug: $WORKTREE_SLUG"
    echo "  Port: $WORKTREE_PORT"
    echo "  Web:  $WORKTREE_WEB_DIR"
    echo ""

    run_compose up -d --build

    echo ""
    echo "Container started: ${WORKTREE_SLUG}-web"
    echo "Access at: https://${WT_DOMAIN}:${WORKTREE_PORT}"
    echo ""
    echo "View logs: dsdev wt-web-logs $branch"
}

# Stop doesn't use set_compose_env — worktree dir may no longer exist when stopping
# Sets env vars manually with dummy WORKTREE_WEB_DIR to satisfy compose variable references
cmd_stop() {
    local branch="$1"
    local slug
    slug=$(require_slug "$branch")

    export WORKTREE_SLUG="$slug"
    export COMPOSE_PROJECT_NAME="${WT_PROJECT_NAME}-wt-${slug}"
    export WORKTREE_WEB_DIR="${WORKTREE_WEB_DIR:-/nonexistent}"
    export WT_MODULE_DIR="$WT_MODULE_DIR"
    export PROJECT_ROOT="$PROJECT_ROOT"
    export SCRIPT_REPO_ROOT="$SCRIPT_REPO_ROOT"
    export MAIN_REPO_ROOT="$MAIN_REPO_ROOT"
    export WORKTREE_PORT="$(get_port "$branch")"
    export WT_DOMAIN
    export WT_NUXT_PORT
    export WT_CERTS_DIR
    export WT_NETWORK

    run_compose down

    echo "Stopped web container for: $branch"
}

# logs/bash talk directly to containers by name — no compose context needed
cmd_logs() {
    local slug
    slug=$(require_slug "$1")
    docker logs -f "${slug}-web"
}

cmd_bash() {
    local slug
    slug=$(require_slug "$1")
    docker exec -it "${slug}-web" bash
}

# Find all running worktree containers by name pattern and reverse-derive port from slug
cmd_list() {
    echo "Running worktree web containers:"
    echo ""
    local containers
    containers=$(docker ps --format "{{.Names}}" 2>/dev/null | grep -E "^${WT_ISSUE_PREFIX}-[0-9]+-web\$") || true

    if [ -z "$containers" ]; then
        echo "  No worktree web containers running"
        return
    fi

    for name in $containers; do
        local slug="${name%-web}"           # "vlci-272-web" → "vlci-272"
        local num
        num=$(echo "$slug" | grep -oE '[0-9]+') || true
        local port=$((WT_PORT_BASE + num))
        local status
        status=$(docker inspect --format '{{.State.Status}}' "$name" 2>/dev/null) || status="unknown"
        echo "  $name ($status)"
        echo "    URL: https://${WT_DOMAIN}:${port}"
        echo ""
    done
}

# --- Dispatcher ---

[ $# -lt 1 ] && usage

case "$1" in
    start)  [ $# -lt 2 ] && usage; cmd_start "$2" ;;
    stop)   [ $# -lt 2 ] && usage; cmd_stop "$2" ;;
    logs)   [ $# -lt 2 ] && usage; cmd_logs "$2" ;;
    bash)   [ $# -lt 2 ] && usage; cmd_bash "$2" ;;
    list)   cmd_list ;;
    *)      usage ;;
esac
