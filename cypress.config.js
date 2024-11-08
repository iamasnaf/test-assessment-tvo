const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'kwn1x9',
  viewportHeight: 1080,
  viewportWidth: 1920,
  reporterOptions:{
    charts: true,
    embeddedScreenshots: true,
    inlineAssests: true,
    reportDir: 'reports',
    reportPageTitle: 'Test Assessment TVO Results',
  
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'https://tvolearn.com/',
    specPattern: 'cypress/e2e/**/*.cy.js',
    chromeWebSecurity: true,
    experimentalRunAllSpecs: true,
    testIsolation: false,
    experimentalOriginDependencies: true,
  }
});
