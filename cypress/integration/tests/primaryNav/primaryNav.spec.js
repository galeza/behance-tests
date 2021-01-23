import PrimaryNav from "../../../elements/pages/primaryNav";

describe("Primary navigation", () => {
  const primaryNav = new PrimaryNav();

  context("User opens Behance.net", () => {
    beforeEach(() => {
      primaryNav.visit();
    });

    it("Behance logo is visible and clickable", () => {
      primaryNav.getLogo().should("be.visible");
    });
    it("Primary Navigation items (Discover, Livestreams, Jobs) are visible and clickable", () => {
      validatePrimaryNav(
        primaryNav.getDiscover(),
        "href",
        "/galleries?tracking_source=nav20",
        "h3",
        "Discover",
      );
      validatePrimaryNav(
        primaryNav.getLivestreams(),
        "href",
        "/live?tracking_source=nav20",
        "h3",
        "Livestreams",
      );
      validatePrimaryNav(
        primaryNav.getJobs(),
        "href",
        "/joblist?tracking_source=nav20",
        "h3",
        "Jobs",
      );
    });
    it("Primary Navigation items (Log In, Sign Up, Adobe) are visible and contain text", () => {
      validatePrimaryNavButtons(
        primaryNav.getSignInButton(),
        "data-signin-from",
        "Header",
        "div",
        "Log In",
      );
      validatePrimaryNavButtons(
        primaryNav.getSignUpButton(),
        "data-signup-from",
        "updated_2020_navigation_signup",
        "div",
        "Sign Up",
      );
      primaryNav
        .getAdobeLink()
        .find("a")
        .should(
          "have.attr",
          "href",
          "https://www.adobe.com/creativecloud.html?promoid=MYYBRZ1T&mv=other",
        );
    });

    function validatePrimaryNav(getMethod, attr, attrValue, element, text) {
      getMethod.should("have.attr", attr, attrValue).and("be.visible");
      getMethod.find(element).should("have.text", text);
    }
    function validatePrimaryNavButtons(
      getMethod,
      attr,
      attrValue,
      element,
      text,
    ) {
      getMethod.should("have.attr", attr, attrValue).and("be.visible");
      getMethod.within(() => {
        cy.get(element).children().should("contain.text", text);
      });
    }
  });
});
