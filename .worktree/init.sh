#!/bin/bash
set -euo pipefail

# Setup script for worktree module in a new project
# Run from the project root: bash .worktree/init.sh

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

echo "Setting up worktree module in: $PROJECT_ROOT"
echo ""

# 1. Copy config template
CONF_FILE="$PROJECT_ROOT/.worktree.conf"
if [ -f "$CONF_FILE" ]; then
    echo "  [skip] .worktree.conf already exists"
else
    cp "$SCRIPT_DIR/templates/worktree.conf.example" "$CONF_FILE"
    echo "  [created] .worktree.conf — edit with your project values"
fi

# 2. Copy compose override template
COMPOSE_FILE="$PROJECT_ROOT/docker-compose.worktree-web.yml"
if [ -f "$COMPOSE_FILE" ]; then
    echo "  [skip] docker-compose.worktree-web.yml already exists"
else
    cp "$SCRIPT_DIR/templates/docker-compose.override.example.yml" "$COMPOSE_FILE"
    echo "  [created] docker-compose.worktree-web.yml — customize for your project"
fi

# 3. Symlink Claude command
COMMAND_DIR="$PROJECT_ROOT/.claude/commands"
COMMAND_FILE="$COMMAND_DIR/worktree.md"
if [ -L "$COMMAND_FILE" ] || [ -f "$COMMAND_FILE" ]; then
    echo "  [skip] .claude/commands/worktree.md already exists"
else
    mkdir -p "$COMMAND_DIR"
    ln -s "../../.worktree/commands/worktree.md" "$COMMAND_FILE"
    echo "  [created] .claude/commands/worktree.md → symlink"
fi

# 4. Add /worktrees to .gitignore
GITIGNORE="$PROJECT_ROOT/.gitignore"
if [ -f "$GITIGNORE" ] && grep -qF '/worktrees' "$GITIGNORE"; then
    echo "  [skip] /worktrees already in .gitignore"
else
    echo '/worktrees' >> "$GITIGNORE"
    echo "  [added] /worktrees to .gitignore"
fi

echo ""
echo "Done! Next steps:"
echo "  1. Edit .worktree.conf with your project values"
echo "  2. Edit docker-compose.worktree-web.yml for project-specific needs"
echo "  3. Add dsdev.yaml entries:"
echo ""
echo "        wt-web:"
echo "            help: 'Start web container for a worktree'"
echo "            cmd: '.worktree/scripts/worktree-web.sh start'"
echo "        wt-web-stop:"
echo "            help: 'Stop worktree web container'"
echo "            cmd: '.worktree/scripts/worktree-web.sh stop'"
echo "        wt-web-logs:"
echo "            help: 'Show worktree web container logs'"
echo "            cmd: '.worktree/scripts/worktree-web.sh logs'"
echo "        wt-web-bash:"
echo "            help: 'Open shell in worktree web container'"
echo "            cmd: '.worktree/scripts/worktree-web.sh bash'"
echo "        wt-web-list:"
echo "            help: 'List running worktree web containers'"
echo "            cmd: '.worktree/scripts/worktree-web.sh list'"
