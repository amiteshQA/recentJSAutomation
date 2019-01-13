const specialsList = require('../pageObjects/specialsList.page');
const editUsedSpecials = require('../pageObjects/used-specials/editUsedSpecials.page');
const editNewSpecials = require('../pageObjects/new-specials/editNewSpecials.page');

const until = protractor.ExpectedConditions;

let usedSpecialStockNumber = '';
let newSpecialStockNumber = '';

const commonFunctionality = function () {

    this.verifyCreatedUsedSpecial = () => {
        usedSpecialStockNumber = editUsedSpecials.getUsedSpecialStockNumber().then((grabUsedSpecialStockNumber) =>{
            return grabUsedSpecialStockNumber;
        });
        editUsedSpecials.markSpecialAsActive();
        editUsedSpecials.clickBackToSpecials();
        expect(specialsList.verifyActiveSpecials()).toContain("Active Specials");
        usedSpecialStockNumber.then((sendUsedSpecialStockNumber) => {
            specialsList.purgeAndVerifyUsedSpecialWithoutStockNumber(sendUsedSpecialStockNumber);
        });
    };

    this.verifyCreatedNewSpecial = () => {
        newSpecialStockNumber = editNewSpecials.getStockNumber().then((grabNewSpecialStockNumber) => {
            return grabNewSpecialStockNumber
        });
        editNewSpecials.clickBackToOffers();
        expect(specialsList.verifyActiveSpecials()).toContain("Active Specials");
        newSpecialStockNumber.then((sendUsedSpecialStockNumber) => {
            specialsList.purgeAndVerifyNewSpecialWithStockNumber(sendUsedSpecialStockNumber);
        });
    };

    /**
     * It will switch to preview window and will wait for the specials to appear
     * Then scroll down to bottom of the screen.
     */
    this.switchToPreviewWindow = (previewPageSpecial) => {
        browser.getAllWindowHandles().then((handles) => {
            browser.switchTo().window(handles[1]).then(() => {
                browser.wait(until.presenceOf(previewPageSpecial), 30000, 'Specials are taking to long time to appear');
                browser.executeScript('window.scrollTo(0,document.body.scrollHeight);');
            });
        });
    };
    /**
     * Returns the total count of the specials
     */
    this.verifyActiveSpecials = (previewPageSpecialsList) => {
        return previewPageSpecialsList.count().then((visibleSpecials) => {
            console.log("list of active specials: ", visibleSpecials);
            return visibleSpecials;
        });
    };
    /**
     * Close the window and then switch back to main pages window
     * Then finally delete the current page.
     */
    this.switchBackToMainTab = (deleteCurrentPage) => {
        browser.close();
        browser.getAllWindowHandles().then((handles) => {
            browser.switchTo().window(handles[0]).then(() => {
                deleteCurrentPage.click();
                let handleAlert = browser.switchTo().alert();
                handleAlert.accept();
            });
        });
    };
};
module.exports = new commonFunctionality();