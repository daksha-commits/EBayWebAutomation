
class BasePage{
    constructor(driver){
        this.driver = driver;
    }

    async visit(theURL){
        await this.driver.get(theURL);
    }

    sleep(seconds){
        var e = new Date().getTime() + (seconds * 1000);
        while (new Date().getTime() <= e) {}
    }

    find(locator) {
        return this.driver.findElement(locator) ;
    }

    async click(locator) {
        await this.find(locator).click() ;
    }

    async type(locator, inputText) {
        await this.find(locator).sendKeys(inputText) ;
    }

    async isDisplayed(locator) {
        return await this.find(locator).isDisplayed() ;
    }

    async waitFor(locator) {
        await this.driver.wait(until.elementLocated(locator)) ;
    }

    async closeBrowser(){
        await this.driver.quit() ;
    }
}

module.exports = BasePage;