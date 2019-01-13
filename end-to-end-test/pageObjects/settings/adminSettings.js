const locators = require('../../utilities/locators');

const adminSettings = function () {

    const mpopSettings = locators.findByPartialLinkText("Settings");
    const adminSettingsButton = locators.findByPartialLinkText("Admin");
    const adminPageEditButton = locators.findById("btn_edit");
    const selectCategory1 = locators.findByClassName("parent_category_12");
    const selectCategory2 = locators.findByClassName("parent_category_10");
    const selectCategory3 = locators.findByClassName("parent_category_7");
    const selectCategory4 = locators.findByClassName("parent_category_2");
    const selectCategory5 = locators.findByClassName("parent_category_3");
    const selectCategory6 = locators.findByClassName("parent_category_5");
    const selectCategory7 = locators.findByClassName("parent_category_14");
    const selectCategory8 = locators.findByClassName("parent_category_15");
    const electricalServices = locators.findByClassName("parent_category_90");
    const unCheckElectricalServicesChild5 = locators.findByXpath("//*[@id='frmUpdate']//*[@value='56']");
    const updateAdminSettings = locators.findById("btn_update");


    const until = protractor.ExpectedConditions;

    //wait for settings to appear
    this.waitForSettingsToApper = () =>{
        let isSettingClickable = until.elementToBeClickable(mpopSettings);
        return isSettingClickable;
    };
    //wait for admin setting to appear
    this.waitForAdminSetting = () =>{
        let isAdminSettingClickable = until.elementToBeClickable(adminSettingsButton);
        return isAdminSettingClickable;
    };
    //click admin settings
    this.clickAdminSettings = () => {
        adminSettingsButton.click();
    };
    //click on edit in settings page
    this.clickEditSettings = () =>{
        adminPageEditButton.click();
    };
    //wait for automotive categories to appear
    this.waitForAutomotiveCategoriesToAppear =() => {
        let isCategoriesClickable = until.elementToBeClickable(selectCategory8);
        return isCategoriesClickable;
    };
    //select the categories
    this.selectAutomotiveCategories = () => {
        selectCategory1.click();
        selectCategory2.click();
        selectCategory3.click();
        selectCategory4.click();
        selectCategory5.click();
        selectCategory6.click();
        selectCategory7.click();
        selectCategory8.click();
    };
    //click on update settings
    this.clickUpdateAdminSettings = () => {
        updateAdminSettings.click();
    };
    //wait for hvac categories
    this.waitForHvacCategoriesToAppear =() => {
        let isCategoriesClickable = until.elementToBeClickable(electricalServices);
        return isCategoriesClickable;
    };
    //select the categories
    this.selectHVacCategories = () => {
        electricalServices.click();
        unCheckElectricalServicesChild5.click();
    };
    //click on update settings
    this.clickUpdateAdminSettings = () => {
        browser.executeScript('window.scrollTo(document.body.scrollHeight,0);').then(() => {
            updateAdminSettings.click();
        });
    };
};

module.exports = new adminSettings();