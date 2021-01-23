// Import commands.js using ES2015 syntax:
import "./commands";
require("cypress-failed-log");

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
// Alternatively you can use CommonJS syntax:
// require('./commands')
