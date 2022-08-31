const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 't18jub',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
