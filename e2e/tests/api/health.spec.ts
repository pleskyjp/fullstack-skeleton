import { test, expect } from '@playwright/test';

const API_URL = process.env.E2E_API_URL || 'https://api.localhost';

test.describe('API Health', () => {
  test('health endpoint returns ok', async ({ request }) => {
    const response = await request.get(`${API_URL}/health`);
    expect(response.ok()).toBeTruthy();

    const body = await response.json();
    expect(body.status).toBe('ok');
    expect(body.timestamp).toBeTruthy();
  });

  test('OpenAPI spec is accessible', async ({ request }) => {
    const response = await request.get(`${API_URL}/openapi.json`);
    expect(response.ok()).toBeTruthy();

    const spec = await response.json();
    expect(spec.openapi).toBe('3.1.0');
    expect(spec.info.title).toBe('Fullstack Skeleton API');
  });

  test('notes CRUD via API', async ({ request }) => {
    const headers = { 'Content-Type': 'application/json' };

    // Create
    const createRes = await request.post(`${API_URL}/api/notes`, {
      headers,
      data: { title: 'API E2E Test', content: 'Created via Playwright API test' },
    });
    expect(createRes.status()).toBe(201);
    const created = await createRes.json();
    expect(created.id).toBeTruthy();
    expect(created.title).toBe('API E2E Test');

    // Read
    const getRes = await request.get(`${API_URL}/api/notes/${created.id}`);
    expect(getRes.ok()).toBeTruthy();

    // Update
    const updateRes = await request.put(`${API_URL}/api/notes/${created.id}`, {
      headers,
      data: { completed: true },
    });
    expect(updateRes.ok()).toBeTruthy();
    const updated = await updateRes.json();
    expect(updated.completed).toBe(true);

    // Delete
    const deleteRes = await request.delete(`${API_URL}/api/notes/${created.id}`);
    expect(deleteRes.status()).toBe(204);

    // Verify deleted
    const verifyRes = await request.get(`${API_URL}/api/notes/${created.id}`);
    expect(verifyRes.status()).toBe(404);
  });

  test('validation returns 400 for invalid input', async ({ request }) => {
    const response = await request.post(`${API_URL}/api/notes`, {
      headers: { 'Content-Type': 'application/json' },
      data: { title: '' },
    });
    expect(response.status()).toBe(400);
  });

  test('i18n returns Czech error by default', async ({ request }) => {
    const response = await request.get(`${API_URL}/api/notes/nonexistent`);
    expect(response.status()).toBe(404);
    const body = await response.json();
    expect(body.error).toContain('nenalezen');
  });

  test('i18n returns English error with Accept-Language', async ({ request }) => {
    const response = await request.get(`${API_URL}/api/notes/nonexistent`, {
      headers: { 'Accept-Language': 'en' },
    });
    expect(response.status()).toBe(404);
    const body = await response.json();
    expect(body.error).toContain('not found');
  });
});
