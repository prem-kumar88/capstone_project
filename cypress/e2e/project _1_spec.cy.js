
describe('Homepage Navigation', () =>{
  describe.skip(' Homepage Navigation', () => {
  
    // Common setup before each test
    beforeEach(() => {
      // Visit the homepage for all test cases
      cy.visit('https://myshop.org.in/');
    });
  
    // 1.1 Homepage Navigation Tests
    
      it('Should load the homepage correctly', () => {

        cy.url().should('eq',"https://myshop.org.in/")
        cy.get('[class="search-input tt-input"]').should('be.visible');

        cy.get('.col-sm-6').should("be.visible").scrollIntoView({ duration: 2000 })
       cy.get('[class="bottom top-row"]').should("be.visible").scrollIntoView({ duration: 2000 },{force:true})
      
      });
       it('	Homepage Element Visibility Checks', () => {

       // prodect Top Categories
       cy.get('[class^="search-categories dropdown drop-menu"]').trigger('mouseover') 
       cy.get('[class^="menu-item icons-menu-item icons-menu-item-1 icon-menu-icon"]').first().should('be.visible');
       cy.get('[class^="menu-item icons-menu-item icons-menu-item-2 icon-menu-icon"]').first().should('be.visible');
       cy.get('[class^="menu-item icons-menu-item icons-menu-item-3 icon-menu-icon"]').first().should('be.visible');

       cy.get('[class="menu-item icons-menu-item icons-menu-item-4 icon-menu-icon"]').eq(0).should('be.visible');
       cy.get('[class^="menu-item icons-menu-item icons-menu-item-5 icon-menu-icon"]').eq(0).should('be.visible');
       cy.get('[class^="menu-item icons-menu-item icons-menu-item-6 icon-menu-icon"]').eq(0).should('be.visible');

      })

    })
    describe.skip('Product Search', () => {
      beforeEach(() => {
        cy.visit('https://myshop.org.in/');
      });
      
      // 2.1 Product Search Tests
      it('Should search for a product and display results', () => {
        cy.get('[class="search-input tt-input"]').clear().then((el => {
          cy.wrap(el).type('mobile')
        }))
         cy.get('[class="product-name"]').contains('MCHARGE 214M - WHITE CHARGER')
         cy.get('[class="product-name"]').contains('Mobile Display For Itel P40,SMART7,A05S,S23,HOT30I,POP7,BF7')

         cy.get('[class="search-input tt-input"]').clear().then((autoInput) => {
         cy.wrap(autoInput).type('battery')

         cy.get('[class="search-result tt-suggestion tt-selectable"]').each((el, index, $list) =>{
         const itemText=el.text().trim()
         cy.wrap(el).should('contain', itemText) 

         })
      })
    })
    it('verify the search result', ()=>{

      cy.get('[class="search-input tt-input"]').type('mobile')
      cy.get('[class="search-result tt-suggestion tt-selectable"]').should('have.length',6)
      cy.get('[class="search-result tt-suggestion tt-selectable"]').first().click()
     

      cy.get('[class="search-input tt-input"]').clear().type('battery')
      cy.get('[class="search-result tt-suggestion tt-selectable"]').should('have.length',10)
      cy.get('[class="search-result tt-suggestion tt-selectable"]').last().click()


    })

   })
   describe.skip('Product Details', () =>{
    beforeEach(() => {
      cy.visit('https://myshop.org.in/');
    });
    it('Validate that product detail pages display accurate information', () => {
      cy.get('[class="search-input tt-input"]').type('mobile')
      cy.get('[class="search-result tt-suggestion tt-selectable"]').first().click()
      cy.get('[class="title page-title"]').contains('BLP 793 MOBILLA BATTERY').should('be.visible')
      cy.get('[class="product-stock in-stock"]').contains('In Stock').should('be.visible')
      cy.get('[class="product-price-new"]').contains('Rs.1,249.00').should('be.visible')
      cy.get('[class="product-price-old"]').contains('Rs.1,899.00').should('be.visible')

      cy.get('[class="product-layout swiper-slide has-extra-button"]').each((el, index, $list) =>{
         const itemText=el.text().trim()
         cy.wrap(el).should('contain', itemText)  
         })
         cy.get('[class="search-input tt-input"]').clear().type('mobile')
         cy.get('[class="search-result tt-suggestion tt-selectable"]').last().click()
         cy.get('[class="title page-title"]').contains('VIVO T1 4G MOBILE COVER').should('be.visible')
         cy.get('[class="product-stock in-stock"]').contains('In Stock').should('be.visible')
         cy.get('[class="product-price-new"]').contains('Rs.49.00').should('be.visible')
         cy.get('[class="product-price-old"]').contains('Rs.99.00').should('be.visible')
   
         cy.get('[class="product-layout swiper-slide has-extra-button"]').each((el, index, $list) =>{
            const itemText=el.text().trim()
            cy.wrap(el).should('contain', itemText)  
            }) 

    })
    it('Test the functionality of the Add to Cart button',  () => {
      cy.get('[class="dropdown-toggle cart-heading"]').click()
      cy.get('[class="x"]').last().click()
      cy.get(".swiper-slide-active > .product-thumb > .caption > .buttons-wrapper > .button-group > .cart-group > .btn").should('be.visible')
      cy.get(".swiper-slide-next > .product-thumb > .caption > .buttons-wrapper > .button-group > .cart-group > .btn").should('be.visible')
      cy.get('[class="btn btn-cart"]').first()
    })
   })
   describe.skip(' Cart Management', () =>{
    beforeEach(() => {
      // Visit the homepage for all test cases
      cy.visit('https://myshop.org.in/');
    });
    it('Add items to the cart', () =>{
      cy.get('[class="search-input tt-input"]').type('mobile')
      cy.get('[class="search-result tt-suggestion tt-selectable"]').first().click()
      cy.get('#button-cart').click()
      
       cy.get('[class="search-input tt-input"]').clear().type('mobile')
      cy.get('[class="search-result tt-suggestion tt-selectable"]').eq(1).click()
      cy.get('#button-cart').click()

      cy.get('[class="search-input tt-input"]').clear().type('mobile')
      cy.get('[class="search-result tt-suggestion tt-selectable"]').eq(2).click()
      cy.get('#button-cart').click()

      cy.get('[class="search-input tt-input"]').clear().type('mobile')
      cy.get('[class="search-result tt-suggestion tt-selectable"]').eq(3).click()
      cy.get('#button-cart').click()

      cy.get('[class="search-input tt-input"]').clear().type('mobile')
      cy.get('[class="search-result tt-suggestion tt-selectable"]').last().click()
      cy.get('#button-cart').click()

      cy.get('[class="search-input tt-input"]').clear().type('battery')
      cy.get('[class="search-result tt-suggestion tt-selectable"]').first().click()
      cy.get('#button-cart').click()
      cy.get('[class="search-input tt-input"]').clear().type('battery')
      cy.get('[class="search-result tt-suggestion tt-selectable"]').last().click()
      cy.get('#button-cart').click()


    })
    it('Remove items from the cart', () =>{
      cy.get('[class="search-input tt-input"]').type('mobile')
      cy.get('[class="search-result tt-suggestion tt-selectable"]').first().click()
      cy.get('#button-cart').click()
      cy.get('[class="search-input tt-input"]').clear().type('mobile')
      cy.get('[class="search-result tt-suggestion tt-selectable"]').last().click()
      cy.get('#button-cart').click()

      cy.get('[class="search-input tt-input"]').clear().type('battery')
      cy.get('[class="search-result tt-suggestion tt-selectable"]').first().click()
      cy.get('#button-cart').click()
      cy.get('[class="search-input tt-input"]').clear().type('battery')
      cy.get('[class="search-result tt-suggestion tt-selectable"]').last().click()
      cy.get('#button-cart').click()
      //remove
      cy.get('[class="dropdown-toggle cart-heading"]').click()
      cy.get('.cart-buttons > .btn-cart > span').click({force: true})

      cy.get('[class="btn btn-remove"]').each((el, index, $list) =>{
        const itemText=el.text().trim()
        cy.wrap(el).should('contain', itemText)
        })


    })
    it('Verify cart total calculations', () =>{
     
      cy.get('[class="search-input tt-input"]').clear().type('mobile')
      cy.get('[class="search-result tt-suggestion tt-selectable"]').first().click()
      cy.get('#button-cart').click()
      cy.get('[class="search-input tt-input"]').clear().type('mobile')
      cy.get('[class="search-result tt-suggestion tt-selectable"]').last().click({force: true})
      cy.get('#button-cart').click({force: true})

      cy.get('[class="search-input tt-input"]').clear().type('battery')
      cy.get('[class="search-result tt-suggestion tt-selectable"]').first().click()
      cy.get('#button-cart').click()
      cy.get('[class="search-input tt-input"]').clear().type('battery')
      cy.get('[class="search-result tt-suggestion tt-selectable"]').last().click()
      cy.get('#button-cart').click()

      cy.get('[class="dropdown-toggle cart-heading"]').click()
      cy.get('.cart-buttons > .btn-cart > span').click({force: true})

      
      cy.get('[class="text-center td-total"]')
      .and('be.visible')
      cy.get('[class="text-center td-total"]').each((el, index, $list) =>{
        const itemText=el.text().trim()
        cy.wrap(el).should('contain', itemText) 
        })

        cy.get('[class="text-right"]').and('be.visible').last().should('contain','Rs.3,746.00')

    })
  })
  describe.skip(' 5. User Registration',  () => {
     beforeEach(() => {
       // Visit the homepage for all test cases
    cy.visit('https://myshop.org.in/');
    });

    it('Test user registration with valid  inputs', () =>  {

      cy.get('[class="menu-item top-menu-item top-menu-item-2"]').last().click() 

      cy.get('iframe[height="595"]').should('be.visible').then( ($iftame)=> {
      const namesText = $iftame.contents().find('input[name="firstname"]')
      cy.wrap(namesText).type('prem')

      const namesText1 = $iftame.contents().find('input[name="lastname"]')
      cy.wrap(namesText1).type('kumar')
      const numberText = $iftame.contents().find('input[name="telephone"]')
      cy.wrap(numberText).type('9381834513')

      const emailText = $iftame.contents().find('input[name="email"]')
      cy.wrap(emailText).type('prem1234567@gmail.com')

      const passwordText = $iftame.contents().find('input[name="password"]')
      cy.wrap(passwordText).type('prem123')

      const confirmText = $iftame.contents().find('input[name="confirm"]')
      cy.wrap(confirmText).type('prem123')

      const clickItem = $iftame.contents().find('input[class="radio-inline"]').last()

      const checkbox = $iftame.contents().find('input[type="checkbox"]')
      cy.wrap(checkbox).first().check()

      const button = $iftame.contents().find('[class="btn btn-primary"]')
      cy.wrap(button).click()

      cy.wait(10000)
            

      
  
      })
    })
    it('Test user registration with invalid inputs', () =>  {
      cy.get('[class="menu-item top-menu-item top-menu-item-2"]').last().click() 

      cy.get('iframe[height="595"]').should('be.visible').then( ($iftame)=> {
      const namesText = $iftame.contents().find('input[name="firstname"]')
      cy.wrap(namesText).type('prem{}qwwwoqdkowijfiaerugeuvhhehnnnnvbjenvvs')

      const namesText1 = $iftame.contents().find('input[name="lastname"]')
      cy.wrap(namesText1).type('kumaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasar')
      const numberText = $iftame.contents().find('input[name="telephone"]')
      cy.wrap(numberText).type('93')

      const emailText = $iftame.contents().find('input[name="email"]')
      cy.wrap(emailText).type('premgmail.com')

      const passwordText = $iftame.contents().find('input[name="password"]')
      cy.wrap(passwordText).type('prem123')

      const confirmText = $iftame.contents().find('input[name="confirm"]')
      cy.wrap(confirmText).type('pre123')

      const clickItem = $iftame.contents().find('input[class="radio-inline"]').last()

      const checkbox = $iftame.contents().find('input[type="checkbox"]')
      cy.wrap(checkbox).first().check()

      const button = $iftame.contents().find('[class="btn btn-primary"]')
      cy.wrap(button).click() 
      cy.wait(10000)
  
      })
    })
      it('Test user registration with invalid email id inputs', () =>  {
        cy.get('[class="menu-item top-menu-item top-menu-item-2"]').last().click() 
  
        cy.get('iframe[height="595"]').should('be.visible').then( ($iftame)=> {
        const namesText = $iftame.contents().find('input[name="firstname"]')
        cy.wrap(namesText).type('prem')
  
        const namesText1 = $iftame.contents().find('input[name="lastname"]')
        cy.wrap(namesText1).type('kumar')
        const numberText = $iftame.contents().find('input[name="telephone"]')
        cy.wrap(numberText).type('9381834513')
  
        const emailText = $iftame.contents().find('input[name="email"]')
        cy.wrap(emailText).type('prem@gmail.com')
  
        const passwordText = $iftame.contents().find('input[name="password"]')
        cy.wrap(passwordText).type('prem123')
  
        const confirmText = $iftame.contents().find('input[name="confirm"]')
        cy.wrap(confirmText).type('prem123')
  
        const clickItem = $iftame.contents().find('input[class="radio-inline"]').last()
  
        const checkbox = $iftame.contents().find('input[type="checkbox"]')
        cy.wrap(checkbox).first().check()
  
        const button = $iftame.contents().find('[class="btn btn-primary"]')
        cy.wrap(button).click() 
      
      
    })

  })

 })
 describe.skip(' User Login/Logout',  () => {
  beforeEach(() => {
    // Visit the homepage for all test cases
 cy.visit('https://myshop.org.in/');
 });
 it('Test login functionality with invalid credentials', () =>  {

  cy.get('[class="menu-item top-menu-item top-menu-item-1"]').click() 

  cy.get('iframe[height="275"]').should('be.visible').then( ($iftame)=> {
  const namesTextEmail = $iftame.contents().find('input[name="email"]')
  cy.wrap(namesTextEmail).type('prem12gmail.com')

  const namesTextPassword = $iftame.contents().find('input[name="password"]')
  cy.wrap(namesTextPassword).type('prem123')

const namesTextLogin = $iftame.contents().find('[class="btn btn-primary"]')
  cy.wrap(namesTextLogin).click()
  
 cy.on('window: confirm', () => true) 
                 //or
  // cy.on('window:confirm', (confirmText) => {

  //   expect(confirmText).to.equal('Warning: No match for E-Mail Address and/or Password.')
    
  //   return false;
  // })
  })
 })
 it('Test login functionality with valid credentials', () =>  {

   cy.get('[class="menu-item top-menu-item top-menu-item-1"]').click() 

   cy.get('iframe[height="275"]').should('be.visible').then( ($iftame)=> {
   const namesTextEmail = $iftame.contents().find('input[name="email"]')
   cy.wrap(namesTextEmail).type('prem12345@gmail.com')

   const namesTextPassword = $iftame.contents().find('input[name="password"]')
   cy.wrap(namesTextPassword).type('prem123')

 const namesTextLogin = $iftame.contents().find('[class="btn btn-primary"]')
   cy.wrap(namesTextLogin).click()
   })
  })
 
   it('Test logout functionality ', () =>  {
    cy.get('[class="menu-item top-menu-item top-menu-item-1"]').click() 

   cy.get('iframe[height="275"]').should('be.visible').then( ($iftame)=> {
   const namesTextEmail = $iftame.contents().find('input[name="email"]')
   cy.wrap(namesTextEmail).type('prem12345@gmail.com')

   const namesTextPassword = $iftame.contents().find('input[name="password"]')
   cy.wrap(namesTextPassword).type('prem123')

 const namesTextLogin = $iftame.contents().find('[class="btn btn-primary"]')
   cy.wrap(namesTextLogin).click()
   })
    cy.get('[class="menu-item top-menu-item top-menu-item-4"]').click()
    cy.get('[class="list-group-item"]').click()
    cy.go('back')

    cy.get('[class="menu-item accordion-menu-item accordion-menu-item-1"]').click()
    cy.go('back')
    cy.get('[class="menu-item accordion-menu-item accordion-menu-item-2"]').click()
    cy.go('back')

    cy.get('[class="menu-item accordion-menu-item accordion-menu-item-4"]').click()
    cy.go('back')
    cy.wait(10000)
    cy.get('[class="pull-right"]').click()
   })
 })
 describe('Checkout Process',  () => {
  beforeEach(() => {
 cy.visit('https://myshop.org.in/');
 cy.get('[class="search-input tt-input"]').type('mobile')
      cy.get('[class="search-result tt-suggestion tt-selectable"]').first().click()
      cy.get('#button-cart').click()
      

      cy.get('[class="search-input tt-input"]').clear().type('battery')
      cy.get('[class="search-result tt-suggestion tt-selectable"]').first().click()
      cy.get('#button-cart').click()
     

      cy.get('[class="fa fa-shopping-cart"]').click()
      cy.get('a[class="btn-checkout btn"]').click({force: true})
 });
 it('Test the checkout process with valid payment information', () =>  {
      // cy.get('[class="search-input tt-input"]').type('mobile')
      // cy.get('[class="search-result tt-suggestion tt-selectable"]').first().click()
      // cy.get('#button-cart').click()
      

      // cy.get('[class="search-input tt-input"]').clear().type('battery')
      // cy.get('[class="search-result tt-suggestion tt-selectable"]').first().click()
      // cy.get('#button-cart').click()
     

      // cy.get('[class="fa fa-shopping-cart"]').click()
      // cy.get('a[class="btn-checkout btn"]').click({force: true})
      
      cy.get('[class="radio"]  input[type="radio"]').check('register')

       // Example of filling in billing details
    cy.get('#input-firstname').type('prem');
    cy.get('#input-lastname').type('kumar');
    cy.get('#input-email').type('kumarm@example.com');
    cy.get('#input-telephone').type('9391934512');
    cy.get('#input-password').type('prem');
    cy.get('#input-confirm').type('prem');

    cy.get("#input-payment-address-1").type('house number 13/b');
    cy.get('#input-payment-city').type('tenali');
    cy.get('#input-payment-postcode').type('pkp');
   cy.get('#input-payment-country').select('United States');
    cy.get('#input-payment-zone').select('New York');

    cy.get('[type="checkbox"]').eq(0).check()
    cy.get('[type="checkbox"]').eq(1).check()
    cy.get('[type="checkbox"]').eq(2).check()

    cy.get('[id="quick-checkout-button-confirm"]').click({force:true})  

      
 })

})


})
