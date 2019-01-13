const testBaseFunction = require('../../utilities/testBase');
const dataSource = require('../../resources/testDataSource');
const topMenuBar = require('../../pageObjects/topMenuBarOptions');
const slpPage = require('../../pageObjects/pages/slpPageType.page');
const serviceSpecialsList = require('../../pageObjects/service_specials/serviceSpecialsList.page');
const previewScreen = require('../../pageObjects/pages/previewScreen.page');
const editPagesScreen = require('../../pageObjects/pages/editPagesScreen.page');
const pagesHomeScreen = require('../../pageObjects/pages/pagesHomeScreen.page');
const topMenuBarOptions = require('../../pageObjects/topMenuBarOptions');

let serviceSpecialsTitle = '';

describe('should create a slp page and verify the number of service specials: ', () => {

    beforeAll(() => {
        testBaseFunction.login();
        browser.logger.info("****************** SLP pages scenario *****************");
    });

    it('verify only active service specials showing in SLP page', () => {
        browser.wait(topMenuBar.waitForMpopMenuToAppear(), 2000);
        topMenuBar.clickMpopMenu();
        browser.wait(topMenuBar.waitForServiceSpecialToAppear(),2000);
        topMenuBar.clickServiceSpecials();
        serviceSpecialsList.nameOfSpecialToSearch(dataSource.serviceSpecialsData.filterServiceCoupons);
        serviceSpecialsTitle = serviceSpecialsList.getTitlesOfActiveServiceSpecials().then((serviceSpecialsTitles) =>{
            for(let i=0; i<serviceSpecialsTitles.length; i++) {
                console.log("The list of Service Specials: ", serviceSpecialsTitles);
                return serviceSpecialsTitles;
            };
        });
    });

    it('should add SLP type page', () => {
        topMenuBarOptions.clickPages();
        topMenuBarOptions.clickPagesList();
        pagesHomeScreen.clickAddNewPage();
        slpPage.slpSelectPageType();
        slpPage.slpGivePageTitle(dataSource.pages.slpTypePageTitle);
        slpPage.slpSelectServiceCategory();
        slpPage.slpClickSave();
        editPagesScreen.clickAddSection();
        browser.wait(editPagesScreen.waitForOffersToAppear(), 3000);
        editPagesScreen.selectOffersSection();
        editPagesScreen.selectHeaderSection();
        editPagesScreen.selectCtaBarSection();
        editPagesScreen.clickAddSection();
        editPagesScreen.clickSavePage();
        browser.wait(editPagesScreen.waitForPreviewToAppear(), 3000);
        editPagesScreen.clickPreview();
        previewScreen.switchToPreviewWindowForServiceSpecials();
        previewScreen.verifyActiveServiceSpecials().then((listOfActiveServiceSpecials) =>{
            listOfActiveServiceSpecials.forEach((serviceSpecials) =>{
                expect(serviceSpecialsTitle).toContain(serviceSpecials);
            });
        });
        editPagesScreen.switchBackToMainTab();
    });
});