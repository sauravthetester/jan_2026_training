import { test, expect } from '@playwright/test';

test.describe('DemoQA Simple Tests', () => {

  test('Text Box - fill and submit form', async ({ page }) => {
    await page.goto('https://demoqa.com/text-box');

    await page.fill('#userName', 'John Doe');
    await page.fill('#userEmail', 'john.doe@example.com');
    await page.fill('#currentAddress1', '123 Main Street');
    await page.fill('#permanentAddress', '456 Oak Avenue');

    await page.click('#submit');

    await expect(page.locator('#output')).toBeVisible();
    await expect(page.locator('#name')).toContainText('John Doe');
    await expect(page.locator('#email')).toContainText('john.doe@example.com');
  });

  test('Checkbox - select and verify items', async ({ page }) => {
    await page.goto('https://demoqa.com/checkbox');

    await page.click('.rct-collapse-btn');
    await page.click('label[for="tree-node-desktop"]');

    await expect(page.locator('#result')).toBeVisible();
    await expect(page.locator('#result')).toContainText('desktop');
  });

  test('Buttons - click different button types', async ({ page }) => {
    await page.goto('https://demoqa.com/buttons');

    await page.dblclick('#doubleClickBtn');
    await expect(page.locator('#doubleClickMessage')).toHaveText('You have done a double click');

    await page.click('#rightClickBtn', { button: 'right' });
    await expect(page.locator('#rightClickMessage')).toHaveText('You have done a right click');

    await page.locator('button:has-text("Click Me")').last().click();
    await expect(page.locator('#dynamicClickMessage')).toHaveText('You have done a dynamic click');
  });

  test('Switching to new window', async ({ page }) => {
    await page.goto('https://demoqa.com/');
    await page.getByRole("heading", { name: "Alerts, Frame & Windows" }).click();
    await page.locator('a:has-text("Browser Windows")').click();

    const [newPage] = await Promise.all([
      page.context().waitForEvent('page'),
      page.click('#windowButton')
    ]);

    await newPage.bringToFront();
    await expect(newPage.locator('h1')).toHaveText('This is a sample page');

    await page.bringToFront();
  });

});
