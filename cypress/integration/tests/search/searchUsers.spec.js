import Search from "../../../elements/pages/search/search";
import Content from "../../../elements/pages/content";
import SearchTabNavigation from "../../../elements/pages/search/searchTabNavigation";

describe("Search user", () => {
  const search = new Search();
  const content = new Content();
  const searchTabNavigation = new SearchTabNavigation();
  const userUrl = "/search/users/";
  var searchUserFistName;
  var searchUserLastName;
  var errorNoRecord;

  context("Search for a particular user", () => {
    before(() => {
      cy.fixture("users").then((data) => {
        searchUserFistName = data.firstName;
        searchUserLastName = data.lastName;
      });
      cy.fixture("errors").then((data) => {
        errorNoRecord = data.thereIsNoRecordError;
      });
      search.visitSpecificSearch(userUrl);
    });
    it("When searching for a particular user, user record is found and displayed in the content list", () => {
      enterText(
        search.getSearchInput(),
        searchUserFistName + " " + searchUserLastName,
      );
      content
        .getContent()
        .first()
        .within(() => {
          cy.get("div div div div").within(() => {
            cy.get("h3")
              .contains(searchUserFistName + " " + searchUserLastName)
              .should("have.attr", "href")
              .and("contains", searchUserFistName);
          });
        });
    });
    it("When searching for a non-existing user, error message is displayed", () => {
      enterText(search.getSearchInput(), "nonexistinguserbehance");
      content
        .getResultsEndElement()
        .find("h3")
        .should("contain.text", errorNoRecord);
    });
    it("When searching for people, tab item People is highlighted", () => {
      searchTabNavigation
        .getSearchUsersTab()
        .invoke("attr", "class")
        .should("match", /active/);
    });

    function enterText(getMethod, text) {
      getMethod.clear().type(text + "{downarrow}{enter}");
    }
  });
});
