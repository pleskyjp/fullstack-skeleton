import { expect, type Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class BlogPage extends BasePage {
  get articleCards(): Locator {
    return this.page.locator('a[href*="/blog/"]');
  }

  get categoryButtons(): Locator {
    return this.page.locator('button').filter({ hasText: /Prodej|Koupě|Pronájem|All|Vše/i });
  }

  get featuredArticle(): Locator {
    return this.page.locator('.md\\:flex').first();
  }

  async goto(): Promise<void> {
    await this.page.goto('/blog', { waitUntil: 'domcontentloaded' });
    await this.page.waitForLoadState('networkidle');
  }

  async expectArticlesLoaded(): Promise<void> {
    await expect(this.articleCards.first()).toBeVisible({ timeout: 10_000 });
  }

  async expectEmptyState(): Promise<void> {
    await expect(this.page.getByText(/no articles|Žádné články/i)).toBeVisible();
  }

  async clickCategory(name: string): Promise<void> {
    await this.page.getByRole('button', { name }).click();
    await this.page.waitForLoadState('networkidle');
  }

  async clickArticle(index = 0): Promise<void> {
    await this.articleCards.nth(index).click();
    await this.page.waitForLoadState('domcontentloaded');
  }

  async expectArticleDetail(): Promise<void> {
    await expect(this.page).toHaveURL(/\/blog\/.+/);
  }
}
