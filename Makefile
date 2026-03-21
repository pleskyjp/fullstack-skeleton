.PHONY: up down restart logs ps trust-cert \
	api-dev api-lint api-gen-spec api-migrate api-seed api-bash \
	app-lint app-gen-types app-gen-api app-bash \
	craft-install craft-apply craft-import craft-bash \
	e2e e2e-ui e2e-report e2e-install \
	wt-start wt-stop wt-logs wt-bash wt-list \
	check gen init

# === Docker ===
up:
	docker compose up -d

down:
	docker compose down

restart:
	docker compose restart

logs:
	docker compose logs -f $(SVC)

ps:
	docker compose ps

# === HTTPS ===
trust-cert:
	./scripts/trust-cert.sh

# === API ===
api-dev:
	docker compose exec api pnpm dev

api-lint:
	docker compose exec api pnpm lint

api-gen-spec:
	docker compose exec api pnpm gen:spec

api-migrate:
	docker compose exec api pnpm db:migrate

api-seed:
	docker compose exec api pnpm db:seed

api-bash:
	docker compose exec api sh

# === App (Next.js) ===
app-lint:
	docker compose exec app pnpm lint

app-gen-types:
	docker compose exec app pnpm gen:types

app-gen-api:
	docker compose exec app pnpm gen:api-client

app-bash:
	docker compose exec app sh

# === CraftCMS ===
craft-install:
	docker compose exec craft-php php craft install \
		--username=admin --password=admin123 \
		--email=admin@example.com \
		--site-name="Fullstack Skeleton" \
		--site-url="https://craft.localhost" \
		--language=en-US

craft-apply:
	docker compose exec craft-php php craft project-config/apply --force

craft-import:
	docker compose exec craft-php php scripts/import-data.php

craft-bash:
	docker compose exec craft-php sh

# === E2E Tests ===
e2e:
	cd e2e && npm test

e2e-ui:
	cd e2e && npm run test:ui

e2e-report:
	cd e2e && npm run test:report

e2e-install:
	cd e2e && npm install && npx playwright install chromium

# === Code Quality ===
check:
	docker compose exec api pnpm lint && docker compose exec app pnpm lint

# === Codegen (all) ===
gen:
	docker compose exec api pnpm gen:spec
	docker compose exec app pnpm gen:api-client
	docker compose exec app pnpm gen:types

# === Init (first-time setup) ===
init: up
	@echo "Waiting for services..."
	@sleep 10
	@echo "Running API migrations + seed..."
	docker compose exec api pnpm db:migrate
	docker compose exec api pnpm db:seed
	@echo "Installing CraftCMS..."
	$(MAKE) craft-install
	$(MAKE) craft-apply
	@echo "Installing E2E dependencies..."
	$(MAKE) e2e-install
	@echo "Trusting Caddy root CA..."
	./scripts/trust-cert.sh || echo "Run 'make trust-cert' manually (needs sudo)"
	@echo ""
	@echo "Done! Services:"
	@echo "  https://app.localhost"
	@echo "  https://api.localhost"
	@echo "  https://craft.localhost/admin (admin/admin123)"

# === Worktrees ===
wt-start:
	.worktree/scripts/worktree-web.sh start $(BRANCH)

wt-stop:
	.worktree/scripts/worktree-web.sh stop $(BRANCH)

wt-logs:
	.worktree/scripts/worktree-web.sh logs $(BRANCH)

wt-bash:
	.worktree/scripts/worktree-web.sh bash $(BRANCH)

wt-list:
	.worktree/scripts/worktree-web.sh list
