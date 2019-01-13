const locators = require('../../utilities/locators');

const serviceSpecialsList = function () {

    const titleOfActiveServiceSpecials = locators.findAllByXpath("//*[@ng-model='list.coupons.activeCoupons']//*[@class='dt-coupon-title ng-binding']");
    const searchSpecialField = locators.findByModel("list.couponSearch");

    this.getTitlesOfActiveServiceSpecials = () => {
        return titleOfActiveServiceSpecials.getText();
    };

    this.nameOfSpecialToSearch = (specialName) => {
        searchSpecialField.sendKeys(specialName);
    };

};

module.exports = new serviceSpecialsList();