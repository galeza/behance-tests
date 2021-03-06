import Filter from "../../../elements/pages/filters/filter";
import filterLocation from "../../../fixtures/filter.json";
import locationSelect from "../../../fixtures/locationSelect.json";
import LocationSelectMenu from "../../../elements/pages/filters/locationSelectMenu";

describe("Location Filter", () => {
  const filter = new Filter();
  const locationSelectMenu = new LocationSelectMenu();
  const countryPolandEnterLocation = "Poland{downarrow}{enter}";
  const cityPolandEnterLocation = "Krakow{enter}";
  const countryUSEnterLocation = "United States{enter}";
  const countryName = "Poland";

  context("User filters using Location filter", () => {
    beforeEach(() => {
      filter.visit();
    });

    it("Location filter is visible and contains Location text", () => {
      filter
        .getFilterLocation()
        .should("be.visible")
        .find("div")
        .within(() => {
          cy.get("div span").contains(filterLocation.filterLocation);
        });
    });
    it("After selecting Location filter, Location menu is displayed. Clear button, State label are not visible", () => {
      filter.getFilterLocation().click();
      locationSelectMenu.getLocationSelectMenu().should("be.visible");
      locationSelectMenu
        .getCountryRegionLabel()
        .should("be.visible")
        .and("have.text", locationSelect.countryRegionLabel);
      locationSelectMenu
        .getCoutryRegionDropDown()
        .find("span")
        .should("contains.text", locationSelect.selectCountryDropDown);
      locationSelectMenu
        .getCityLabel()
        .should("be.visible")
        .and("contains.text", locationSelect.cityLabel);
      locationSelectMenu
        .getCityInput()
        .should("be.visible")
        .and("have.attr", "disabled");
      locationSelectMenu
        .getCancelButton()
        .should("be.visible")
        .find("div div")
        .should("contains.text", locationSelect.cancelButton);
      locationSelectMenu.getClearFilter().should("not.exist");
      locationSelectMenu.getStateLabel().should("not.exist");
      locationSelectMenu
        .getApplyButton()
        .should("be.visible")
        .find("div div")
        .should("contains.text", locationSelect.applyButton);
    });
    it("User can select Country from the drop down menu. After selecting clear button is visible and country text is entered", () => {
      filter.getFilterLocation().click();
      enterCountryData(
        locationSelectMenu.getCoutryRegionDropDown(),
        countryPolandEnterLocation,
      );
      enterCityData(locationSelectMenu.getCityInput(), cityPolandEnterLocation);
      locationSelectMenu
        .getCoutryRegionDropDown()
        .find("span")
        .should("contains.text", countryName);
      locationSelectMenu.getClearFilter().should("be.visible");
      // cy.get(".LocationSelectMenu-locationSelectMenu-3uG").matchImageSnapshot(
      //   "LocationSelectMenu",
      //);
    });
    it("After selecting clear button, Location Menu is not visible", () => {
      filter.getFilterLocation().click();
      enterCountryData(
        locationSelectMenu.getCoutryRegionDropDown(),
        countryPolandEnterLocation,
      );
      enterCityData(locationSelectMenu.getCityInput(), cityPolandEnterLocation);

      locationSelectMenu.getClearFilter().should("be.visible").click();
      locationSelectMenu.getLocationSelectMenu().should("not.be.visible");
    });
    it("After selecting United States from country dropdown menu, State is visible", () => {
      filter.getFilterLocation().click();
      enterCountryData(
        locationSelectMenu.getCoutryRegionDropDown(),
        countryUSEnterLocation,
      );
      locationSelectMenu.getStateLabel().as("state");
      cy.get("@state")
        .should("be.visible")
        .and("contains.text", locationSelect.StateLabel);
    });
    it("After selecting country dropdown menu, user can click Apply button", () => {
      filter.getFilterLocation().click();
      enterCountryData(
        locationSelectMenu.getCoutryRegionDropDown(),
        countryPolandEnterLocation,
      );
      locationSelectMenu.getApplyButton().click();
    });
    function enterCountryData(getMethod, country) {
      if (Cypress.browser.name === "chrome" && Cypress.browser.isHeadless) {
        getMethod.click().find("input").focus().type(country);
      } else {
        getMethod.click().find("input").click().type(country);
      }
    }
    function enterCityData(getMethod, city) {
      getMethod.click().type(city);
    }
  });
});
