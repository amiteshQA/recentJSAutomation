const locators = require('../../utilities/locators');

const editCoupons = function () {

    const activeCheckBox = locators.findByModel("editor.coupon.active");
    const featuredOffer = locators.findByModel("editor.coupon.featured_special");
    const saveAndExit = locators.findByPartialLinkText("Save and Exit");

    this.verifySaveAndExitOption = () => {
        return saveAndExit.getText();
    };

    this.clickServiceStatusCheckBox = () => {
        activeCheckBox.click();
    };

    this.enableFeaturedOffer = () => {
        featuredOffer.click();
        let featuredAlert = browser.switchTo().alert();
        featuredAlert.accept();
    };

    this.clickSaveAndExit = () => {
        saveAndExit.click();
    };

};

module.exports = new editCoupons();