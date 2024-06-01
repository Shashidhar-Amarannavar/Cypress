const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  viewportWidth: 1200,
  viewportHeight: 700,
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern: 'cypress/e2e/features/**/*.feature',
  }
});
