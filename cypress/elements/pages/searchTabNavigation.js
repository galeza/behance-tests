class searchTabNavigation {
  constructor() {}
  searchProjectsTab = "a[href='/search/projects']";
  searchImagesTab = "a[href='/search/images']";
  searchUsersTab = "a[href='/search/users']";
  searchMoodboardsTab = "a[href='/search/moodboards']";

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
}
export default searchTabNavigation;
