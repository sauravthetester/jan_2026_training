import { expect, Locator, Page } from "@playwright/test";


export class HomePage {

    bannerImg:Locator;
    elementsCard:Locator;

    constructor(page:Page) {
        this.bannerImg =page.locator('.banner-image');
        this.elementsCard = page.getByRole('heading', { name: 'Elements' }).first();
    }

    async goToElementsPage() {
        await expect(this.bannerImg).toBeVisible();
        await this.elementsCard.click();
    }

}

