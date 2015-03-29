describe('button1', function() {
    it('should work', function() {
        browser.get('http://localhost:63343/protractor-exploration/app/index.html');
        element(by.buttonText("Button 1")).click();

        expect(element(by.id("result1")).getText()).toEqual('Success');
    });
});

describe('button2', function() {
    it('should work', function() {
        browser.get('http://localhost:63343/protractor-exploration/app/index.html');
        element(by.buttonText("Button 2")).click();

        expect(element(by.id("result2")).getText()).toEqual('Success');
    });
});

describe('button3', function() {
    it('should work', function() {
        browser.get('http://localhost:63343/protractor-exploration/app/index.html');
        element(by.buttonText("Button 3")).click();

        expect(element(by.id("result3")).getText()).toEqual('Success');
    });
});

describe('button4', function() {
    it('should work', function() {
        browser.get('http://localhost:63343/protractor-exploration/app/index.html');
        element(by.buttonText("Button 4")).click();
        var EC = protractor.ExpectedConditions;
        var e = element(by.id('result4'));

        browser.wait(EC.visibilityOf(e), 10000);
        expect(element(by.id("result4")).getText()).toEqual('Success');
    });
});