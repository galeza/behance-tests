class Content {
  constructor() {}

  contentList = "ul[class*='ContentList-root']";
  resultsEnd = "div[class*='ResultsEnd-root']";

  getContent() {
    return cy.get(this.contentList);
  }
  getResultsEndElement() {
    return cy.get(this.resultsEnd);
  }
}
export default Content;
