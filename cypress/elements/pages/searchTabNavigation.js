class SearchTabNavigation {
  constructor() {}
  searchProjectsTab = "a[href='/search/projects']";
  searchImagesTab = "a[href='/search/images']";
  searchUsersTab = "a[href='/search/users']";
  searchMoodboardsTab = "a[href='/search/moodboards']";
  searchTabList = "ul[class^='Search-tabList']";

  visit() {
    cy.visit("");
  }

  getSearchProjectsTab() {
    return cy.get(this.searchProjectsTab);
  }
  getSearchImagesTab() {
    return cy.get(this.searchImagesTab);
  }
  getSearchUsersTab() {
    return cy.get(this.searchUsersTab);
  }
  getSearchMoodboardsTab() {
    return cy.get(this.searchMoodboardsTab);
  }
  getSearchTabList() {
    return cy.get(this.searchTabList);
  }
}
export default SearchTabNavigation;
