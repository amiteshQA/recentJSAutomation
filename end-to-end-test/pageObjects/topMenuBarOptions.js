const locators = require('../../end-to-end-test/utilities/locators');

const topMenuBarOption = function () {

    const mpopMenu = locators.findByXpath("//*[@id='nav2']//*[text()='MPOP']");
    const usedSpecialsOption = locators.findByPartialLinkText("Used Specials");
    const mpopAccount = locators.findByXpath("//*[@class='dropdown-toggle'][contains(text(),'Account')]");
    const mpopAccountInfo = locators.findByPartialLinkText("Account Info");
    const mpopSettings = locators.findByPartialLinkText("Settings");
    const serviceSpecials = locators.findByPartialLinkText("Service Specials");
    const pages = locators.findByXpath("//*[@class='dropdown-toggle'][contains(text(),'Pages')]");
    const pagesList = locators.findByPartialLinkText("Pages List");

    const until = protractor.ExpectedConditions;

    //wait for MPOP to appear
    this.waitForMpopMenuToAppear = () => {
        let isMpopMenuClickable = until.elementToBeClickable(mpopMenu);
        return isMpopMenuClickable;
    };
    /**
     * Clicking mpop menu present on the top nav bar
     */
    this.clickMpopMenu = () => {
        mpopMenu.click();
    };
    /**
     * clicking on used specials option present under mpop
     */
    this.clickUsedSpecials = () => {
        usedSpecialsOption.click();
    };
    /**
     * click on Accounts
     */
    this.clickAccount = () => {
        mpopAccount.click();
    };
    /**
     * click account info
     */
    this.clickAccountInfo = () => {
        mpopAccountInfo.click();
    };

    this.clickSettings = () => {
        mpopSettings.click();
    };

    this.waitForServiceSpecialToAppear = () => {
        let isServiceSpecialClickable = until.elementToBeClickable(serviceSpecials);
        return isServiceSpecialClickable;
    };

    this.clickServiceSpecials = () => {
        serviceSpecials.click();
    };

    this.clickPages = () => {
        pages.click();
    };

    this.clickPagesList = () => {
        pagesList.click();
    };

};

module.exports = new topMenuBarOption();