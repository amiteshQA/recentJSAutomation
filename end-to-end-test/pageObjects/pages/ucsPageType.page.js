const locators = require('../../utilities/locators');

const ucsPageType = function () {

    const ucsPageType = locators.findById("selectFilter");
    const ucsPageTypeOption  = locators.findByXpath("//*[@id='selectFilter']/*[text()='UCS']");
    const ucsPageTitle = locators.findById("selectPageTitle");
    const ucsYear = locators.findById("selectUcsYear");
    const ucsYearOption = locators.findByXpath("//*[@id='selectUcsYear']/*[contains(text(),'2017')]");
    const ucsMake = locators.findById("selectMake");
    const ucsMakeOption = locators.findByXpath("//*[@id='selectMake']/*[contains(text(),'BMW')]");
    const ucsSeries = locators.findById("selectSeries");
    const ucsSeriesOption = locators.findByXpath("//*[@id='selectSeries']/*[contains(text(),'3 Series')]");
    const ucsModel = locators.findById("selectModel");
    const ucsModelOption = locators.findByXpath("//*[@id='selectModel']/*[contains(text(),'All Models')]");
    const ucsSave = locators.findByCss('[ng-click="vm.saveNewPage()"]');

    this.ucsSelectPageType = () => {
        ucsPageType.click();
        ucsPageTypeOption.click();
    };

    this.ucsGivePageTitle = (title) => {
        ucsPageTitle.sendKeys(title);
    };

    this.ucsSelectYear = () => {
        ucsYear.click();
        ucsYearOption.click();
    };

    this.ucsSelectMake = () => {
        ucsMake.click();
        ucsMakeOption.click()
    };

    this.ucsSelectSeries = () => {
        ucsSeries.click();
        ucsSeriesOption.click();
    };

    this.ucsSelectModel = () => {
        ucsModel.click();
        ucsModelOption.click();
    };

    this.ucsClickSave = () => {
        ucsSave.click();
    };
};

module.exports = new ucsPageType();

