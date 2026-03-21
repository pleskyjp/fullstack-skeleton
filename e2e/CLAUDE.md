## E2E Testing

Playwright-based end-to-end testing for the fullstack skeleton.

## Architecture

```
e2e/
├── playwright.config.ts     # Config (baseURL, reporters, browser)
├── pages/                   # Page Object Model
│   ├── base.page.ts         # Base page with shared helpers
│   ├── app.page.ts          # Navigation, locale switching
│   ├── notes.page.ts        # Notes form and card interactions
│   └── blog.page.ts         # Blog listing and detail
├── tests/
│   ├── api/health.spec.ts   # API endpoint tests (health, CRUD, i18n, validation)
│   ├── app/                 # App-level tests (navigation, i18n)
│   ├── notes/               # Notes page tests
│   └── blog/                # Blog page tests (skips if CraftCMS unavailable)
└── results/                 # Test artifacts (gitignored)
```

## Patterns

- **Page Object Model** — `BasePage` for shared helpers, feature pages extend it
- **API tests via `request` context** — direct HTTP testing without browser overhead
- **Graceful degradation** — blog tests skip when CraftCMS is not available
- **Self-signed TLS** — `ignoreHTTPSErrors` + `--ignore-certificate-errors` for local Caddy certs

## Essential Commands

```bash
cd e2e
npm test                    # Run all tests
npm run test:headed         # Run with visible browser
npm run test:ui             # Playwright UI mode
npm run test:report         # Open HTML report
npm run test:install        # Install Chromium browser
```

## Adding New Tests

1. Create a page object in `pages/` if needed
2. Create test file in `tests/<feature>/`
3. Use existing page objects for interactions
4. API tests: use `request` fixture for direct HTTP calls
5. UI tests: use page objects for browser interactions
