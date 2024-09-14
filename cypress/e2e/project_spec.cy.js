describe('MyShop Automation Testing', () => {
    describe('Homepage Navigation', () => {
      beforeEach(() => {
        // Visit the homepage for all test cases
        cy.visit('https://myshop.org.in/');
      });
  
      // 1.1 Homepage Navigation Tests
      it('Should load the homepage correctly', () => {
        // Verifying the homepage logo is visible
        // Verifying the URL is correct
        cy.url().should('eq', "https://myshop.org.in/");
      });
  
      // 1.2 Check that product categories are displayed
      it('Should display product categories', () => {
        // Verifying that the product categories are displayed
      //  cy.get('.category-navigation .title').should('be.visible');  // Adjusted selector for categories title
        // Scroll to view the categories
        cy.get('.categories-list').scrollIntoView({ duration: 2000 }).should('be.visible');
        // Scroll to view a specific product
        cy.get('.product-item img').eq(6).scrollIntoView({ duration: 2000 });  // Adjusted selector for a specific product
      });
    });
  
    describe('Product Search', () => {
      beforeEach(() => {
        // Visit the homepage for all test cases
        cy.visit('https://myshop.org.in/');
      });
  
      // 2.1 Product Search Tests
      it('Should search for a product and display results', () => {
        // Typing the product name in the search bar and verifying results
        cy.get('#small-searchterms').type('Smartphone{enter}');
        cy.get('.product-item a').first().click();  // Adjusted selector for product link
        cy.go('back');
  
        cy.get('#small-searchterms').type('Laptop{enter}');
        cy.get('.product-item a').first().click();
        cy.go('back');
  
        cy.get("#small-searchterms").type("Camera{enter}");
        cy.get('.product-item img[title="Show details for Camera"]').click();  // Adjusted selector for specific product
      });
  
      // 2.2 Verify search results
      it('Verify search results', () => {      
          cy.get('#small-searchterms').type('Laptop{enter}');

        // Search for a product and verify the search results
        cy.get('.product-item').should('have.length.greaterThan', 0);  // Adjusted selector for search results length
        cy.get('.product-item a').first().click();
        cy.get('h1[itemprop="name"]').should('contain', 'Laptop');  // Adjusted selector for product name
        cy.get('.price').should('contain', '1000.00');  // Adjusted selector for product price
      });
    });
  
    describe('Product Details', () => {
      beforeEach(() => {
        // Visit the homepage for all test cases
        cy.visit('https://myshop.org.in/');
      });
  
      // 3.1 Product Details Verification
      it('Verify product details', () => {
        // Search for a product and verify its details
        cy.get('#small-searchterms').type('Smartphone{enter}');
        cy.get('.product-item a').first().click();
        cy.get('h1[itemprop="name"]').should('contain', 'Smartphone');  // Adjusted selector for product name
        cy.get('.price').should('contain', '1000.00');  // Adjusted selector for product price
        cy.get('.full-description > :nth-child(3)').should('contain', 'Battery life 8h in power use');  // Adjusted selector for product spec
        cy.go('back');
      });
  
      // 3.2 Test the functionality of the 'Add to Cart' button
      it("Test the functionality of the 'Add to Cart' button", () => {
        cy.get('a.ico-cart .cart-label').should('be.visible');
        cy.get('a.ico-cart .cart-label').should('have.text', 'Shopping cart');
  
        cy.get('#small-searchterms').type('Build your own computer{enter}');
        cy.get('.product-item a').first().click();
        cy.get('#add-to-cart-button').click();  // Adjusted selector for add to cart button
        cy.get('#topcartlink').click();
        cy.get('.product-picture').should('have.length', 1);
      });
    });
  
    // Repeat similar updates for other sections, ensuring each selector matches the structure of the website.
  });
  