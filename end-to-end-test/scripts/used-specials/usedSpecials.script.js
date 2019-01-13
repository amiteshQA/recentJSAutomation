const baseTest = require('../../utilities/testBase');
const dataSource = require('../../resources/testDataSource');
const specialsList = require('../../pageObjects/specialsList.page');
const specialsCreationOption = require('../../pageObjects/specialsCreationOption');
const editUsedSpecials = require('../../pageObjects/used-specials/editUsedSpecials.page');
const topBarMenuOption = require('../../pageObjects/topMenuBarOptions');
const commonFunctionality = require('../../utilities/commonFunctionality');
const viewInventory = require('../../pageObjects/new-specials/viewInventory.page');
const usedSpecial = require('../../pageObjects/used-specials/usedSpecials.page');

describe('Should add used specials : ', () => {

    beforeAll(() => {
        baseTest.login();
        browser.logger.info("******************** Used Specials cases *********************");
    });

    it('using add from inventory option for used special', () => {
        topBarMenuOption.clickMpopMenu();
        topBarMenuOption.clickUsedSpecials();
        specialsList.clickViewInventory();
        expect(viewInventory.verifyBodyStyle()).toContain("Body Styles");
        viewInventory.giveSpecialDetails(dataSource.usedSpecialsData.testUsedStockNumber);
        viewInventory.addNewSpecial();
        browser.wait(viewInventory.waitForEditToAppear(), 5000);
        viewInventory.clickEditNow();
        commonFunctionality.verifyCreatedUsedSpecial();
    });

    it('using option add from another account for used special', () => {
        specialsCreationOption.clickBuildNewSpecial();
        expect(specialsCreationOption.verifyCopyFromAccountOption()).toContain("Copy from account");
        usedSpecial.clickCopyFromAccount();
        expect(usedSpecial.verifyCopyFromAccount()).toContain("DT Test 4");
        usedSpecial.clickChoseSpecial();
        usedSpecial.verifyChosenSpecial().then((specialName) => {
            expect(specialName).toContain('2018 Chevrolet Colorado Z71');
        });
        usedSpecial.clickCopySpecial();
        expect(usedSpecial.verifyCopySpecial()).toContain("Save Special");
        usedSpecial.clickSaveSpecial();
        expect(usedSpecial.verifySaveSpecial()).toContain("Back to specials");
        commonFunctionality.verifyCreatedUsedSpecial();
    });

    it('using option add by stock number for used special', () => {
        specialsCreationOption.clickBuildNewSpecial();
        expect(specialsCreationOption.verifyEnterStockOption()).toContain("Enter stock");
        specialsCreationOption.clickEnterStock();
        usedSpecial.giveStockNumber(dataSource.usedSpecialsData.testUsedStockNumber);
        usedSpecial.clickPopulateFromInventory();
        expect(usedSpecial.verifyUsedConditionOption()).toContain("Used");
        usedSpecial.selectUsedConditionOption();
        usedSpecial.clickSaveSpecial();
        expect(editUsedSpecials.verifyBackToSpecials()).toContain("Back to specials");
        commonFunctionality.verifyCreatedUsedSpecial();
    });

    it('using option add manually for used special', () => {
        specialsCreationOption.clickBuildNewSpecial();
        expect(specialsCreationOption.verifyManuallyEnterSpecialOption()).toContain("Manually enter special");
        specialsCreationOption.clickManuallyEnterSpecial();
        usedSpecial.selectYear();
        expect(usedSpecial.verifyMake()).toContain("GMC");
        usedSpecial.usedSpecialSelectMake();
        expect(usedSpecial.verifyModel()).toContain("Suburban");
        usedSpecial.usedSpecialSelectModel();
        usedSpecial.clickSaveSpecial();
        expect(usedSpecial.verifySaveSpecial()).toContain("Back to specials");
        editUsedSpecials.markSpecialAsActive();
        editUsedSpecials.clickBackToSpecials();
        expect(specialsList.verifyActiveSpecials()).toContain("Active Specials");
        specialsList.purgeAndVerifyUsedSpecialWithoutStockNumber(dataSource.usedSpecialsData.testSpecialUsedSpecialModelName);
    });
});