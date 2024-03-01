const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "wztwmc",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    excludeSpecPattern: "cypress/e2e/other/*.js",
    defaultCommandTimeout: 10000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: false,
    env: {
      // set environment variables
      hideXHRInCommandLog: "true",
      first_name: "Jean",
      webdriveruniversityBaseUrl: "https://www.webdriveruniversity.com/",
      automationTestStoreBaseUrl: "https://www.automationteststore.com/"
    },
  }
});
