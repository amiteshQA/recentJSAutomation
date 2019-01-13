const locators = require('../../end-to-end-test/utilities/locators');

const viewAccountInfo = function () {

    const editButton = locators.findById("btn_edit");
    const industryField = locators.findById("industry_id");
    const automotiveIndustryFieldOption = locators.findByXpath("//*[@id='industry_id']/*[contains(text(),'Automotive Dealerships')]");
    const hvacIndustryFieldOption = locators.findByXpath("//*[@id='industry_id']/*[contains(text(),'HVAC')]");
    const updateButton = locators.findById("btn_update");

    //click on Industry option
    this.clickEditAccount = () => {
        editButton.click();
    };
    //change the Industry option
    this.clickIndustry = () => {
        industryField.click();
    };
    //scroll down to bottom
    this.choseAutomotiveIndustryType = () => {
        automotiveIndustryFieldOption.click();
    };
    this.choseHvacIndustryType = () => {
        hvacIndustryFieldOption.click();
    };
    //click on update account
    this.clickUpdateAccount = () => {
        updateButton.click();
    };
};

module.exports = new viewAccountInfo();