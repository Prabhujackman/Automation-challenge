import productPOM  from "../support/productPOM";


describe("IKEA shopping website", function(){


    before(function(){
        cy.visit('https://www.ikea.com/in/en/');
        cy.url().should('contain','ikea.com')

    })

it('Search product and add to cart', function(){

  const obj = new product();
  obj.searchproduct();
  obj.applyfilter();
  obj.selectproduct();
  obj.productdetails();
  obj.Measurements();
  obj.Addtocart();
  obj.Shoppingbag();

})

})
