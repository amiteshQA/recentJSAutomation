const topBarMenuOption = require('../../pageObjects/topMenuBarOptions');
const viewAccountInfo = require('../../pageObjects/viewAccountInfo.page');
const adminSettings = require('../../pageObjects/settings/adminSettings');
const serviceCoupons = require('../../pageObjects/service_specials/serviceCoupons.page');

describe('Should compare the automotive category with master settings: ', () => {

    beforeAll(() =>{
        browser.logger.info("******************** Comparision of Service automotive category list *********************");
    });

    it('should enable the automotive category in settings', () => {
        topBarMenuOption.clickAccount();
        topBarMenuOption.clickAccountInfo();
        viewAccountInfo.clickEditAccount();
        viewAccountInfo.clickIndustry();
        viewAccountInfo.choseAutomotiveIndustryType();
        viewAccountInfo.clickUpdateAccount();
        topBarMenuOption.clickMpopMenu();
        browser.wait(adminSettings.waitForSettingsToApper(), 2000);
        topBarMenuOption.clickSettings();
        browser.wait(adminSettings.waitForAdminSetting(), 2000);
        adminSettings.clickAdminSettings();
        adminSettings.clickEditSettings();
        browser.wait(adminSettings.waitForAutomotiveCategoriesToAppear(),2000);
        adminSettings.selectAutomotiveCategories();
        adminSettings.clickUpdateAdminSettings();
    });

    it('should match with master', () => {
        browser.wait(topBarMenuOption.waitForMpopMenuToAppear(),2000);
        topBarMenuOption.clickMpopMenu();
        browser.wait(topBarMenuOption.waitForServiceSpecialToAppear(),2000)
        topBarMenuOption.clickServiceSpecials();
        expect(serviceCoupons.verifyAddNewCouponButtonText()).toContain("Add new coupon");
        serviceCoupons.clickAddNewCoupon();
        serviceCoupons.clickCategory();
        serviceCoupons.getListOfCategory().each((element, index) => {
            element.getText().then((text) => {
                browser.logger.info("List of automotive services: ", index + "\n" + text);
                expect(text).toContain("Battery");
                expect(text).not.toContain("AC Services");
            });
        });
        serviceCoupons.closeServiceSpecialPopup();
    });
});