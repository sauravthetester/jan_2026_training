import { chromium, firefox, Page } from "@playwright/test";

export async function getPageChrome(){

    chromium.launchPersistentContext('', {acceptDownloads: false })
    const browser = await chromium.launch( {channel: 'chrome', headless: false})
    const context = browser.newContext();
    const newcontext = browser.newContext();
    const page = (await context).newPage();

    return page;
    
}

export async function getPageFirefox(){
    const browser = await firefox.launch({headless: false});
    const context = browser.newContext();
    const page = (await context).newPage();

    return page;
    
}