const { defineConfig } = require("cypress");
const fs = require('fs-extra');
const path = require('path');

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('config', `${file}.json`)
  console.log(pathToConfigFile)
  if(!fs.existsSync(pathToConfigFile)) {
    console.log('No custom config file found.' + pathToConfigFile)
    return {}
  }

  return fs.readJson(pathToConfigFile)
}

module.exports = defineConfig({
  projectId: "wztwmc",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      const file = config.env.configFile || ''

      return getConfigurationByFile(file)
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    // excludeSpecPattern: "cypress/e2e/other/*.js",
    defaultCommandTimeout: 10000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: false,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json',
    },
    retries:{
      runMode: 0,
      openMode: 1
    },
    env: {
      // set environment variables
      hideXHRInCommandLog: "true",
      first_name: "Jean",
      webdriveruniversityBaseUrl: "https://www.webdriveruniversity.com/",
      automationTestStoreBaseUrl: "https://www.automationteststore.com/"
    },
  }
});
