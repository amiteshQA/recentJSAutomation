const baseTest = require('../../utilities/testBase');
const dataSource = require('../../resources/testDataSource');
const topMenuBarOptions = require('../../pageObjects/topMenuBarOptions');
const editPagesScreen = require('../../pageObjects/pages/editPagesScreen.page');
const pagesHomeScreen = require('../../pageObjects/pages/pagesHomeScreen.page');
const pages = require('../../pageObjects/pages/allPageType.page');
const ncsPage = require('../../pageObjects/pages/ncsPageType.page');
const vlpPage = require('../../pageObjects/pages/vlpPageType.page');
const ucsPage = require('../../pageObjects/pages/ucsPageType.page');
const slpPage = require('../../pageObjects/pages/slpPageType.page');
const previewScreen = require('../../pageObjects/pages/previewScreen.page');

describe('Test all type of pages: ', () => {

    beforeAll(() =>{
        browser.logger.info("**************** pages session start **************");
        baseTest.login();
    });

    it('should add all type page ', () => {
        topMenuBarOptions.clickPages();
        topMenuBarOptions.clickPagesList();
        pagesHomeScreen.clickAddNewPage();
        pages.clickPagesType();
        pages.givePageTitle(dataSource.pages.allTypePageTitle);
        pages.selectMake();
        pages.selectSeries();
        pages.clickSave();
        editPagesScreen.clickAddSection();
        browser.wait(editPagesScreen.waitForOffersToAppear(), 3000);
        editPagesScreen.selectOffersSection();
        editPagesScreen.selectHeaderSection();
        editPagesScreen.selectCtaBarSection();
        editPagesScreen.clickAddSection();
        editPagesScreen.clickSavePage();
        browser.wait(editPagesScreen.waitForPreviewToAppear(), 3000);
        editPagesScreen.clickPreview();
        previewScreen.switchToPreviewWindowForSpecials();
        editPagesScreen.switchBackToMainTab();
     });

    it('should add NCS type page', () => {
        pagesHomeScreen.clickAddNewPage();
        ncsPage.ncsSelectPageType();
        ncsPage.ncsGivePageTitle(dataSource.pages.ncsTypePageTitle);
        ncsPage.ncsSelectYear();
        ncsPage.ncsSelectMake();
        ncsPage.ncsSelectSeries();
        ncsPage.ncsSelectModel();
        ncsPage.ncsClickSave();
        editPagesScreen.clickAddSection();
        browser.wait(editPagesScreen.waitForOffersToAppear(), 3000);
        editPagesScreen.selectHeaderSection();
        editPagesScreen.selectCtaBarSection();
        editPagesScreen.clickAddSection();
        editPagesScreen.clickSavePage();
        browser.wait(editPagesScreen.waitForPreviewToAppear(), 3000);
        editPagesScreen.clickPreview();
        previewScreen.switchToPreviewWindowForSpecials();
        editPagesScreen.switchBackToMainTab();
    });

    xit('should add VLP type page', () => {
        pagesHomeScreen.clickAddNewPage();
        vlpPage.vlpClickPagesType();
        vlpPage.vlpGivePageTitle(dataSource.pages.vlpTypePageTitle);
        vlpPage.vlpSelectYear();
        vlpPage.vlpSelectMake();
        vlpPage.vlpSelectModel();
        vlpPage.vlpClickSave();
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
        editPagesScreen.switchBackToMainTab();
    });

    it('should add UCS type page', () => {
        pagesHomeScreen.clickAddNewPage();
        ucsPage.ucsSelectPageType();
        ucsPage.ucsGivePageTitle(dataSource.pages.ucsTypePageTitle);
        ucsPage.ucsSelectYear();
        ucsPage.ucsSelectMake();
        ucsPage.ucsSelectSeries();
        ucsPage.ucsSelectModel();
        ucsPage.ucsClickSave();
        editPagesScreen.clickAddSection();
        browser.wait(editPagesScreen.waitForOffersToAppear(), 3000);
        editPagesScreen.selectHeaderSection();
        editPagesScreen.selectCtaBarSection();
        editPagesScreen.clickAddSection();
        editPagesScreen.clickSavePage();
        browser.wait(editPagesScreen.waitForPreviewToAppear(), 3000);
        editPagesScreen.clickPreview();
        previewScreen.switchToPreviewWindowForSpecials();
        editPagesScreen.switchBackToMainTab();
    });

    it('should add SLP type page', () => {
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
        editPagesScreen.switchBackToMainTab();
    });
});