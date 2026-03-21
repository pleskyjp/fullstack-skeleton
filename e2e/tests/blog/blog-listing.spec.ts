import { test, expect } from '@playwright/test';
import { BlogPage } from '../../pages/blog.page';

test.describe('Blog Listing', () => {
  let blog: BlogPage;

  test.beforeEach(async ({ page }) => {
    blog = new BlogPage(page);
    const response = await page.goto('/blog', { waitUntil: 'domcontentloaded' });
    if (response?.status() === 500) test.skip(true, 'CraftCMS not available');
  });

  test('blog page loads with title', async () => {
    await blog.expectHeading('Blog');
  });

  test('displays articles or empty state', async () => {
    const hasArticles = await blog.articleCards.first().isVisible({ timeout: 5_000 }).catch(() => false);

    if (hasArticles) {
      await expect(blog.articleCards.first()).toBeVisible();
    } else {
      await blog.expectEmptyState();
    }
  });

  test('category filter is visible when articles exist', async () => {
    const hasArticles = await blog.articleCards.first().isVisible({ timeout: 5_000 }).catch(() => false);
    if (!hasArticles) { test.skip(); return; }

    await expect(blog.categoryButtons.first()).toBeVisible();
  });

  test('clicking article navigates to detail', async () => {
    const hasArticles = await blog.articleCards.first().isVisible({ timeout: 5_000 }).catch(() => false);
    if (!hasArticles) { test.skip(); return; }

    await blog.clickArticle(0);
    await blog.expectArticleDetail();
  });
});
