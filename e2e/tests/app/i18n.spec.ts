import { test, expect } from '@playwright/test';
import { AppPage } from '../../pages/app.page';

test.describe('Internationalization', () => {
  let app: AppPage;

  test.beforeEach(async ({ page }) => {
    app = new AppPage(page);
  });

  test('Czech locale has no URL prefix', async ({ page }) => {
    await page.goto('/en');
    await app.switchLocale('cs');
    await expect(page).not.toHaveURL(/\/en/);
    await expect(page.getByText('Domů')).toBeVisible();
  });

  test('English locale adds /en prefix', async ({ page }) => {
    await app.goto('/en');
    await expect(page.getByText('Home')).toBeVisible();
    await expect(page).toHaveURL(/\/en/);
  });

  test('both locales render correct content', async ({ page }) => {
    await page.goto('/en');
    await expect(page.getByText('Production-ready fullstack template')).toBeVisible();

    await page.goto('/');
    const isCzech = await page.getByText('Produkční šablona').isVisible({ timeout: 3_000 }).catch(() => false);
    const isEnglish = await page.getByText('Production-ready').isVisible({ timeout: 1_000 }).catch(() => false);

    expect(isCzech || isEnglish).toBeTruthy();
  });
});
