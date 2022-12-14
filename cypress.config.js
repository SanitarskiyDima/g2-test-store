const { defineConfig } = require("cypress");

const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  chromeWebSecurity: false,
  reporter: 'mochawesome',
  reporterOptions: {
    configFile: 'reporter-config.json',
    reportDir: 'cypress/results',
    overwrite: false,
    html: true,
    json: true
  },
  e2e: {
    baseUrl: 'https://automationteststore.com',
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    }
  }
});
