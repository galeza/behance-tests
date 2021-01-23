class Search {
  constructor() {}

  searchIcon = "div.SearchTypeahead-searchIcon-1ld";
  searchInput = "input.SearchTypeahead-searchInput-1qk";
  searchSuggestions = "ul.SearchTypeahead-suggestions-2lD";

  visit() {
    cy.visit("");
  }

  getSearchIcon() {
    return cy.get(this.searchIcon);
  }
  getSearchInput() {
    return cy.get(this.searchInput);
  }
  getSearchSuggestions() {
    return cy.get(this.searchSuggestions);
  }
}
export default Search;
