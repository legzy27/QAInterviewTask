describe('user login check detailed profile section loads properly ', function(){
    it('User login', function(){
        cy.visit('https://platform.hfm.global/intel')
        cy.get('#login-emailInput').type('niyo4real2002@yahoo.com') 
        cy.get('#login-password').type('Allstar27!') 
        cy.get('#login-submit').click(); 
        
        cy.wait(2000)
        //click on Data Menu tab
        cy.get('[data-testid=navLink-data]').click();
        //Type in text and search
        cy.get('[data-testid=globalSearch-input]').type('Blackrock Alternative Advisors (BAA)').type('{enter}')
        cy.wait(2000)
        cy.get('[data-testid=table-row--2072719558] > .sc-gLonrw > :nth-child(1)').click();
        cy.wait(4000)
        //Check the details profile section loads
        cy.get('[data-testid=overviewPanel-heading]').should('be.visible')
         //Close the panel
        cy.get('[data-testid=infoDrawer-closeBtn] > .sc-jSgupP > svg > path').click()
    })
})