const locators = require('../../utilities/locators');
const internalScriptData = require('../../resources/internalDataForScripts');
let serviceCategory = internalScriptData.pagesInternalScript.pagesServiceCategory;

const slpPageType = function () {

    const slpPageType = locators.findById("selectFilter");
    const slpPageTypeOption  = locators.findByXpath("//*[@id='selectFilter']/*[text()='SLP']");
    const slpPageTitle = locators.findById("selectPageTitle");
    const slpServiceCategory = locators.findById("selectServiceCategory");
    const slpServiceCategoryOption = locators.findByXpath("//*[@id='selectServiceCategory']/*[text()="+serviceCategory+"]");
    const slpSave = locators.findByCss('[ng-click="vm.saveNewPage()"]');


    this.slpSelectPageType = () => {
        slpPageType.click();
        slpPageTypeOption.click();
    };

    this.slpGivePageTitle = (title) => {
        slpPageTitle.sendKeys(title);
    };

    this.slpSelectServiceCategory = () => {
        slpServiceCategory.click();
        slpServiceCategoryOption.click();
    };

    this.slpClickSave = () => {
        slpSave.click();
    };


};

module.exports = new slpPageType();