class LocationSelectMenu {
  constructor() {}
  locationSelectMenu = "div[class^=LocationSelectMenu-locationSelectMenu]";
  countryRegionLabel = ".e2e-LocationFilter-panel > div:nth-child(1) > label";
  coutryRegionDropDown = "div.vs__selected-options";
  countryRegionInput = "input#select-100";
  countryRegionSingleMenu =
    "div.dropdown.v-select.single.searchable.Select-vueSelectInput-1dM";
  stateLabel = "[for='select-1002']";
  stateDropDown = "div.dropdown.v-select.open.single";
  cityLabel = "label.LocationSelectMenu-label-ro2";
  cityInput = "div#autosuggest input";
  cancelButton =
    "div.LocationFilter-filterSubmitButtons-Ktq button[class*='ghost']:nth-child(1)";
  clearFilter =
    "div.LocationFilter-filterSubmitButtons-Ktq button[class*='ghost']:nth-child(2)";
  applyButton =
    "div.LocationFilter-filterSubmitButtons-Ktq button[class*='primary']";

  visit() {
    cy.visit("");
  }

  getLocationSelectMenu() {
    return cy.get(this.locationSelectMenu);
  }
  getCountryRegionLabel() {
    return cy.get(this.countryRegionLabel);
  }
  getCoutryRegionDropDown() {
    return cy.get(this.coutryRegionDropDown);
  }
  getCountryRegionInput() {
    return cy.get(this.countryRegionInput);
  }
  getCountryRegionSingleMenu() {
    return cy.get(this.countryRegionSingleMenu);
  }
  getStateLabel() {
    return cy.get(this.stateLabel);
  }
  getStateDropDown() {
    return cy.get(this.stateDropDown);
  }
  getCityLabel() {
    return cy.get(this.cityLabel);
  }
  getCityInput() {
    return cy.get(this.cityInput);
  }
  getCancelButton() {
    return cy.get(this.cancelButton);
  }
  getClearFilter() {
    return cy.get(this.clearFilter);
  }
  getApplyButton() {
    return cy.get(this.applyButton);
  }
}
export default LocationSelectMenu;
