const locators = require('../utilities/locators');

const specialsCreationOption = function () {

    const buildNewSpecial = locators.findByClassName("newSpecialButton build-special dt-secondary-gradient-button");
    const copyFromAccount = locators.findByXpath("//*[@class='dt-secondary-gradient-button'][contains(text(),'Copy from account')]");
    const choseAccount = locators.findByXpath("//*[@class='ng-binding ng-scope'][contains(text(),'DT Test 4')]");
    const copySpecial = locators.findByXpath("//*[@class='ng-binding ng-scope'][@value='299235']");
    const manuallyEnterSpecial = locators.findByPartialButtonText("Manually enter special");
    const enterStock = locators.findByPartialButtonText("Enter stock");

    /**
     * clicking on build new special
     */
    this.clickBuildNewSpecial = () => {
        buildNewSpecial.click();
    };

    this.verifyCopyFromAccountOption = () => {
        return copyFromAccount.getText();
    };
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

    this.verifyManuallyEnterSpecialOption = () => {
        return manuallyEnterSpecial.getText();
    };
    /**
     * clicking on manually enter special option
     */
    this.clickManuallyEnterSpecial = () => {
        manuallyEnterSpecial.click();
    };

    this.verifyEnterStockOption = () => {
        return enterStock.getText();
    };

    this.clickEnterStock = () => {
        enterStock.click();
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
    };
};

module.exports = new specialsCreationOption();