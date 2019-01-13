const locators = require('../../utilities/locators');

const pageHomeScreen = function () {

    const addNewPage = locators.findByCss('[ng-click="vm.addNewTrigger = true"]');

    this.clickAddNewPage = () => {
        addNewPage.click();
    };

};

module.exports =  new pageHomeScreen();