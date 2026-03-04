import { test as base } from "@playwright/test";
import { Page } from "@playwright/test";
import { HomePage } from "../homePage";
import { getPageChrome } from "../../util/browserLaunch";
import { ElementsPage } from "../elementspage";
import { TextBoxPage } from "../textBoxPage";

let page:Page;

type MyFixtures = {
    homePage: HomePage;
    elementspage: ElementsPage;
    textBoxPage: TextBoxPage;
    // loginpage
    // dashboardpage
};

export const test = base.extend<MyFixtures>({
    homePage: async ({  }, use) => {
        page = await getPageChrome();

        if (process.env.BLOCK_IMAGES === 'true') {
            await page.route('**/*', route => {
                const rscType = route.request().resourceType();
                if(['image'].includes(rscType)) {
                    route.abort();
                } else {
                    route.continue();
                }
            });
        }

        await page.goto('https://demoqa.com/');
        const homePage = new HomePage(page);
        await use(homePage);
    },
    elementspage: async ({  }, use) => {
        const elementsPage = new ElementsPage(page);
        await use(elementsPage);
    },
    textBoxPage: async ({  }, use) => {
        const textBoxPage = new TextBoxPage(page);
        await use(textBoxPage);
    },
});