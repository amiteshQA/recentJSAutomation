const data = function () {
   //This function is for providing data in the script

    this.url = {
        "qaAdmin" : "http://qa-admin.dealerteamwork.com/",
        "localhostBaseUrl" : "http://local-admin.localhost/",
        "testAdmin" : "http://test-admin.dealerteamwork.com/",
        "previewAdmin": "http://preview-admin.dealerteamwork.com/"
    };

    this.logIn = {
        "userName": "userName",
        "userPassword": "password",
    };

    this.usedSpecialsData = {
        "qaUsedSpecialAddFromInventoryStockNumber": "GL377745",
        "previewUsedSpecialAddFromInventoryStockNumber": "P6375A",
        "qaUsedSpecialStockNumber": "313300A",
        "previewUsedSpecialStockNumber": "P6327",
        "testUsedStockNumber":"EFA15297",
        "qaCertifiedPreOwnedStockNumber": "BP1327",
        "qaPreOwnedStockNumber": "BP1327",
        "qaSpecialUsedSpecialModelName": "Espada",
        "testSpecialUsedSpecialModelName": "Suburban",
        "qaACertifiedPreOwnedManuallyModelName": "Suburban",
        "qaPreOwnedManuallyModelName": "Suburban",
    };

    this.newSpecialsData = {
        "qaNewSpecialAddFromInventoryStockNumber": "JBC12544",
        "previewNewSpecialAddFromInventoryStockNumber": "182008",
        "testNewSpecialAddFromInventoryStockNumber": "JBC12544",
        "qaNewSpecialStockNumber": "BK0013",
        "previewNewSpecialStockNumber": "186519",
        "testNewStockNumber": "BJ0448",
        "qaSpecialNewSpecialModelName": "Honda",
        "testSpecialNewSpecialModelName": "Honda",
        "ncsSpecialNameForSearch": "BMW"
    };

    this.serviceSpecialsData = {
        "serviceCouponName":"Automation Coupon",
        "serviceCouponOriginalPrice":"50",
        "serviceCouponSavingsPrice":"10",
        "serviceCouponSalePrice":"40",
        "serviceCouponTitle":"Automation",
        "filterServiceCoupons": "oil Change"
    };

    this.hvacServiceSpecialsData = {
        "serviceCouponName":"HVAC Coupon",
        "serviceCouponOriginalPrice":"50",
        "serviceCouponSavingsPrice":"10",
        "serviceCouponSalePrice":"40",
        "serviceCouponTitle":"HVAC"
    };

    this.pages = {
        "allTypePageTitle": "Automation BMW page",
        "ncsTypePageTitle": "NCS Automation BMW page",
        "vlpTypePageTitle": "VLP Automation BMW page",
        "ucsTypePageTitle": "UCS Automation BMW page",
        "slpTypePageTitle": "SLP Automation BMW page",
    };

    this.lowerAccounts = {
        "qaAdminAccountName": "QA Automation Test",
        "qaAdminPublisherAccount": "Publisher Test",
        "previewAdminDTtest3": "dt test 3",
        "testAdminAccountName" : "QA Automation Test",
    };
};

module.exports = new data();