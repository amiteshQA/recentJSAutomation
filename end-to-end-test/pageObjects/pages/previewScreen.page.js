const locators = require('../../utilities/locators');
const commonFunctions = require('../../utilities/commonFunctionality');

const previewScreen = function () {

    const slpPreviewPageServiceSpecialsList = locators.findAllByClassName("dt-coupon-title");
    const previewPageSpecialsList = locators.findAllByClassName("title-make");
    const previewPagePrintCoupon = locators.findByPartialLinkText("Print Coupon");
    const previewPageGetSpecial = locators.findByXpath("//*[contains(text(),'Get Special')]");

    this.switchToPreviewWindowForSpecials = () => {
        commonFunctions.switchToPreviewWindow(previewPageGetSpecial);
    };

    this.switchToPreviewWindowForServiceSpecials = () => {
        commonFunctions.switchToPreviewWindow(previewPagePrintCoupon);
    };

    this.verifyActiveServiceSpecials = ()=> {
            return slpPreviewPageServiceSpecialsList.getText().then((visibleSpecials) => {
                return visibleSpecials;
            });
    };

    this.verifyActiveSpecials = () => {
        return commonFunctions.verifyActiveSpecials(previewPageSpecialsList);
    };
};

module.exports = new previewScreen();