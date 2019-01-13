const hvacDataSource = require('../../resources/testDataSource');
const topBarMenuOption = require('../../pageObjects/topMenuBarOptions');
const editCoupons = require('../../pageObjects/service_specials/editCoupons.apge');
const serviceCoupons = require('../../pageObjects/service_specials/serviceCoupons.page');

describe('should add HVAC service coupon', () => {

    beforeAll(() =>{
        browser.logger.info("******************** Service Specials cases *********************");
    });

    it('add Electrical Installation service coupon for HVAC', function () {
        browser.wait(topBarMenuOption.waitForMpopMenuToAppear(), 2000);
        topBarMenuOption.clickMpopMenu();
        browser.wait(topBarMenuOption.waitForServiceSpecialToAppear(),2000);
        topBarMenuOption.clickServiceSpecials();
        expect(serviceCoupons.verifyAddNewCouponButtonText()).toContain("Add new coupon");
        serviceCoupons.clickAddNewCoupon();
        serviceCoupons.giveCouponTitle(hvacDataSource.hvacServiceSpecialsData.serviceCouponName);
        serviceCoupons.clickCategory();
        serviceCoupons.selectHvacServiceCategory();
        serviceCoupons.giveOriginalPrice(hvacDataSource.hvacServiceSpecialsData.serviceCouponOriginalPrice);
        serviceCoupons.giveSavingsPrince(hvacDataSource.hvacServiceSpecialsData.serviceCouponSavingsPrice);
        serviceCoupons.giveSalePrice(hvacDataSource.hvacServiceSpecialsData.serviceCouponSalePrice);
        serviceCoupons.clickExpirationDate();
        expect(serviceCoupons.verifyDatePicker().isPresent()).toBeTruthy();
        serviceCoupons.selectCurrentDate();
        serviceCoupons.clickSave();
        expect(editCoupons.verifySaveAndExitOption()).toContain("Save and Exit")
        editCoupons.clickServiceStatusCheckBox();
        editCoupons.enableFeaturedOffer();
        editCoupons.clickSaveAndExit();
        expect(serviceCoupons.verifyActiveCouponOption()).toContain("Active Coupons");
        serviceCoupons.serviceSearchServiceCouponTitle(hvacDataSource.hvacServiceSpecialsData.serviceCouponTitle);
    });
});