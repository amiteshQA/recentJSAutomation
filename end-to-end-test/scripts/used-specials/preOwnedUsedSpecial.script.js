const dataSource = require('../../resources/testDataSource');
const specialsList = require('../../pageObjects/specialsList.page');
const specialsCreationOption = require('../../pageObjects/specialsCreationOption');
const editUsedSpecials = require('../../pageObjects/used-specials/editUsedSpecials.page');
const commonFunctionality = require('../../utilities/commonFunctionality');
const poUsedSpecial = require('../../pageObjects/used-specials/usedSpecials.page');

describe('Should add pre-owned used specials: ', () => {

    beforeAll(() => {
        browser.logger.info("******************** Pre-Owned Used Specials cases *********************");
    });

    it('using option add by stock number for pre-owned used special', () => {
        specialsCreationOption.clickBuildNewSpecial();
        expect(specialsCreationOption.verifyEnterStockOption()).toContain("Enter stock");
        specialsCreationOption.clickEnterStock();
        poUsedSpecial.giveStockNumber(dataSource.usedSpecialsData.testUsedStockNumber);
        poUsedSpecial.clickPopulateFromInventory();
        expect(poUsedSpecial.verifyPreOwnedConditionOption()).toContain("Pre-Owned");
        poUsedSpecial.selectPreOwnedOptionOption();
        poUsedSpecial.clickSaveSpecial();
        expect(editUsedSpecials.verifyBackToSpecials()).toContain("Back to specials");
        commonFunctionality.verifyCreatedUsedSpecial();
    });

    it('using option add from another account for pre-owned used special', () => {
        specialsCreationOption.clickBuildNewSpecial();
        expect(specialsCreationOption.verifyCopyFromAccountOption()).toContain("Copy from account");
        poUsedSpecial.clickCopyFromAccount();
        expect(poUsedSpecial.verifyCopyFromAccount()).toContain("DT Test 4");
        poUsedSpecial.clickChoseSpecial();
        poUsedSpecial.verifyChosenSpecial().then((specialName) => {
            expect(specialName).toContain('2018 Chevrolet Colorado Z71');
        });
        poUsedSpecial.clickCopySpecial();
        expect(poUsedSpecial.verifyPreOwnedConditionOption()).toContain("Pre-Owned");
        poUsedSpecial.selectPreOwnedOptionOption();
        expect(poUsedSpecial.verifyCopySpecial()).toContain("Save Special");
        poUsedSpecial.clickSaveSpecial();
        expect(poUsedSpecial.verifySaveSpecial()).toContain("Back to specials");
        commonFunctionality.verifyCreatedUsedSpecial();
    });

    it('using option add manually for pre-owned used special', () => {
        specialsCreationOption.clickBuildNewSpecial();
        expect(specialsCreationOption.verifyManuallyEnterSpecialOption()).toContain("Manually enter special");
        specialsCreationOption.clickManuallyEnterSpecial();
        expect(poUsedSpecial.verifyPreOwnedConditionOption()).toContain("Pre-Owned");
        poUsedSpecial.selectPreOwnedOptionOption();
        poUsedSpecial.selectYear();
        expect(poUsedSpecial.verifyMake()).toContain("GMC");
        poUsedSpecial.usedSpecialSelectMake();
        expect(poUsedSpecial.verifyModel()).toContain("Suburban");
        poUsedSpecial.usedSpecialSelectModel();
        poUsedSpecial.clickSaveSpecial();
        expect(poUsedSpecial.verifySaveSpecial()).toContain("Back to specials");
        editUsedSpecials.markSpecialAsActive();
        editUsedSpecials.clickBackToSpecials();
        expect(specialsList.verifyActiveSpecials()).toContain("Active Specials");
        specialsList.purgeAndVerifyUsedSpecialWithoutStockNumber(dataSource.usedSpecialsData.testSpecialUsedSpecialModelName);
    });
});