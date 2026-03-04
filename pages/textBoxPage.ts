import { expect, Locator, Page } from "@playwright/test";


export class TextBoxPage {

    fullName:Locator;
    email:Locator;
    currentAddress:Locator

    constructor(page:Page) {
            this.fullName = page.getByPlaceholder('Full Name');
            this.email = page.locator('#userEmail');
            this.currentAddress = page.getByPlaceholder('Current Address');
    }

    async fillUpTheFields() {
        await this.fullName.scrollIntoViewIfNeeded();
        await this.fullName.fill('Saurav');
        await this.email.fill('saurav@gmail.com');
        await this.currentAddress.fill('Bangalore');
    }

}

