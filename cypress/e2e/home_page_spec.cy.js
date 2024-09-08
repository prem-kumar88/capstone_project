// homepage_navigation.cy.js
/*

describe('Homepage Navigation - MyShop.org.in', () => {
    beforeEach(() => {
      // Navigate to the homepage before each test
      cy.visit('https://myshop.org.in/');
    });
  
    it('should load the homepage correctly', () => {
      // Verify that the homepage URL is correct
      cy.url().should('include', 'myshop.org.in');

      // Check that the logo or main heading is visible to confirm the page has loaded
      cy.get('#logo').should('be.visible'); // Adjust selector based on your site's actual logo selector
    });
  
    it('should display product categories', () => {
      // Check that the product categories section is visible
      //cy.get('.product-categories').should('be.visible'); // Adjust selector based on your site's actual categories container selector
  
      // Verify that each category has a name and is displayed correctly
      //cy.get('.product-categories .category-item').should('have.length.greaterThan', 0); // Adjust selector for category items
  
      // Optionally, check for specific category names (adjust based on your categories)
      cy.get('.product-categories .category-item').contains('Electronics').should('be.visible');
      cy.get('.product-categories .category-item').contains('Fashion').should('be.visible');
      cy.get('.product-categories .category-item').contains('Home Appliances').should('be.visible');
    });
  });
  */
 // myshop.cy.js

describe('MyShop Website Functional Testing', () => {
  
    const baseUrl = 'https://myshop.org.in/';
  
    beforeEach(() => {
      cy.visit(baseUrl); // Visit the website before each test
    });
  
    // Test Case 1: Homepage Navigation
    it('should load the homepage and display main elements', () => {
      cy.url().should('eq', baseUrl); // Verify URL
      cy.get('header').should('be.visible'); // Verify header is visible
      cy.get('footer').should('be.visible'); // Verify footer is visible
      cy.get('nav').should('be.visible'); // Verify navigation bar is visible
      cy.get('.product-category').should('be.visible'); // Verify product categories are displayed
      cy.get('.featured-products').should('be.visible'); // Verify featured products are visible
    });
  
    // Test Case 2: Product Search Functionality
    it('should search for a product and display relevant results', () => {
      cy.get('input[placeholder="Search"]').type('Laptop'); // Type "Laptop" in the search bar
      cy.get('button[type="submit"]').click(); // Click the search button
      cy.url().should('include', 'search'); // Verify that the URL includes "search"
      cy.get('.product-list').should('be.visible'); // Verify that search results are displayed
      cy.get('.product-list').contains('Laptop').should('exist'); // Verify relevant products appear
    });
  
    // Test Case 3: Add Product to Cart
    it('should add a product to the cart and verify cart content', () => {
      cy.get('input[placeholder="Search"]').type('Headphones'); // Search for "Headphones"
      cy.get('button[type="submit"]').click(); // Click the search button
      cy.get('.product-list').contains('Headphones').click(); // Click on a product from the results
      cy.get('.product-details').should('be.visible'); // Verify that product details page is loaded
      cy.get('button.add-to-cart').click(); // Click "Add to Cart" button
      cy.get('.cart-count').should('contain', '1'); // Verify the cart count has increased
      cy.get('.cart').click(); // Click on the cart icon
      cy.get('.cart-items').contains('Headphones').should('exist'); // Verify that the product is in the cart
    });
  
    // Test Case 4: User Login and Logout
    it('should allow user to login and logout successfully', () => {
      cy.contains('Login').click(); // Navigate to the login page
      cy.url().should('include', '/login'); // Verify that the login page URL is correct
  
      // Fill in the login form
      cy.get('input[name="email"]').type('testuser@example.com'); // Enter email
      cy.get('input[name="password"]').type('password123'); // Enter password
      cy.get('button[type="submit"]').click(); // Click login button
  
      cy.url().should('include', '/account'); // Verify user is redirected to account page
      cy.contains('Logout').should('be.visible'); // Verify the Logout button is visible
  
      // Perform Logout
      cy.contains('Logout').click(); // Click Logout
      cy.url().should('eq', baseUrl); // Verify the user is redirected to the homepage
    });
  
  });