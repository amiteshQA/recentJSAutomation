const locators = require('../../utilities/locators');
const testBaseFunction = require('../../utilities/testBase');

const ncsPageType = function () {

    const ncsPagesType = locators.findById("selectFilter");
    const ncsOption = locators.findByXpath("//*[@id='selectFilter']/*[text()='NCS']");
    const ncsPageTitle = locators.findById("selectPageTitle");
    const ncsYear = locators.findById("selectNcsYear");
    const ncsSelectYear = locators.findByXpath("//*[@id='selectNcsYear']/*[contains(text(),'2018')]");
    const ncsMake = locators.findById("selectMake");
    const ncsMakeOption = locators.findByXpath("//*[@id='selectMake']//*[text()='BMW']");
    const ncsSeries = locators.findById("selectSeries");
    const ncsSeriesOption = locators.findByXpath("//*[@id='selectSeries']//*[text()='3 Series']");
    const ncsModel = locators.findById("selectModel");
    const ncsModelOption = locators.findByXpath("//*[@id='selectModel']/*[text()='All Models']");
    const ncsSave = locators.findByCss('[ng-click="vm.saveNewPage()"]');

    this.ncsSelectPageType = () => {
        ncsPagesType.click();
        ncsOption.click();
    };

    this.ncsGivePageTitle = (title) => {
        ncsPageTitle.sendKeys(title);
    };

    this.ncsSelectYear = () => {
        ncsYear.click();
        ncsSelectYear.click();
    };

    this.ncsSelectMake = () => {
        ncsMake.click();
        ncsMakeOption.click();
    };

    this.ncsSelectSeries = () => {
        ncsSeries.click();
        ncsSeriesOption.click();
    };

    this.ncsSelectModel = () => {
        ncsModel.click();
        ncsModelOption.click();
    };

    this.ncsClickSave = () => {
        ncsSave.click();
    };
};

module.exports = new ncsPageType();