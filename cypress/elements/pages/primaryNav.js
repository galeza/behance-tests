class PrimaryNav {
  constructor() {}
  logo = "div[class^='PrimaryNav-logoWrap']";
  discover = "a.PrimaryNav-coreNavigationLink-2uv.e2e-Nav-discover";
  livestreams = "a.PrimaryNav-coreNavigationLink-2uv.e2e-Nav-live";
  jobs = "a.PrimaryNav-coreNavigationLink-2uv.e2e-Nav-jobs";
  signInButton = "button[class*='signin PrimaryNav']";
  signUpButton = "button[class*='signup PrimaryNav']";
  adobeLink = "div[class*='PrimaryNav-adobeLogo']";

  visit() {
    cy.visit("");
  }

  getLogo() {
    return cy.get(this.logo);
  }
  getDiscover() {
    return cy.get(this.discover);
  }
  getLivestreams() {
    return cy.get(this.livestreams);
  }
  getJobs() {
    return cy.get(this.jobs);
  }
  getSignInButton() {
    return cy.get(this.signInButton);
  }
  getSignUpButton() {
    return cy.get(this.signUpButton);
  }
  getAdobeLink() {
    return cy.get(this.adobeLink);
  }
}
export default PrimaryNav;
