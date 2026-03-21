import { expect } from '@playwright/test';
import { BasePage } from './base.page';

export class AppPage extends BasePage {
  get nav() {
    return this.page.getByRole('navigation');
  }

  get localeSwitch() {
    return {
      cs: this.page.getByRole('button', { name: 'CZ' }),
      en: this.page.getByRole('button', { name: 'EN' }),
    };
  }

  async goto(path = '/'): Promise<void> {
    await this.page.goto(path, { waitUntil: 'domcontentloaded' });
  }

  async expectNavVisible(): Promise<void> {
    await expect(this.nav).toBeVisible();
  }

  async expectLocale(locale: 'cs' | 'en'): Promise<void> {
    const activeButton = locale === 'cs' ? this.localeSwitch.cs : this.localeSwitch.en;
    await expect(activeButton).toHaveClass(/bg-blue-600/);
  }

  async switchLocale(locale: 'cs' | 'en'): Promise<void> {
    const button = locale === 'cs' ? this.localeSwitch.cs : this.localeSwitch.en;
    await button.click();
    await this.page.waitForLoadState('networkidle');
  }
}
