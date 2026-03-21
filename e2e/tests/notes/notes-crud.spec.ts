import { test, expect } from '@playwright/test';
import { NotesPage } from '../../pages/notes.page';

test.describe('Notes Page', () => {
  test('notes page loads with form and heading', async ({ page }) => {
    const notes = new NotesPage(page);
    await notes.goto();
    await notes.expectHeading(/Notes|Poznámky/);
    await expect(notes.submitButton).toBeVisible();
  });

  test('notes form has title and content inputs', async ({ page }) => {
    const notes = new NotesPage(page);
    await notes.goto();
    await expect(notes.titleInput).toBeVisible();
    await expect(notes.contentInput).toBeVisible();
  });

  test('submit button is disabled when form is empty', async ({ page }) => {
    const notes = new NotesPage(page);
    await notes.goto();
    await expect(notes.submitButton).toBeDisabled();
  });
});
