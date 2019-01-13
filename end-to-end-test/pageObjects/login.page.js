const locators = require('../utilities/locators');

const loginPage = function () {

    //Locating element in the DOM
    const userNameField = locators.findById('txt_username');
    const passwordField = locators.findById('txt_password');
    const loginButton = locators.findById('btn_login');
    const verificationCode = locators.findById('tfa_code');
    const trustWithDevice = locators.findById('trust_this_device');
    const signIn = locators.findById('btn_confirm_user');

    this.giveUsername = (username) => {
        userNameField.sendKeys(username)
    };

    this.givePassword = (password) => {
        passwordField.sendKeys(password)
    };

    this.clickLoginButton = () => {
        loginButton.click()
    };

    this.give_verification_code = (tf_code) => {
        verificationCode.sendKeys(tf_code)
    };

    this.clickTrustDevice = () => {
        trustWithDevice.click();
    };

    this.clickSignIn = () => {
        signIn.click();
    };

    this.verifyPageTitle = () => {
        return browser.getTitle();
    }
};

module.exports = new loginPage();

