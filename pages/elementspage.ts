import { expect, Locator, Page } from "@playwright/test";


export class ElementsPage {

    textBoxMenu:Locator;

    constructor(page:Page) {
        this.textBoxMenu = page.locator('//span[normalize-space()="Text Box"]');
    }

    async clickOnTextBoxMenu() {
        await this.textBoxMenu.click();
    }

}

