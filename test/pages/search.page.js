
const BasePage = require ('./base.page');

const searchField = {css: "input#gh-ac"} ;

const searchButton = {id: "gh-btn"} ;


class HomePage extends BasePage{
     
    constructor(driver) {
        super(driver) ;
    }

    async load(theURL) {
        await this.visit(theURL) ;
        if (!this.isDisplayed(searchField))
        {
            throw new Error('Home Page not loaded') ;
        }
    }

    async getPageTitle(){
        return await this.driver.getTitle() ;
    }

    async enter_search(searchText){
        console.log("search text "+searchText) ;
        console.log("search field "+searchField.css) ;
        //This will enter text into the search field
        await this.type(searchField, searchText);
    }

     click_search_button(){
         this.click(searchButton) ;
    }
 
}

module.exports =  HomePage;