import { test, expect } from '@playwright/test';
import { AppPage } from '../../pages/app.page';

test.describe('Navigation', () => {
  let app: AppPage;

  test.beforeEach(async ({ page }) => {
    app = new AppPage(page);
  });

  test('home page loads with navigation', async () => {
    await app.goto('/');
    await app.expectNavVisible();
    await app.expectHeading('Fullstack Skeleton');
  });

  test('notes navigation works', async ({ page }) => {
    await app.goto('/');
    const nav = page.getByRole('navigation');

    await nav.getByRole('link', { name: 'Notes' }).click();
    await expect(page).toHaveURL(/\/notes/);
    await app.expectHeading('Notes');
  });

  test('home link returns to landing', async ({ page }) => {
    await app.goto('/en/notes');
    const nav = page.getByRole('navigation');

    await nav.getByRole('link', { name: 'Home' }).click();
    await app.expectHeading('Fullstack Skeleton');
  });
});
