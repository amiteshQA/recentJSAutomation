let HtmlReporter = require('protractor-beautiful-reporter');
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const log4js = require('log4js');
const scriptsLocation = "../end-to-end-test/scripts/";

// Connecting directing to the conf file
exports.config = {
    directConnect: true,
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    // Framework to use. Jasmine is recommended.
    framework: 'jasmine2',
    // Spec patterns are relative to the current working directory when protractor is called.

    //specs: [scriptsLocation+'oemSync/newSpecialOemSync.script.js'],

    /**
     * New Specials
     */
    //specs: [scriptsLocation+'new-specials/newSpecials.script.js', scriptsLocation+'new-specials/newLoanerSpecials.script.js'],
    //specs: [scriptsLocation + 'preOwned-used-special/preOwnedUsedSpecial.script.js'],

    /**
     * Pages
     */
    //specs: [scriptsLocation+'pages/allPagesType.script.js'],

    /**
     * Used Specials
     */
    // specs: [scriptsLocation+'used-specials/usedSpecials.script.js',scriptsLocation+
    // 'used-specials/certifiedPreOwnedUsedSpecial.script.js',scriptsLocation+
    // 'used-specials/preOwnedUsedSpecial.script.js'],

    /**
     * Service Specials
     */
     // specs:[scriptsLocation+ 'service_specials/comparingHVACServiceCategory.script.js',
     // scriptsLocation+ 'service_specials/hvacServiceSpecialCoupon.js',
     // scriptsLocation+ 'service_specials/comparingAutomotiveServiceCategory.script.js',
     // scriptsLocation+ 'service_specials/automotiveServiceSpecialCoupon.script.js'],

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        showColors: true,
        stopSpecOnExpectationFailure: true,
        defaultTimeoutInterval: 120000,
        includeStackTrace: true,
        allScriptsTimeout: 20000,
        isVerbose: true
    },

    beforeLaunch: function () {
        /**
         * configuration for logger
         */
        log4js.configure({
            appenders: {
                out: {
                    type: 'file', filename: './end-to-end-test/executionLog/executionLogs.log', layout: {
                        type: 'pattern',
                        pattern: '%d{MM/dd/yyyy-hh:mm} %p %c  %m'
                    }
                }
            },
            categories: {default: {appenders: ['out'], level: 'trace'}}
        });
    },

    // on initial environment is set where reports are added.
    onPrepare: function () {
        browser.driver.fullscreen();
        //browser.driver.manage().window().setSize(1600, 800);

        //initialize the logger configuration
        browser.logger = log4js.getLogger('protractorLogger');

        browser.logger.info("********************** New Session **********************");

        //printing the OS and browser in logs
        browser.driver.getCapabilities().then((capabilities) => {
            let nameOfBrowser = browser.browserName = capabilities.get('browserName');
            browser.logger.info("############Browser name: " + nameOfBrowser + " ################");
            let nameOfOs = browser.platform = capabilities.get('platform');
            browser.logger.info("############OS name: " + nameOfOs + " ##################");
        });

        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'results/report'
        }).getJasmine2Reporter());

        let path = require('path');
        new HtmlReporter({
            baseDirectory: 'results/report'
            , preserveDirectory: false
            , cssOverrideFile: 'css/style.css'
            , takeScreenShotsForSkippedSpecs: false
            , jsonsSubfolder: 'jsons'
            , takeScreenShotsOnlyForFailedSpecs: true
            , gatherBrowserLogs: true
            , columnSettings: {
                displayTime: true,
                displayBrowser: true,
                displaySessionId: true,
                inlineScreenshots: false
            }
            , pathBuilder: function pathBuilder(spec, descriptions, results, capabilities) {
                // Return '<browser>/<specname>' as path for screenshots:
                // Example: 'firefox/list-should work'.
                return path.join(capabilities.caps_.browser, descriptions.join('-'));
            }
            , metaDataBuilder: function metaDataBuilder(spec, descriptions, results, capabilities) {
                // Return the description of the spec and if it has passed or not:
                return {
                    description: descriptions.join(' ')
                    , passed: results.passed()
                };
            }
        });
        //this configuration for console report
        jasmine.getEnv().addReporter(new SpecReporter({
            displayFailuresSummary: true,
            displayFailuredSpec: true,
            displaySuiteNumber: true,
            displaySpecDuration: true
        }));

        let MailListener = require("mail-listener2");

        let mailListener = new MailListener({
            username: "email or userName",
            password: "password",
            host: "imap.gmail.com", // e.g. imap.gmail.com
            port: 993,
            tls: true,
            fetchUnreadOnStart: true,
            tlsOptions: {rejectUnauthorized: false},
            mailbox: "INBOX", // mailbox to monitor
            searchFilter: ["UNSEEN", "UNFLAGGED"], // the search filter being used after an IDLE notification has been retrieved
            markSeen: true,
            mailParserOptions: {streamAttachments: true}, // options to be passed to mailParser lib.
            attachments: true, // download attachments as they are encountered to the project directory
            attachmentOptions: {directory: "attachments/"}
        });

        mailListener.on("server:connected", function () {
            console.log("imapConnected");
        });
        mailListener.on("server:disconnected", function () {
            console.log("imapDisconnected");
        });
        mailListener.on("error", function (err) {
            console.log(err);
        });

        var count = 0;
        mailListener.on("mail", function (mail, seqno, attributes) {
            let mailuid = attributes.uid;
            let toMailbox = '[Gmail]/All Mail';
            let i = ++count;
            if (i > 2) {
                mailListener.stop(); // start listening
                return;
            }
            console.log('attempting to mark msg read/seen');
            mailListener.imap.addFlags(mailuid, '\\Seen', function (err) {
                if (err) {
                    console.log('error marking message read/SEEN');
                    return;
                }
                console.log('moving ' + (seqno || '?') + ' to ' + toMailbox);
                mailListener.imap.move(mailuid, toMailbox, function (err) {
                    if (err) {
                        console.log('error moving message');
                        return;
                    }
                    console.log('moved ' + (seqno || '?'), mail.subject);
                });
            });
        });

        mailListener.start(); // start listening
        setTimeout(function () {
            mailListener.stop(); // start listening
        }, 60 * 1000);

        global.mailListener = mailListener;

    },

    params: {
        getLastEmail: function () {
            const deferred = protractor.promise.defer();
            console.log("Waiting for email...");

            let count = 0;
            mailListener.on("mail", function (mail, seqno, attributes) {
                let mailuid = attributes.uid;
                let toMailbox = '[Gmail]/All Mail';
                let i = ++count;
                if (i > 2) {
                    mailListener.stop(); // start listening
                    return;
                }
                testContent = {
                    i: i,
                    subject: mail.subject,
                    seqno: seqno,
                    uid: attributes.uid,
                    attributes: attributes,
                    text: mail.html
                };
                deferred.fulfill(mail);
            });
            return deferred.promise;
        }
    },

    onComplete: (function (passed) {
        if (passed) {
            console.log('All specs have passed');
            browser.logger.info("############# All specs have passed ##############");
        } else {
            console.log('At least one spec has failed');
            browser.logger.info("############ At least one spec has failed #############");
        }
        browser.logger.info("********************** Session ends **********************");
    }),

};

