const locators = require('../utilities/locators');

const specialsList = function () {

    const navBar = locators.findByPartialLinkText("View Inventory");
    const specialSearch = locators.findByModel("list.specialsSearch");
    const activeSpecial = locators.findByXpath("//*[@id='container']//*[contains(text(),'Active Specials')]");
    const addedSpecialStockNumber = locators.findByXpath("//span[@class='ng-binding ng-scope']");
    const deleteSpecial = locators.findByClassName("delete-button");
    const activeStatusConfirmation = locators.findByXpath(".//*[@class='ng-scope']//*[text()='Active']");
    const featuredOfferLocation = locators.findByClassName("featured-offer-notification ng-scope");
    const specialName = locators.findAllByXpath("//*[@class='special-container']//*[text()='BMW']");

    this.verifyNavBarText = () => {
        return navBar.getText();
    };

    this.searchSpecial = (specials) => {
        specialSearch.sendKeys(specials)
    };

    this.verifyActiveSpecials = () => {
        return activeSpecial.getText();
    };

    this.clickViewInventory = () => {
        navBar.click();
    };

    this.getTotalSpecialsCount = () => {
        return specialName.count().then((counts) =>{
            return counts;
        });
    };

    /**
     * This function is for verifying the created special and purging it in specials list
     * screen which has stock number on top of it in the special list screen.
     */
    this.purgeAndVerifyNewSpecialWithStockNumber = (specialStockNumber) => {
        specialSearch.sendKeys(specialStockNumber);
        expect(featuredOfferLocation.isPresent).toBeTruthy();
        expect(activeStatusConfirmation.isPresent).toBeTruthy();
        expect(addedSpecialStockNumber.getText()).toContain(specialStockNumber);
        expect(deleteSpecial.isPresent()).toBeTruthy();
        deleteSpecial.click();
        browser.logger.info(specialStockNumber + " :special deleted");
        let handleAlert = browser.switchTo().alert();
        handleAlert.accept();
        specialSearch.clear();
        expect(specialSearch.getText()).toBe('');
    };
    /**
     * This function is for verifying the created special and purging it in specials list
     * It's only for scenario 'adding manually' new special
     */
    this.purgeAndVerifyNewSpecialWithModelName = (specialModelName) => {
        specialSearch.sendKeys(specialModelName);
        expect(featuredOfferLocation.isPresent).toBeTruthy();
        expect(activeStatusConfirmation.isPresent).toBeTruthy();
        expect(deleteSpecial.isPresent()).toBeTruthy();
        deleteSpecial.click();
        browser.logger.info(specialModelName + " :special deleted");
        let handleAlert = browser.switchTo().alert();
        handleAlert.accept();
        specialSearch.clear();
        expect(specialSearch.getText()).toBe('');
    };
    /**
     * This function is for verifying the created special and purging it in specials list
     * screen which doesn't have the stock number in the special list screen.
     */
    this.purgeAndVerifyUsedSpecialWithoutStockNumber = (usedSpecial) => {
        specialSearch.sendKeys(usedSpecial);
        expect(activeStatusConfirmation.isPresent).toBeTruthy();
        expect(deleteSpecial.isPresent()).toBeTruthy();
        deleteSpecial.click();
        browser.logger.info(usedSpecial + " :special deleted");
        let handleAlert = browser.switchTo().alert();
        handleAlert.accept();
        specialSearch.clear();
        expect(specialSearch.getText()).toBe('');
    };
};

module.exports = new specialsList();