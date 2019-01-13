/**
 * importing locators function from utilities
 * @type {locators}
 */
const locators = require('../../utilities/locators');
const internalScriptDataSource = require('../../resources/internalDataForScripts');
let filterType = internalScriptDataSource.ncsInternalScript.filtersType;

//function to add new special from inventory
const viewInventory = function () {

    const bodyStyle = locators.findByXpath("//*[@class='dts-filter-cat-name ng-binding'][contains(text(),'Body Styles')]");
    const searchBar = locators.findByModel("inventory.inventorySearch");
    const deleteSpecial = locators.findByClassName("dt-delete-button");
    const addSpecialCard = locators.findByClassName("list-edit-link inventory-add-button ng-scope");
    const addSpecial = locators.findByClassName("fa fa-plus");
    const editNow = locators.findByPartialLinkText("Edit Now");
    const allEdits = locators.findAllByPartialLinkText("Edit Now");
    const special = locators.findByClassName("list-edit-link inventory-add-button ng-scope");
    const filters = locators.findByXpath("//*[@class='dts-filter-cat-name ng-binding'][contains(text(),"+filterType+")]");
    const option = locators.findByXpath("//*[@id='dts-filters']/div/div[2]/ul/li[2]/input");

    const until = protractor.ExpectedConditions;

    this.verifyBodyStyle = () => {
        return bodyStyle.getText();
    };

    this.giveSpecialDetails = (stockNumber) => {
        searchBar.sendKeys(stockNumber)
    };

    this.addNewSpecial = () => {
        special.isPresent().then((result) =>{
            if(result) {
                addSpecialCard.element(addSpecial.locator()).click();
            }else {
                deleteSpecial.click();
                addSpecialCard.element(addSpecial.locator()).click();
            }
        });
    };
    /**
     * Wait condition for edit button to appear
     * @returns {Function}
     */
    this.waitForEditToAppear = () => {
        const isEditNowVisible = until.presenceOf(editNow);
        return isEditNowVisible;
    };
    /**
     * clicking on edit now after adding the special
     */
    this.clickEditNow = () => {
        editNow.click();
    };

    this.openFilter = () => {
        filters.click();
    };

    this.selectFilterOption = () => {
        option.click();
    };

    this.countFilteredSpecials = () => {
        return allEdits.count();
    };
};

module.exports = new viewInventory();

