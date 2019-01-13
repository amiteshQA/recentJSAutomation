const dataSource = require('../../resources/testDataSource');
const topBarMenuOption = require('../../pageObjects/topMenuBarOptions');
const editCoupons = require('../../pageObjects/service_specials/editCoupons.apge');
const serviceCoupons = require('../../pageObjects/service_specials/serviceCoupons.page');

describe('should add service coupon', () => {

    beforeAll(() =>{
        browser.logger.info("******************** Service Specials cases *********************");
    });

    it('add oil change service coupon for automotive', () => {
        browser.wait(topBarMenuOption.waitForMpopMenuToAppear(), 2000);
        topBarMenuOption.clickMpopMenu();
        browser.wait(topBarMenuOption.waitForServiceSpecialToAppear(),2000);
        topBarMenuOption.clickServiceSpecials();
        expect(serviceCoupons.verifyAddNewCouponButtonText()).toContain("Add new coupon");
        serviceCoupons.clickAddNewCoupon();
        serviceCoupons.giveCouponTitle(dataSource.serviceSpecialsData.serviceCouponName);
        serviceCoupons.giveOriginalPrice(dataSource.serviceSpecialsData.serviceCouponOriginalPrice);
        serviceCoupons.giveSavingsPrince(dataSource.serviceSpecialsData.serviceCouponSavingsPrice);
        serviceCoupons.giveSalePrice(dataSource.serviceSpecialsData.serviceCouponSalePrice);
        serviceCoupons.clickExpirationDate();
        expect(serviceCoupons.verifyDatePicker().isPresent()).toBeTruthy();
        serviceCoupons.selectCurrentDate();
        serviceCoupons.clickSave();
        expect(editCoupons.verifySaveAndExitOption()).toContain("Save and Exit")
        editCoupons.clickServiceStatusCheckBox();
        editCoupons.enableFeaturedOffer();
        editCoupons.clickSaveAndExit();
        expect(serviceCoupons.verifyActiveCouponOption()).toContain("Active Coupons");
        serviceCoupons.serviceSearchServiceCouponTitle(dataSource.serviceSpecialsData.serviceCouponTitle);
    });
});