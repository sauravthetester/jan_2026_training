import { test } from '../../pages/fixtures/myFixtures';

test('Test case 1', 
    {
        annotation: {type: 'defect', description: 'This is doing regression'},
        tag: ['@regression', '@smoke'],// 100 - 80 reg, 25 smoke, 40 defects
    }
    ,async ( {homePage, elementspage, textBoxPage}) => {

    await homePage.goToElementsPage();
    await elementspage.clickOnTextBoxMenu();
    await textBoxPage.fillUpTheFields();
});

test('Test case 2', 
    {
        annotation: {type: 'defect', description: 'This is doing sanity'},
        tag: ['@sanity', '@defect', '@regression'],
    }
    ,async ( {homePage, elementspage, textBoxPage}) => {

    await homePage.goToElementsPage();
    await elementspage.clickOnTextBoxMenu();
    await textBoxPage.fillUpTheFields();
});