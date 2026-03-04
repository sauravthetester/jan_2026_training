import { test, expect } from '@playwright/test';
import regData from '../../testdata/regform.json';

test.describe('DemoQA Simple Tests', () => {

    for(const data of regData) {
        test(`Data driven test for ${data.email}`, async ({ page }) => {
            await page.goto('https://demoqa.com/');
            await page.getByRole("heading", { name: "Elements" }).click();
            await page.locator('a:has-text("Web Tables")').click();

            await page.locator('#addNewRecordButton').click();
            await page.locator('#firstName').fill(data.firstName);
            await page.locator('#lastName').fill(data.lastName);
            await page.locator('#userEmail').fill(data.email);
            await page.locator('#age').fill(data.age.toString());
            await page.locator('#salary').fill(data.salary.toString());
            await page.locator('#department').fill(data.department);

            await page.locator('#submit').click();

        });
    }
});
