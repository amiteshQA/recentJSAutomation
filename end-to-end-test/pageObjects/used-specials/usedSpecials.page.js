/**
 * importing the locators function from utilities
 * @type {locators}
 */
const locators = require('../../utilities/locators');

const usedSpecials = function () {

    const copyFromAccount = locators.findByXpath("//*[@class='dt-secondary-gradient-button'][contains(text(),'Copy from account')]");
    const choseAccount = locators.findByXpath("//*[@class='ng-binding ng-scope'][contains(text(),'DT Test 4')]");
    const copySpecial = locators.findByXpath("//*[@class='ng-binding ng-scope'][@value='442894']");
    const certifiedPreOwnedOption = locators.findByXpath("//*[@id='selectCondition']/*[@value='Certified Pre-Owned']");
    const preOwnedOption = locators.findByXpath("//*[@id='selectCondition']/*[@value='Pre-Owned']");
    const usedConditionOption = locators.findByXpath("//*[@id='selectCondition']/*[@value='Used']");
    const saveSpecial = locators.findByXpath(".//*[@id='new-special']//div[4]/button");
    const active = locators.findByModel("editor.special.active");
    const backToOffers = locators.findByClassName("dt-back-button ng-scope");
    const stock = locators.findById("inputStockNumber");
    const populateFromInventory = locators.findByPartialButtonText("Populate from Inventory");
    const year = locators.findByXpath(".//*[@id='selectYear']/*[@value='2016']");
    const make = locators.findByXpath(".//*[@id='selectMake']/*[contains(text(),'GMC')]");
    const model = locators.findByXpath(".//*[@id='selectModel']/*[contains(text(),'Suburban')]");


    /**
     * clicking on copy from account
     */
    this.clickCopyFromAccount = () => {
        copyFromAccount.click();
    };



    this.verifyCopyFromAccount = () => {
        return choseAccount.getText();
    };
    /**
     * choosing account from where to copy the special
     */
    this.clickChoseSpecial = () => {
        choseAccount.click();
    };
    /**
     * @returns {promise.Promise<T | never>}
     * extracts the special name which is going to be added
     */
    this.verifyChosenSpecial = () => {
        let filterSpecial = copySpecial.getText();
        return filterSpecial.then((text) => {
            let special = text.replace(/^\s+|\s+$|\s+(?=\s)/g, "");
            return special;
        });
    };/**
     * marking the special as active
     */
    this.markSpecailActive = () => {
        active.click();
    };
    /**
     * selecting the special
     */
    this.clickCopySpecial = () => {
        copySpecial.click();
    };
    this.verifyUsedConditionOption = () => {
        return usedConditionOption.getText();
    };

    this.selectUsedConditionOption = () => {
        usedConditionOption.click();
    };
    /**
     *
     * returns type of used special option
     */
    this.verifyConditionOption = () => {
        return certifiedPreOwnedOption.getText();
    };
    /**
     *
     * selecting the type of used special option
     */
    this.selectCertifiedPreOwnedOption = () => {
        certifiedPreOwnedOption.click();
    };

    this.verifyPreOwnedConditionOption = () => {
        return preOwnedOption.getText();
    };

    this.selectPreOwnedOptionOption = () => {
        preOwnedOption.click();
    };

    this.verifyCopySpecial = () => {
        return saveSpecial.getText();
    };
    /**
     * saving the configuration
     */
    this.clickSaveSpecial = () => {
        saveSpecial.click();
    };
    this.verifySaveSpecial = () => {
        return backToOffers.getText();
    };
    this.giveStockNumber = (stockNumber) => {
        stock.sendKeys(stockNumber);
    };

    this.clickPopulateFromInventory = () => {
        populateFromInventory.click();
    };

    /**
     * selecting year i.e. 2016
     */
    this.selectYear = () => {
        year.click();
    };
    this.verifyMake = () => {
        return make.getText();
    };
    /**
     * selecting make i.e. GMC
     */
    this.usedSpecialSelectMake = () => {
        make.click();
    };
    this.verifyModel = () => {
        return model.getText();
    };
    /**
     * selecting model i.e. Suburban
     */
    this.usedSpecialSelectModel = () => {
        model.click();
    };
};

module.exports = new usedSpecials();