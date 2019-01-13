const dataSource = require('../../resources/testDataSource');
const specialsList = require('../../pageObjects/specialsList.page');
const editNewSpecials = require('../../pageObjects/new-specials/editNewSpecials.page');
const specialsCreationOption = require('../../pageObjects/specialsCreationOption');
const commonFunctionality = require('../../utilities/commonFunctionality');
const newLoanerSpecials = require('../../pageObjects/new-specials/newSpecials.page');

describe('Should add new loaner specials : ', () => {

    beforeAll(() => {
        browser.logger.info("******************** New Loaner Specials cases *********************");
    });

    it('using option add from another account', () => {
        specialsCreationOption.clickBuildNewSpecial();
        expect(specialsCreationOption.verifyCopyFromAccountOption()).toContain("Copy from account");
        specialsCreationOption.clickCopyFromAccount();
        expect(newLoanerSpecials.verifyCopyFromAccount()).toContain("DT Test 4");
        newLoanerSpecials.clickChoseAccount();
        newLoanerSpecials.verifyNewChosenSpecial().then((specialName) => {
            expect(specialName).toContain('2019 Chevrolet Silverado 1500 LT');
        });
        newLoanerSpecials.clickCopySpecial();
        expect(newLoanerSpecials.verifyLoanerConditionOption()).toContain("Loaner");
        newLoanerSpecials.selectLoanerConditionOption();
        expect(newLoanerSpecials.verifyCopySpecial()).toContain("Save Special");
        newLoanerSpecials.clickSaveSpecial();
        expect(newLoanerSpecials.verifySpecialSaved()).toContain("Back to offers");
        editNewSpecials.markSpecialActive();
        editNewSpecials.checkingWhetherFeaturedEnabled();
        commonFunctionality.verifyCreatedNewSpecial();
    });

    it('using option add by stock number', () => {
        specialsCreationOption.clickBuildNewSpecial();
        expect(specialsCreationOption.verifyEnterStockOption()).toContain("Enter stock");
        specialsCreationOption.clickEnterStock();
        newLoanerSpecials.giveStockNumber(dataSource.newSpecialsData.testNewStockNumber);
        newLoanerSpecials.clickPopulateFromInventory();
        expect(newLoanerSpecials.verifyLoanerConditionOption()).toContain("Loaner");
        newLoanerSpecials.selectLoanerConditionOption();
        newLoanerSpecials.clickSaveSpecial();
        expect(newLoanerSpecials.verifySpecialSaved()).toContain("Back to offers");
        editNewSpecials.markSpecialActive();
        editNewSpecials.checkingWhetherFeaturedEnabled();
        commonFunctionality.verifyCreatedNewSpecial();
    });

    it('using option add manually', () => {
        specialsCreationOption.clickBuildNewSpecial();
        expect(specialsCreationOption.verifyManuallyEnterSpecialOption()).toContain("Manually enter special");
        specialsCreationOption.clickManuallyEnterSpecial();
        expect(newLoanerSpecials.verifyLoanerConditionOption()).toContain("Loaner");
        newLoanerSpecials.selectLoanerConditionOption();
        newLoanerSpecials.selectNewSpecialYear();
        newLoanerSpecials.selectNewSpecialMake();
        newLoanerSpecials.selectNewSpecialModel();
        newLoanerSpecials.clickSaveSpecial();
        expect(newLoanerSpecials.verifySpecialSaved()).toContain("Back to offers");
        editNewSpecials.markSpecialActive();
        editNewSpecials.checkingWhetherFeaturedEnabled();
        editNewSpecials.clickBackToOffers();
        expect(specialsList.verifyActiveSpecials()).toContain("Active Specials");
        specialsList.purgeAndVerifyNewSpecialWithModelName(dataSource.newSpecialsData.testSpecialNewSpecialModelName);
    });
});