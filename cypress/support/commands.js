
// verify the txt inside the locator and the css color
Cypress.Commands.add('verifyParagraphTxt', (txt, color) => {
    cy.get('.shg-rich-text p')
        .should('contain.text', txt)
    cy.get('.shg-rich-text p')
    .should('have.css', 'color', color)
})
// page header verification and the css color
Cypress.Commands.add('verifyHeader', (h, txt, color) => {
    cy.get(`.shogun-heading-component ${h}`)
        .contains(txt)
        cy.get(`.shogun-heading-component ${h}`)
        .should('have.css', 'color', color)
})
// Verify of Color
Cypress.Commands.add('verifyElementColor', (locator, color) => {
  cy.get(locator).should('have.css','color', color)
})


// Select the grade from the dropdown and navigate to it.
Cypress.Commands.add('navigateToGrade', (gradeLocator) => {
    // Click on dropdown to select grade
    cy.get('#SiteNavLabel-learning-resources-k-12')
        .click({ force: true })
    // Click on the grade 1 from the list
    cy.get(gradeLocator, { exact: true })
        .first()
        .click()
})

// Select the subject and verify the sytle
Cypress.Commands.add('selectSubject',(subjectID)=>{

    // Find the subject and will click on it
    cy.get(subjectID).should('have.attr', 'style', 'min-height: 340px; box-sizing: border-box;')
    cy.get('.shg-row').get(`${subjectID} a`).click()
    
})