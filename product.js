class product {

searchproduct(){
cy.get(6000)
cy.viewport(1200,900)
cy.get('#onetrust-accept-btn-handler').click({force:true}) 
cy.get('#ikea-search-input').should('be.enabled').type('gaming desk')
cy.wait(6000)
cy.get(':nth-child(2) > .universal-item__link > .universal-item__text > .universal-item__title').should('contain.text','gaming desk black').click({force:true})
return this;
}

applyfilter(){
cy.wait(3000)
cy.get('.plp-filter-bar__options > :nth-child(1)').should('have.text','Sort').click({force:true}) // click on filter dropdown
cy.xpath("//span[normalize-space()='Price: high to low']").should('contain.text','Price: high to low')
cy.get("#plp-PRICE_HIGH_TO_LOW").click({force:true}) // select high to low radio button
cy.get('.search-summary__content > .plp-text').click({force:true})
cy.wait(3000)
// select color
cy.get('.plp-filter-bar__options > :nth-child(7)').should('have.text','Colour').click({force:true}) // click on colour dropdown
cy.wait(3000)
cy.get('#black').should('exist').click({force:true}) // select black color
cy.wait(3000)
cy.get('.search-summary__content > .plp-text').click({force:true})
    return this;
}


selectproduct(){
//select product 
cy.get(':nth-child(3) > [data-testid="plp-product-card"] > .plp-mastercard__image > .plp-product__image-link > .image').should('exist')
cy.get(':nth-child(3) > [data-testid="plp-product-card"] > .plp-mastercard__price > .plp-price-link-wrapper > .plp-price-module > .plp-price-module__information > .plp-price-module__name > .plp-price-module__description').should('contain.text','Gaming desk and chair').click({force:true}) // select product

// product details page
cy.get('.pip-header-section__title--big').should('contain.text','FREDDE / MATCHSPEL')  // validate brand name
cy.get('.pip-header-section__description-text').should('contain.text','Gaming desk and chair, black') // validate product name

cy.get('.pip-price__integer').invoke('text').then((productrate) =>{   // validate product rate
    expect(productrate).to.eq('36,980')
 })
    return this;
}

productdetails(){
// product details 

cy.get('#pip-product-information-section-list-0 > .pip-list-view-item__action > .pip-list-view-item__wrapper > .pip-list-view-item__label-container > .pip-list-view-item__title').scrollIntoView()
.should('contain.text','Product details').click({force:true}) // click on product details

cy.get('.pip-product-details > .pip-product-details__title').should('contain.text','Product details')
      // Assert descriptive text is present
cy.get('.pip-product-details > :nth-child(2) > :nth-child(1)').should('contains.text','Keep your coffee, beverage or snacks nearby in the cut-out cup holders on either side of the table top. The cup holders are made of plastic that is approved for use with food.')

cy.wait(4000)
// assert article number 
cy.get('.pip-product-details > [data-ga-action="article_number_click"] > .pip-product-identifier__label').scrollIntoView()
cy.get('.pip-product-details > [data-ga-action="article_number_click"] > .pip-product-identifier__label').should('contain.text','Article number')

cy.get('.pip-product-details > [data-ga-action="article_number_click"] > .pip-product-identifier__value').scrollIntoView().invoke('text').then((articlenumber) =>{
expect(articlenumber).to.eq('294.072.97')
})

// Materials and care section
  cy.get('#product-details-material-and-care > [role="heading"] > .pip-accordion__heading > .pip-accordion-item-header__title-wrapper > .pip-accordion-item-header__title').should('contain.text','Materials and care').click({force:true}) // click on materials and care

// Gaming desk
cy.get('#SEC_product-details-material-and-care > .pip-collapsible__content > .pip-accordion__content--inner-large > :nth-child(1) > :nth-child(2) > .pip-product-details__material-sub-header').should('contain.text','Gaming desk')
cy.get('#SEC_product-details-material-and-care > .pip-collapsible__content > .pip-accordion__content--inner-large > :nth-child(1) > :nth-child(2) > :nth-child(2) > dt').should('contain.text','Frame/ Support:')
cy.get('#SEC_product-details-material-and-care > .pip-collapsible__content > .pip-accordion__content--inner-large > :nth-child(1) > :nth-child(2) > :nth-child(2) > dd').scrollIntoView().should('contain.text','Steel, Epoxy/polyester powder coating')

// Gaming chair
cy.get('#SEC_product-details-material-and-care > .pip-collapsible__content > .pip-accordion__content--inner-large > :nth-child(1) > :nth-child(3) > .pip-product-details__material-sub-header').should('contain.text','Gaming chair')
cy.get('#SEC_product-details-material-and-care > .pip-collapsible__content > .pip-accordion__content--inner-large > :nth-child(1) > :nth-child(3) > :nth-child(3) > dt').scrollIntoView().should('contain.text','Seat frame:')
cy.get('#SEC_product-details-material-and-care > .pip-collapsible__content > .pip-accordion__content--inner-large > :nth-child(1) > :nth-child(3) > :nth-child(3) > dd').should('contain.text','Layer-glued wood veneer')

// Assembly and documents

cy.wait(5000)
cy.get("button[aria-controls='SEC_product-details-assembly-and-documents'] span[class='pip-accordion-item-header__title']").scrollIntoView().
should('contain.text','Assembly and documents').click({force:true})

cy.get("li[id='product-details-assembly-and-documents'] div[class='pip-accordion__content--inner-large'] div:nth-child(1) h3:nth-child(1)").should('contain.text','Assembly instructions')

cy.wait(10000)

// advice and care instructions

cy.get("div[id='SEC_product-details-assembly-and-documents'] div:nth-child(2) h3:nth-child(1)").scrollIntoView().should('contain.text','Advice and care instructions')

cy.get("button[aria-label='Close modal'] span[class='pip-btn__inner']").click({force:true}) // click on close icon
return this;
    }

Measurements(){
cy.wait(5000)
cy.get('#pip-product-information-section-list-2 > .pip-list-view-item__action > .pip-list-view-item__wrapper > .pip-list-view-item__label-container > .pip-list-view-item__title').should('contain.text','Measurements').click({force:true}) // click on measurements
cy.wait(8000)
cy.get("div[class='pip-modal-body'] h2[class='pip-product-dimensions__title']").should('have.text','Measurements')

cy.get("div[id='range-modal-mount-node'] ul[class='pip-product-dimensions__dimensions-container'] li:nth-child(1) span:nth-child(1)").should('contain.text','Height:')

cy.get("div[id='range-modal-mount-node'] ul[class='pip-product-dimensions__dimensions-container'] li:nth-child(1)").should('contain.text','146 cm (57 1/2 ")')
cy.wait(2000)
cy.get("div[id='range-modal-mount-node'] li:nth-child(9) span:nth-child(1)").should('contain.text','Tested for:')

cy.get("div[id='range-modal-mount-node'] li:nth-child(9)").should('contain.text','10 kg (243 lb)')

cy.get("button[aria-label='Close modal'] span[class='pip-btn__inner']").click({force:true}) // close measurement modal
       
// Relatable products 
cy.wait(4000)
cy.get("div[data-mount-recommendations='pip-product-first'] h2[class='rec-teaser__title']").scrollIntoView().should('contain.text','Related products')
cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .rec-minimal-compact-fragment > [data-recommendations-type="rec-pip-product-first"] > .pip-product-compact > .pip-product-compact__bottom-wrapper > .pip-product-compact__wrapper-link > .pip-compact-price-package > .pip-price-module > .pip-price-module__information > .pip-price-module__name > .pip-price-module__name-decorator > .pip-header-section > .pip-header-section__container > .pip-header-section__container-text > .pip-header-section__title--small').scrollIntoView().should('be.visible').click({force:true}) // select 1st product
cy.wait(7000)
cy.go('back');
cy.wait(7000)
cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .rec-minimal-compact-fragment > [data-recommendations-type="rec-pip-product-first"] > .pip-product-compact > .pip-product-compact__bottom-wrapper > .pip-product-compact__wrapper-link > .pip-compact-price-package > .pip-price-module > .pip-price-module__information > .pip-price-module__name > .pip-price-module__name-decorator > .pip-header-section > .pip-header-section__container > .pip-header-section__container-text > .pip-header-section__title--small').scrollIntoView().should('be.visible').click({force:true}) // select 2nd product
cy.wait(9000)
cy.go('back');
return this;
    }


Addtocart(){
// Add product to cart 
cy.get('.pip-header-section__title--big').scrollIntoView()
cy.wait(4000)
cy.get("button[class='pip-btn pip-btn--emphasised pip-btn--fluid'] span[class='pip-btn__inner']").should('have.text','Add to bag').click({force:true}) // click on add to bag button

cy.wait(10000)
cy.get(".rec-inline-message__body").should('contain.text','Added to cart') // validate added to cart message

cy.get(".rec-product__name").should('contain.text','FREDDE / MATCHSPEL')
cy.wait(4000)

cy.get('div.rec-product__description')
  .invoke('text')
  .then((text) => {
    expect(text.trim()).to.contain('gaming desk and chair');
  });
cy.get(".rec-price__integer").invoke('text').then((productrate) =>{
    expect(productrate).to.eq('36,980')
 })
    return this;
    }

Shoppingbag(){
// Go to shopping bag

cy.get("button[aria-label='Go to shopping bag'] span[class='rec-btn__label']").should('have.text','Go to shopping bag').click({force:true})
cy.wait(15000)

cy.get('.text').contains('Shopping bag')
cy.url().should('contain','shoppingcart')
cy.xpath("//a[normalize-space()='FREDDE / MATCHSPEL']").should('contain.text','FREDDE / MATCHSPEL')
cy.xpath("//div[@class='cart-ingka-text cart-ingka-text--body-m _productDescription_hvolx_1']").should('contain.text','gaming desk and chair')
cy.wait(4000)
cy.xpath("//span[@class='cart-ingka-price cart-ingka-price--leading cart-ingka-price--leading cart-ingka-price--medium cart-ingka-price--currency-super-aligned cart-ingka-price--decimal-super-aligned']//span[@class='cart-ingka-price__integer'][normalize-space()='36,980']").
should('contain.text','36,980')
        return this;
    }
    }

export default product;