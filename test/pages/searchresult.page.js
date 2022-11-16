const {Builder, By, Key, Select, until} = require ("selenium-webdriver") ;
var BasePage = require ('./base.page');

const searchCategory = {id: "gh-cat"} ;


const searchValue = {id: "gh-ac"} ;

class SearchResultPage extends BasePage{
     
    constructor(driver) {
        super(driver) ;
    }

async get_search_category(){

        let x = await this.driver.wait(until.elementLocated(searchCategory))
        .then(el => new Select(el).getOptions())
        .then(x => x[0].getText())
        
        console.log("x ="+x) ;
        return x ;
    }

    async getPageTitle(){

        await this.driver.wait(until.elementLocated(searchCategory))
        return await this.driver.getTitle() ;
 
    }

    get_search_value()
    {
      return this.find(searchValue).getAttribute("value") ;
     // let val2 = val.getAttribute("value") ;
     // return val2 ;
    }
}

module.exports =  SearchResultPage;