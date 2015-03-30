exports.config = {
    framework: "jasmine2",
    onPrepare: function() {
        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            filePrefix: 'xmloutput',
            savePath: 'testresults'
        }));
    },

    specs: ['tests/spec.js'],

//    seleniumAddress: 'http://localhost:4444/wd/hub',

    sauceUser: process.env.SAUCE_USERNAME,
    sauceKey: process.env.SAUCE_ACCESS_KEY,
//    directConnect: true,

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    }
};