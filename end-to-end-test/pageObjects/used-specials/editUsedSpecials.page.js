const locators = require('../../utilities/locators');

const editUsedSpecials = function () {

    const usedActive = locators.findByModel("editor.special.active");
    const usedStockNumber = locators.findByXpath("//*[@id='container']/div[2]/div/div[2]/div[1]/h5[1]");
    const usedBackToSpecials = locators.findByClassName("dt-back-button ng-scope");

    /**
     * Grabbing the stock number
     */
    this.getUsedSpecialStockNumber = () => {
        return usedStockNumber.getText().then((text) => {
            let splitStockNumber = text.split(": ");
            browser.logger.info("Stock number for option(add from inventory): ", splitStockNumber[1]);
            return splitStockNumber[1];
        });
    };
    /**
     * marking the special as active
     */
    this.markSpecialAsActive = () => {
        usedActive.click();
    };

    this.verifyBackToSpecials = () => {
        return usedBackToSpecials.getText();
    };
    /**
     * clicking on back to offers
     */
    this.clickBackToSpecials = () => {
        usedBackToSpecials.click();
    };

};

module.exports = new editUsedSpecials();
