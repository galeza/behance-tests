import Search from "../../../elements/pages/search";
import SearchTabNavigation from "../../../elements/pages/searchTabNavigation";

describe("Search functionality icon and input", () => {
  const search = new Search();
  var searchSuggestions;

  context("User opens Behance.net and see search functionality", () => {
    before(() => {
      search.visit();
      cy.fixture("searchData").then((data) => {
        searchSuggestions = data.searchSuggestions;
      });
    });

    it("Search icon and input are visible. When clicked suggestions are visible", () => {
      search.getSearchIcon().should("be.visible");
      search.getSearchInput().should("be.visible").click();
      search.getSearchSuggestions().within(() => {
        cy.get("li")
          .children()
          .each(($el, index) => {
            expect($el).to.have.text(searchSuggestions[index]);
          });
      });
    });

    it("Search input contains placeholder 'Search Behance'", () => {
      search
        .getSearchInput()
        .should("have.attr", "placeholder", "Search Behance")
        .and("be.visible");
    });
  });
});

describe("Search functionality TAB", () => {
  const searchTabNavigation = new SearchTabNavigation();
  var hrefs;
  var tabNames;
  context("User opens Behance.net and search tabs are present", () => {
    before(function () {
      searchTabNavigation.visit();
      cy.fixture("searchData").then((data) => {
        hrefs = data.searchTabHrefs;
        tabNames = data.searchTabNames;
      });
    });

    it("Search tabs are visible with specified text", () => {
      searchTabNavigation.getSearchTabList().within(() => {
        cy.get("li")
          .children()
          .each(($el, index) => {
            expect($el).to.have.text(tabNames[index]);
          });
      });
    });
    it("Search tabs contain href with correct value", () => {
      searchTabNavigation.getSearchTabList().within(() => {
        cy.get("li")
          .children()
          .each(($el, index) => {
            expect($el).to.have.attr("href", hrefs[index]);
          });
      });
    });
  });
});
