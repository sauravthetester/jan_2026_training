import { test, expect } from '@playwright/test';
import { getPageChrome, getPageFirefox } from '../util/browserLaunch';


test.use({ storageState: './util/storageState2.json' });
test.describe('Login feature', () => {

  test('Storage State Test', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/secure');
    await expect(page.getByRole('heading', {name: 'Welcome to the Secure Area. When you are done click logout below.'})).toBeVisible();

  });
});