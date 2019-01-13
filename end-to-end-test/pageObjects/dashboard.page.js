const locators = require('../utilities/locators');

const dashboard = function () {

    const accountSearch = locators.findById("dash-text-search-input");
    const account = locators.findByXpath(".//*[@class='dash-item-title'][contains(text(),'QA Automation Test')]");

    /**
     * searching for the account
     * @param accountName
     */
    this.giveAccountName = (accountName) => {
        accountSearch.sendKeys(accountName)
    };
    /**
     * clicking on account
     */
    this.clickAccount = () => {
        account.click();
    };

};

module.exports = new dashboard();