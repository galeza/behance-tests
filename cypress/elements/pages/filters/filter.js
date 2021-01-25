class Filter {
  constructor() {}
  filterLocation = "button[name='Location']";

  visit() {
    cy.visit("");
  }

  getFilterLocation() {
    return cy.get(this.filterLocation);
  }
}
export default Filter;
