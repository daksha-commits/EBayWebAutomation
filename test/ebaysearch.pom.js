const webdriver = require('selenium-webdriver');
const {Builder, By, Key, Select, until} = require ("selenium-webdriver") ;
//const assert = require ("assert") ;
var should = require ("chai").should() ;

const HomePage = require ('./pages/search.page') ;
const SearchResultPage = require('./pages/searchresult.page') ;


describe('EBay Product Search pom2', function(){
     this.timeout(30000);
     let driver ;
     let homepage ;
     let searchresultpage ;
     const  baseurl = 'https://www.ebay.com/' ;
     before(async function(){
         //Enter actions performed before this scenario test suit
         driver = new webdriver.Builder().forBrowser('chrome').build();
         driver.manage().setTimeouts({implicit: (10000), pageLoad: (10000)});
         homepage = new HomePage(driver) ;
         await homepage.load(baseurl);
     });
 
     after(async function(){
         //Enter actions to be performed after this scenario test suit
         await searchresultpage.closeBrowser() ;
     });

    it("Open the URL and verify the title 'Electronics, Cars, Fashion, Collectibles & More | eBay' ", async function(){
        var title = await homepage.getPageTitle() ;
        console.log("home title "+title) ;
        title.should.equal("Electronics, Cars, Fashion, Collectibles & More | eBay") ;
    }) ;

    it('Search for Laptop and verify the result page title ', async function() {
        await  homepage.enter_search("Laptop") ;

        await homepage.click_search_button() ;

        searchresultpage = new SearchResultPage(driver) ;

        let title =  await searchresultpage.getPageTitle() ;
        console.log("search result title "+title) ;
        title.should.equal('Laptop | eBay');

    });

    it('Verify the search value and category', async () => {

         let val = await searchresultpage.get_search_value() ;
         console.log("search val = "+val) ;
         val.should.equal("Laptop") ;

         let cat = await searchresultpage.get_search_category() ;
         console.log("cat ="+cat) ;
         cat.should.equal("PC Laptops & Netbooks")  ;
     });

}) ;