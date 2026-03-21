import { defineConfig, devices } from '@playwright/test';

const APP_URL = process.env.E2E_APP_URL || 'https://app.localhost';
const API_URL = process.env.E2E_API_URL || 'https://api.localhost';
const CRAFT_URL = process.env.E2E_CRAFT_URL || 'https://craft.localhost';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: 1,
  reporter: [
    ['html', { outputFolder: './results/html' }],
    ['list'],
    ...(process.env.CI ? [['junit', { outputFile: './results/test-results/results.xml' }] as const] : []),
  ],
  use: {
    baseURL: APP_URL,
    ignoreHTTPSErrors: true,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'on-first-retry',
    actionTimeout: 15_000,
    navigationTimeout: 30_000,
    launchOptions: {
      args: ['--ignore-certificate-errors'],
    },
  },

  outputDir: './results/test-results',

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  metadata: {
    appUrl: APP_URL,
    apiUrl: API_URL,
    craftUrl: CRAFT_URL,
  },
});
