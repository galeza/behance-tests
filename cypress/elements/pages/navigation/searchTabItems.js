class SearchTabItems {
  constructor() {}
  people = "a.e2e-Search-users-tab";

  getPeopleItem() {
    return cy.get(this.people);
  }
}
export default SearchTabItems;
