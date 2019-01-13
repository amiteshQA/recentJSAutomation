const dataSource = require('../../resources/testDataSource');
const specialsList = require('../../pageObjects/specialsList.page');
const specialsCreationOption = require('../../pageObjects/specialsCreationOption');
const editUsedSpecials = require('../../pageObjects/used-specials/editUsedSpecials.page');
const commonFunctionality = require('../../utilities/commonFunctionality');

const cpoUsedSpecial = require('../../pageObjects/used-specials/usedSpecials.page');

describe('Should add certified pre-owned used specials : ', () => {

    beforeAll(() => {
        browser.logger.info("******************** Certified Pre-Owned Used Specials cases *********************");
    });

    it('using option add by stock number for certified pre-owned used special', () => {
        specialsCreationOption.clickBuildNewSpecial();
        expect(specialsCreationOption.verifyEnterStockOption()).toContain("Enter stock");
        specialsCreationOption.clickEnterStock();
        cpoUsedSpecial.giveStockNumber(dataSource.usedSpecialsData.testUsedStockNumber);
        cpoUsedSpecial.clickPopulateFromInventory();
        expect(cpoUsedSpecial.verifyConditionOption()).toContain("Certified Pre-Owned");
        cpoUsedSpecial.selectCertifiedPreOwnedOption();
        cpoUsedSpecial.clickSaveSpecial();
        expect(editUsedSpecials.verifyBackToSpecials()).toContain("Back to specials");
        commonFunctionality.verifyCreatedUsedSpecial();
    });

    it('using option add from another account for certified pre-owned used special', () => {
        specialsCreationOption.clickBuildNewSpecial();
        expect(specialsCreationOption.verifyCopyFromAccountOption()).toContain("Copy from account");
        cpoUsedSpecial.clickCopyFromAccount();
        expect(cpoUsedSpecial.verifyCopyFromAccount()).toContain("DT Test 4");
        cpoUsedSpecial.clickChoseSpecial();
        cpoUsedSpecial.verifyChosenSpecial().then((specialName) => {
            expect(specialName).toContain('2018 Chevrolet Colorado Z71');
        });
        cpoUsedSpecial.clickCopySpecial();
        expect(cpoUsedSpecial.verifyConditionOption()).toContain("Certified Pre-Owned");
        cpoUsedSpecial.selectCertifiedPreOwnedOption();
        expect(cpoUsedSpecial.verifyCopySpecial()).toContain("Save Special");
        cpoUsedSpecial.clickSaveSpecial();
        expect(cpoUsedSpecial.verifySaveSpecial()).toContain("Back to specials");
        commonFunctionality.verifyCreatedUsedSpecial();
    });

    it('using option add manually for certified pre-owned used special', () => {
        specialsCreationOption.clickBuildNewSpecial();
        expect(specialsCreationOption.verifyManuallyEnterSpecialOption()).toContain("Manually enter special");
        specialsCreationOption.clickManuallyEnterSpecial();
        expect(cpoUsedSpecial.verifyConditionOption()).toContain("Certified Pre-Owned");
        cpoUsedSpecial.selectCertifiedPreOwnedOption();
        cpoUsedSpecial.selectYear();
        expect(cpoUsedSpecial.verifyMake()).toContain("GMC");
        cpoUsedSpecial.usedSpecialSelectMake();
        expect(cpoUsedSpecial.verifyModel()).toContain("Suburban");
        cpoUsedSpecial.usedSpecialSelectModel();
        cpoUsedSpecial.clickSaveSpecial();
        expect(cpoUsedSpecial.verifySaveSpecial()).toContain("Back to specials");
        editUsedSpecials.markSpecialAsActive();
        editUsedSpecials.clickBackToSpecials();
        expect(specialsList.verifyActiveSpecials()).toContain("Active Specials");
        specialsList.purgeAndVerifyUsedSpecialWithoutStockNumber(dataSource.usedSpecialsData.testSpecialUsedSpecialModelName);
    });
});