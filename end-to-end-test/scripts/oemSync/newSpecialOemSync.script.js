const baseTest = require('../../utilities/testBase');
const dataSource = require('../../resources/testDataSource');
const specialsList = require('../../pageObjects/specialsList.page');
const editNewSpecials = require('../../pageObjects/new-specials/editNewSpecials.page');
const viewInventory = require('../../pageObjects/new-specials/viewInventory.page');
const syncSpecials = require('../../pageObjects/oemSync/syncSpecials');

describe('Should sync specials: ', () =>{

    beforeAll(() => {
        baseTest.login();
        browser.logger.info("******************** New Specials oem sync *********************");
    });

    it('syncing new special ',  () => {
        specialsList.clickViewInventory();
        expect(viewInventory.verifyBodyStyle()).toContain("Body Styles");
        viewInventory.giveSpecialDetails("N5061");
        viewInventory.addNewSpecial();
        browser.wait(viewInventory.waitForEditToAppear(), 5000);
        viewInventory.clickEditNow();
        editNewSpecials.markSpecialActive();
        editNewSpecials.checkingWhetherFeaturedEnabled();
        syncSpecials.clickSyndicateToPartners();
        syncSpecials.clickSelectAll();
        syncSpecials.clickOkay();
        browser.wait(syncSpecials.waitForOkay(), 5000);
        syncSpecials.clickOkay();
        expect(syncSpecials.confirmSyncSymbol().isDisplayed()).toBe(true);
    });

});