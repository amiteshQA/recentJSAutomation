const locators = require('../../utilities/locators');

const syncSpecials = function () {

    const syndicateToPartners = locators.findByButtonText("Syndicate to Partners");
    const selectAll = locators.findByButtonText("Select All");
    const okay = locators.findByButtonText("Okay");
    const syncSymbol = locators.findByClassName("previewTab syncTab ng-scope");

    const until = protractor.ExpectedConditions;

    this.clickSyndicateToPartners = () => {
        syndicateToPartners.click();
    };

    this.clickSelectAll = () => {
        selectAll.click();
    };

    this.waitForOkay = () => {
        let isOkayVisible = until.elementToBeClickable(okay);
        return isOkayVisible;
    };

    this.clickOkay = () => {
        okay.click();
    };

    this.confirmSyncSymbol = () => {
        return syncSymbol;
    };

};

module.exports = new syncSpecials();