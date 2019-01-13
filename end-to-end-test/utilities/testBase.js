//const loginPageObject = require('../page_objects/login.page');
const loginPage = require('../pageObjects/login.page');
const dashboardPage = require('../pageObjects/dashboard.page');
const dataSource = require('../resources/testDataSource');
const newSpecialsListPage = require('../pageObjects/specialsList.page');
const environment = dataSource.url.qaAdmin;

const TestBase = function () {

    /**
     * This function is for deleting the cookies and navigating to the given url
     * @param url
     */
    this.openBrowser = (url) => {
        //browser.ignoreSynchronization = true;
        browser.manage().deleteAllCookies();
        browser.get(url);
    };

    /**
     * This function is for fetching the console error in the application(it's not
     * being used any where for now)
     */
    this.consoleErrorFetcher = () => {
        //To trace the console error of site.
        browser.manage().logs().get('browser').then((browserLog) => {
            console.error('Console Error: ' + JSON.stringify(browserLog));
        });
        //activity wait's for all the elements to load.
        browser.waitForAngular();
    };
    /**
     * This function reads the last email present in the inbox(which specific email to read is
     * defined in protractor.mail.conf file)
     * @returns {promise.Promise<any>}
     */
    this.getLastEmail = () => {
        let deferred = protractor.promise.defer();
        console.log("Waiting for an email...");

        mailListener.on("mail", (mail) => {
            deferred.fulfill(mail);
        });
        return deferred.promise;
    };
    /**
     *login function including TFA(Two factor auth)
     */
    this.login = () => {
        this.openBrowser(environment);
        browser.logger.info("Lower environment used for test: ", environment);
        loginPage.giveUsername(dataSource.logIn.userName);
        loginPage.givePassword(dataSource.logIn.userPassword);
        loginPage.clickLoginButton();
        browser.controlFlow().wait(this.getLastEmail()).then((email) => {
            expect(email['subject']).toContain("Enter this code to login");
            let emailContent = email.html;
            let splitTFA = emailContent.split("Please enter the code below to login:")[1];
            let TFA = splitTFA.replace(/<\/?[^>]+(>|$)/g, "");
            browser.logger.info("TFA used :", TFA.trim());
            loginPage.give_verification_code(TFA.trim());
            loginPage.clickTrustDevice();
            loginPage.clickSignIn();
            expect(loginPage.verifyPageTitle()).toBe("Dashboard");
            dashboardPage.giveAccountName(dataSource.lowerAccounts.qaAdminAccountName);
            dashboardPage.clickAccount();
            expect(newSpecialsListPage.verifyNavBarText()).toContain("View Inventory");
        });
    };
};
module.exports = new TestBase();