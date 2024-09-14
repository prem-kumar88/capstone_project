const { defineConfig } = require("cypress");
chromeWebSecurity: false,

module.exports = defineConfig({

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    testIsolation: true,
    experimentalStudio: true,
    // baseUrl: "https://animechan.io/api/v1/quotes"
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Ensure the pattern is correct
    //supportFile: 'cypress/support/index.js', 
  },
});
