const locators = require('../../utilities/locators');
const commonFunctions = require('../../utilities/commonFunctionality');

const editNewSpecials = function () {

    const addSection = locators.findByCss('[ng-click="vm.showAvailableShortcodes = false; vm.showOemSections = false; vm.showBlankSections = !vm.showBlankSections"]');
    const offersSection = locators.findByXpath(".//*[@id='container']//*[contains(text(),'Offers')]");
    const savePage = locators.findByXpath(".//*[@id='container']//*[@class='updatePageButton dt-primary-gradient-button ng-scope']");
    const preview = locators.findByXpath("//*[@class='dynamic-embed-code edit-page-info-trigger dt-secondary-gradient-button']/*[text()='Preview']");
    const deletePage = locators.findByCss('[ng-click="vm.deletePage(vm.page.id)"]');
    const headerSection = locators.findByXpath("//*[@id='container']//*[contains(text(),'Header')]");
    const ctaBarSection = locators.findByXpath("//*[@id='container']//*[contains(text(),'CTA Bar')]");

    const until = protractor.ExpectedConditions;

    this.clickAddSection = () => {
        addSection.click();
    };

    this.waitForOffersToAppear = () => {
        let isOffersClickable = until.elementToBeClickable(offersSection);
        return isOffersClickable;
    };

    this.selectOffersSection = () => {
        offersSection.click();
    };

    this.selectHeaderSection = () => {
        headerSection.click();
    };

    this.selectCtaBarSection = () => {
        ctaBarSection.click();
    };

    this.clickSavePage = () => {
        savePage.click();
    };

    this.waitForPreviewToAppear = () => {
        let previewIsClickable = until.elementToBeClickable(preview);
        return previewIsClickable;
    };

    this.clickPreview = () => {
        browser.executeScript('window.scrollTo(document.body.scrollHeight,0);').then(() => {
            preview.click();
        });
    };

    this.switchBackToMainTab = () => {
        commonFunctions.switchBackToMainTab(deletePage);
    };
};

module.exports = new editNewSpecials();