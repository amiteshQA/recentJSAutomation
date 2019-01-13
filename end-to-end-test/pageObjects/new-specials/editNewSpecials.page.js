const locators = require('../../utilities/locators');

const editNewSpecials = function () {

    const active = locators.findByModel("editor.special.active");
    const featuredOffer = locators.findById("inputFeaturedOffer");
    const stockNumber = locators.findByXpath("//*[@id='container']/div[2]/div/div[2]/div[1]/h5[1]");
    const backToOffers = locators.findByClassName("dt-back-button ng-scope");

    /**
     * Grabbing the stock number
     */
    this.getStockNumber = () => {
        return stockNumber.getText().then((text) => {
            let splitStockNumber = text.split(": ");
            browser.logger.info("Stock number for option(add from inventory): ", splitStockNumber[1]);
            return splitStockNumber[1];
        });
    };
    /**
     * marking the special as active
     */
    this.markSpecialActive = () => {
        active.click();
    };
    /**
     *enabling featured offer
     */
    this.checkingWhetherFeaturedEnabled = () => {
        featuredOffer.isSelected().then((result) =>{
            if(result) {
                backToOffers.click();
            } else {
                featuredOffer.click();
                let featuredAlert = browser.switchTo().alert();
                featuredAlert.accept();
            }
        });
    };
    /**
     * clicking on back to offers
     */
    this.clickBackToOffers = () => {
        backToOffers.click();
    };
};

module.exports = new editNewSpecials();