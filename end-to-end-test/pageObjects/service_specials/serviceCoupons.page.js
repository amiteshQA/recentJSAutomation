const locators = require('../../utilities/locators');
const teatBaseFunction = require('../../utilities/testBase');

const serviceCoupons = function () {

    const serviceMpopMenu = locators.findByClassName("dropdown-toggle current");
    const serviceSpecials = locators.findByPartialLinkText("Service Specials");
    const serviceAddNewCoupon = locators.findByClassName("add-new-popup-trigger dt-primary-gradient-button");
    const category = locators.findAllByModel("list.newCoupon.service_category_id");
    const closePopup = locators.findByClassName("close-new-trigger");
    const title = locators.findByModel("list.newCoupon.title");
    const originalPrice = locators.findByModel("list.newCoupon.price");
    const savingsPrince = locators.findByModel("list.newCoupon.savings");
    const salePrice = locators.findByModel("list.newCoupon.sale_price");
    const expirationDate = locators.findByModel("list.newCoupon.end_date");
    const datePicker = locators.findByClassName("ui-state-default ui-state-highlight")
    const couponSave = locators.findByXpath("//*[@id='container']/div[2]//div[7]/div/div[2]/button");
    const activeCouponsOption = locators.findByXpath(".//*[@id='container']//*[contains(text(),'Active Coupons')]");
    const searchField = locators.findByModel("list.couponSearch");
    const deleteButton = locators.findByClassName("delete-button");
    const activeStatusConfirmation = locators.findByXpath(".//*[@class='ng-scope']//*[text()='Active']");
    const featuredOfferLocation = locators.findByClassName("featured-offer-notification ng-scope");
    const hvacCategoryOption = locators.findByXpath("//*[@class='ng-binding ng-scope'][contains(text(),'Electrical Installation')]");


    const until = protractor.ExpectedConditions;

    //wait for MPOP to appear
    this.ascWaitForMpopMenuToAppear = () => {
        let isMpopMenuClickable = until.elementToBeClickable(serviceMpopMenu);
        return isMpopMenuClickable;
    };

    this.ascClickMpopMenu = () => {
        serviceMpopMenu.click();
    };
    //wait for Service Menu to appear
    this.ascWaitForServiceSpecialToAppear = () => {
        let isServiceSpecialClickable = until.elementToBeClickable(serviceSpecials);
        return isServiceSpecialClickable;
    };

    this.ascClickServiceSpecials = () => {
        serviceSpecials.click();
    };

    this.verifyAddNewCouponButtonText = () => {
        return serviceAddNewCoupon.getText();
    };

    this.clickAddNewCoupon = () => {
        serviceAddNewCoupon.click();
    };

    this.clickCategory = () => {
        category.click();
    };

    this.getListOfCategory = () => {
        return category;
    };
    this.closeServiceSpecialPopup = () => {
        closePopup.click();
    };

    this.giveCouponTitle = (couponName) => {
        title.sendKeys(couponName);
    };

    this.giveOriginalPrice = (OriginalPrice) => {
        originalPrice.sendKeys(OriginalPrice);
    };

    this.giveSavingsPrince = (SavingsPrince) => {
        savingsPrince.sendKeys(SavingsPrince);
    };

    this.giveSalePrice = (SalePrice) => {
        salePrice.clear();
        salePrice.sendKeys(SalePrice);
    };

    this.selectHvacServiceCategory = () => {
        hvacCategoryOption.click();
    };

    this.clickExpirationDate = () => {
        expirationDate.click();
    };

    this.verifyDatePicker = () => {
        return datePicker;
    };

    this.selectCurrentDate = () => {
        datePicker.click();
    };

    this.clickSave = () => {
        couponSave.click();
    };

    this.verifyActiveCouponOption = () => {
        return activeCouponsOption.getText();
    };

    this.serviceSearchServiceCouponTitle = (couponTitle) => {
        //teatBaseFunction.purgeAndVerifyServiceSpecial(couponTitle, searchField, deleteButton, activeStatusConfirmation, featuredOfferLocation,"automotive service special")
        searchField.sendKeys(couponTitle);
        expect(featuredOfferLocation.isPresent).toBeTruthy();
        expect(activeStatusConfirmation.isPresent).toBeTruthy();
        expect(deleteButton.isPresent()).toBeTruthy();
        deleteButton.click();
        browser.logger.info(couponTitle+" : special deleted");
        let handleAlert = browser.switchTo().alert();
        handleAlert.accept();
        searchField.clear();
        expect(searchField.getText()).toBe('');
    };
};

module.exports = new serviceCoupons();