const baseTest = require('../../utilities/testBase');
const dataSource = require('../../resources/testDataSource');
const specialsList = require('../../pageObjects/specialsList.page');
const editNewSpecials = require('../../pageObjects/new-specials/editNewSpecials.page');
const specialsCreationOption = require('../../pageObjects/specialsCreationOption');
const commonFunctionality = require('../../utilities/commonFunctionality');
const viewInventory = require('../../pageObjects/new-specials/viewInventory.page');
const newSpecials = require('../../pageObjects/new-specials/newSpecials.page');

describe('Should add new specials : ', () => {

    beforeAll(() => {
        baseTest.login();
        browser.logger.info("******************** New Specials cases *********************");
    });

    it('using add from inventory option', () => {
        specialsList.clickViewInventory();
        expect(viewInventory.verifyBodyStyle()).toContain("Body Styles");
        viewInventory.giveSpecialDetails(dataSource.newSpecialsData.testNewSpecialAddFromInventoryStockNumber);
        viewInventory.addNewSpecial();
        browser.wait(viewInventory.waitForEditToAppear(), 5000);
        viewInventory.clickEditNow();
        editNewSpecials.markSpecialActive();
        editNewSpecials.checkingWhetherFeaturedEnabled();
        commonFunctionality.verifyCreatedNewSpecial();
    });

    it('using option add from another account', () => {
        specialsCreationOption.clickBuildNewSpecial();
        expect(specialsCreationOption.verifyCopyFromAccountOption()).toContain("Copy from account");
        specialsCreationOption.clickCopyFromAccount();
        expect(newSpecials.verifyCopyFromAccount()).toContain("DT Test 4");
        newSpecials.clickChoseAccount();
        newSpecials.verifyNewChosenSpecial().then((specialName) => {
            expect(specialName).toContain('2019 Chevrolet Silverado 1500 LT');
        });
        newSpecials.clickCopySpecial();
        expect(newSpecials.verifyCopySpecial()).toContain("Save Special");
        newSpecials.clickSaveSpecial();
        expect(newSpecials.verifySpecialSaved()).toContain("Back to offers");
        editNewSpecials.markSpecialActive();
        editNewSpecials.checkingWhetherFeaturedEnabled();
        commonFunctionality.verifyCreatedNewSpecial();
    });

    it('using option add by stock number', () => {
        specialsCreationOption.clickBuildNewSpecial();
        expect(specialsCreationOption.verifyEnterStockOption()).toContain("Enter stock");
        specialsCreationOption.clickEnterStock();
        newSpecials.giveStockNumber(dataSource.newSpecialsData.testNewStockNumber);
        newSpecials.clickPopulateFromInventory();
        expect(newSpecials.verifyNewConditionOption()).toContain("New");
        newSpecials.selectNewConditionOption();
        newSpecials.clickSaveSpecial();
        expect(newSpecials.verifySpecialSaved()).toContain("Back to offers");
        editNewSpecials.markSpecialActive();
        editNewSpecials.checkingWhetherFeaturedEnabled();
        commonFunctionality.verifyCreatedNewSpecial();
    });

    it('using option add manually', () => {
        specialsCreationOption.clickBuildNewSpecial();
        expect(specialsCreationOption.verifyManuallyEnterSpecialOption()).toContain("Manually enter special");
        specialsCreationOption.clickManuallyEnterSpecial();
        newSpecials.selectNewSpecialYear();
        newSpecials.selectNewSpecialMake();
        newSpecials.selectNewSpecialModel();
        newSpecials.clickSaveSpecial();
        expect(newSpecials.verifySpecialSaved()).toContain("Back to offers");
        editNewSpecials.markSpecialActive();
        editNewSpecials.checkingWhetherFeaturedEnabled();
        editNewSpecials.clickBackToOffers();
        expect(specialsList.verifyActiveSpecials()).toContain("Active Specials");
        specialsList.purgeAndVerifyNewSpecialWithModelName(dataSource.newSpecialsData.testSpecialNewSpecialModelName);
    });
});