import PrimaryNav from "../../../elements/pages/navigation/primaryNav";
import primaryNavData from "../../../fixtures/primaryNav.json";

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
        primaryNavData.validatePrimaryNavHrefs[0],
        "h3",
        primaryNavData.validatePrimaryNavNames[0],
      );
      validatePrimaryNav(
        primaryNav.getLivestreams(),
        "href",
        primaryNavData.validatePrimaryNavHrefs[1],
        "h3",
        primaryNavData.validatePrimaryNavNames[1],
      );
      validatePrimaryNav(
        primaryNav.getJobs(),
        "href",
        primaryNavData.validatePrimaryNavHrefs[2],
        "h3",
        primaryNavData.validatePrimaryNavNames[2],
      );
    });
    it("Primary Navigation items (Log In, Sign Up, Adobe) are visible and contain text", () => {
      validatePrimaryNavButtons(
        primaryNav.getSignInButton(),
        "data-signin-from",
        primaryNavData.loginAttrValue,
        "div",
        primaryNavData.login,
      );
      validatePrimaryNavButtons(
        primaryNav.getSignUpButton(),
        "data-signup-from",
        primaryNavData.signupAttrValue,
        "div",
        primaryNavData.signup,
      );
      primaryNav
        .getAdobeLink()
        .find("a")
        .should("have.attr", "href", primaryNavData.adobeHref);
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
