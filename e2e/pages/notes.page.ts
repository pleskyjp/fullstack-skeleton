import { expect, type Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class NotesPage extends BasePage {
  get titleInput(): Locator {
    return this.page.getByRole('textbox', { name: /title|Název/i }).first();
  }

  get contentInput(): Locator {
    return this.page.getByRole('textbox', { name: /Write|Napište/i });
  }

  get submitButton(): Locator {
    return this.page.getByRole('button', { name: /Create|Vytvořit/i });
  }

  get noteCards(): Locator {
    return this.page.locator('[class*="rounded-lg border"]').filter({ has: this.page.locator('h3') });
  }

  async goto(): Promise<void> {
    await this.page.goto('/notes', { waitUntil: 'domcontentloaded' });
    await this.page.waitForLoadState('networkidle');
  }

  async createNote(title: string, content: string): Promise<void> {
    await this.titleInput.fill(title);
    await this.contentInput.fill(content);
    await this.submitButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async expectNoteVisible(title: string): Promise<void> {
    await expect(this.page.getByRole('heading', { name: title, level: 3 })).toBeVisible();
  }

  async expectNoteCount(count: number): Promise<void> {
    await expect(this.noteCards).toHaveCount(count);
  }

  async deleteNote(title: string): Promise<void> {
    const card = this.noteCards.filter({ hasText: title });
    await card.getByRole('button', { name: /Delete|Smazat/i }).click();
    await this.page.waitForLoadState('networkidle');
  }

  async toggleNote(title: string): Promise<void> {
    const card = this.noteCards.filter({ hasText: title });
    await card.locator('button').first().click();
    await this.page.waitForLoadState('networkidle');
  }
}
