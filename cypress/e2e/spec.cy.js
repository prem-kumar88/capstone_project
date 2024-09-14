import 'cypress-iframe';
describe('Interacts with elements inside an iframe', function()  {
  beforeEach(() => {
    // Visit the main page where the iframe is located
    cy.visit('https://myshop.org.in/index.php?route=account/register');
  });

  it('should register a new user inside an iframe successfully', function() {
    // Wait for the iframe to load using a specific selector
    cy.frameLoaded('iframe[src*="route=account/register&popup=register"]',{ timeout: 10000 }) // Adjust this selector as needed

    cy.iframe().find('[id="input-firstname"]').type('pr')
  });
});
