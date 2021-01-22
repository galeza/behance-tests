class PrimaryNav {
  constructor() {}
  logo = "div[class^='PrimaryNav-logoWrap']";
  discover = "a.PrimaryNav-coreNavigationLink-2uv.e2e-Nav-discover";
  livestreams = "a.PrimaryNav-coreNavigationLink-2uv.e2e-Nav-live";
  jobs = "a.PrimaryNav-coreNavigationLink-2uv.e2e-Nav-jobs";

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
}
export default PrimaryNav;
