const locators = require('../../utilities/locators');

const newSpecials = function () {


    const account = locators.findByXpath("//*[@class='ng-binding ng-scope'][contains(text(),'DT Test 4')]");
    const special = locators.findByXpath("//*[@class='ng-binding ng-scope'][@value='451967']");
    const saveSpecial = locators.findByCss(".saveSpecialButton");
    const backToOffers = locators.findByClassName("dt-back-button ng-scope");
    const stockNumber = locators.findById("inputStockNumber");
    const populateFromInventory = locators.findByPartialButtonText("Populate from Inventory");
    const newConditionOption = locators.findByXpath("//*[@id='selectCondition']//*[@value='New']");
    const loanerConditionOption = locators.findByXpath("//*[@id='selectCondition']//*[@value='Loaner']");
    const year = locators.findByXpath(".//*[@id='selectYear']/*[@value='2017']");
    const make = locators.findByXpath(".//*[@id='selectMake']/*[contains(text(),'Honda')]");
    const model = locators.findByXpath(".//*[@id='selectModel']/*[contains(text(),'Pilot')]");


    this.verifyCopyFromAccount = () => {
        return account.getText();
    };
    /**
     * choosing account from where to copy the special
     */
    this.clickChoseAccount = () => {
        account.click();
    };
    this.verifyNewChosenSpecial = () => {
        let filterSpecial = special.getText();
        return filterSpecial.then((text) => {
            let special = text.replace(/^\s+|\s+$|\s+(?=\s)/g, "");
            return special;
        });
    };
    /**
     * selecting the special
     */
    this.clickCopySpecial = () => {
        special.click();
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
    this.verifySpecialSaved = () => {
        return backToOffers.getText();
    };
    /**
     * sending stock number
     */
    this.giveStockNumber = (newStockNumber) => {
        stockNumber.sendKeys(newStockNumber);
    };
    /**
     * clicking on Populate From Inventory
     */
    this.clickPopulateFromInventory = () => {
        populateFromInventory.click();
    };
    /**
     * verify new condition
     */
    this.verifyNewConditionOption = () => {
        return newConditionOption.getText();
    };
    /**
     * selecting new condition
     */
    this.selectNewConditionOption = () => {
        newConditionOption.click();
    };
    this.verifyLoanerConditionOption = () => {
        return loanerConditionOption.getText();
    };
    /**
     * selecting new loaner condition
     */
    this.selectLoanerConditionOption = () => {
        loanerConditionOption.click();
    };
    /**
     * selecting year i.e. 2017
     */
    this.selectNewSpecialYear = () => {
        year.click();
    };
    /**
     * selecting make i.e. Honda
     */
    this.selectNewSpecialMake = () => {
        make.click();
    };
    /**
     * selecting model i.e. Pilot
     */
    this.selectNewSpecialModel = () => {
        model.click();
    };
};

module.exports = new newSpecials();