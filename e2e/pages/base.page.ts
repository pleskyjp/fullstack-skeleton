import type { Locator, Page } from '@playwright/test';

export class BasePage {
  constructor(readonly page: Page) {}

  getByTestId(id: string): Locator {
    return this.page.locator(`[data-testid="${id}"]`);
  }

  async fillInput(placeholder: string, value: string): Promise<void> {
    await this.page.getByPlaceholder(placeholder).fill(value);
  }

  async clickButton(name: string): Promise<void> {
    await this.page.getByRole('button', { name }).click();
  }

  async clickLink(name: string): Promise<void> {
    await this.page.getByRole('link', { name }).click();
  }

  async expectHeading(text: string): Promise<void> {
    const { expect } = await import('@playwright/test');
    await expect(this.page.getByRole('heading', { name: text })).toBeVisible();
  }

  async expectUrl(pattern: string | RegExp): Promise<void> {
    const { expect } = await import('@playwright/test');
    await expect(this.page).toHaveURL(pattern);
  }
}
