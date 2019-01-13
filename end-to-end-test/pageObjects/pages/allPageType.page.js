const locators = require('../../utilities/locators');
const testBaseFunction = require('../../utilities/testBase');

const allPageType = function () {

    const pagesType = locators.findById("selectFilter");
    const pageTitle = locators.findById("selectPageTitle");
    const make = locators.findById("selectMake");
    const makeOption = locators.findByXpath("//*[@id='selectMake']//*[text()='BMW']");
    const series = locators.findById("selectSeries");
    const seriesOption = locators.findByXpath("//*[@id='selectSeries']//*[text()='3 Series']");
    const save = locators.findByCss('[ng-click="vm.saveNewPage()"]');


    this.clickPagesType = () => {
        pagesType.click();
    };

    this.givePageTitle = (title) => {
        pageTitle.sendKeys(title);
    };

    this.selectMake = () => {
        make.click();
        makeOption.click()
    };

    this.selectSeries = () => {
        series.click();
        seriesOption.click();
    };

    this.clickSave = () => {
        save.click();
    };
};
module.exports = new allPageType();