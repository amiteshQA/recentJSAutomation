const locators = require('../../utilities/locators');

const VLPPageType = function () {

    const vlpPagesType = locators.findById("selectFilter");
    const vlpPageTitle = locators.findById("selectPageTitle");
    const vlpYear = locators.findByXpath("//*[@id='selectUcsYear']");
    const vlpSelectYear = locators.findByXpath("//*[@id='selectUcsYear']/*[contains(text(),'2017')]");
    const vlpMake = locators.findById("selectMake");
    const vlpMakeOption = locators.findByXpath("//*[@id='selectMake']//*[text()='BMW']");
    const vlpModel = locators.findById("selectModel");
    const vlpModelOption = locators.findByXpath("//*[@id='selectModel']/*[text()='All Models']");
    const vlpSave = locators.findByCss('[ng-click="vm.saveNewPage()"]');


    this.vlpClickPagesType = () => {
        vlpPagesType.click();
    };

    this.vlpGivePageTitle = (title) => {
        vlpPageTitle.sendKeys(title);
    };

    this.vlpSelectYear = () => {
        vlpYear.click();
        vlpSelectYear.click();
    };

    this.vlpSelectMake = () => {
        vlpMake.click();
        vlpMakeOption.click()
    };

    this.vlpSelectModel = () => {
        vlpModel.click();
        vlpModelOption.click();
    };

    this.vlpClickSave = () => {
        vlpSave.click();
    };
};
module.exports = new VLPPageType();