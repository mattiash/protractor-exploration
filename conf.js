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
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['tests/spec.js']
}