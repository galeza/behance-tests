describe("Test to check push", () => {
 
    context("User opens baseUrl", () => {
      beforeEach(() => {
        cy.visit("");

      });
  
      it("Behance logo is visible and clickable", () => {
        
        // var cookies = cy.get("button#onetrust-accept-btn-handler");
        // cookies.click();
        cy.get('button#onetrust-accept-btn-handler', { timeout: 10000 }).should('be.visible');
        cy.get('div[class^="PrimaryNav-logoWrap"]').should("be.visible");
       //logo.should("be.visible");
    //    cy.get("a[title='Behance'] div").then($button => {
    //     if ($button.is(':visible')){
    //       //you get here only if button is visible
    //     }
      //})
      });

    });
  });