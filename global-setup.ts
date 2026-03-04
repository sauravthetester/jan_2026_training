import { chromium, expect, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  console.log('🚀 Global setup started...');

  const browser = await chromium.launch( { channel: 'chrome', headless: false } );
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log('🔐 Logging in to the application...');
  await page.goto('https://practice.expandtesting.com/login');
  await page.fill('#username', 'practice');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button[type="submit"]');
  await expect(page.getByRole('heading', {name: 'Welcome to the Secure Area. When you are done click logout below.'})).toBeVisible();

  await context.storageState({ path: './util/storageState.json' });
  await browser.close();
  
  console.log('✅ Global setup completed');
}

export default globalSetup;
