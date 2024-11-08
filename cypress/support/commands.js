// verify the txt inside the locator and the css color
Cypress.Commands.add('verifyParagraphTxt', (txt, color) => {
    cy.get('.shg-rich-text p')
        .should('contain.text', txt)
    expect(cy.get('.shg-rich-text p'))
    .toHaveCSS('color', color)
})
// page header verification and the css color
Cypress.Commands.add('verifyHeader', (h, txt, color) => {
    cy.get(`.shogun-heading-component ${h}`)
        .contains(txt)
        expect(cy.get(`.shogun-heading-component ${h}`))
        .toHaveCSS('color', color)
})
// Verify of Color
Cypress.Commands.add('verifyElementColor', (locator, color) => {
    expect(cy.get(locator)).toHaveCSS('color', color)
})

Cypress.Commands.add('navigateToGrade', (gradeLocator) => {
    // Click on dropdown to select grade
    cy.get('#SiteNavLabel-learning-resources-k-12')
        .click({ force: true })
    // Click on the grade 1 from the list
    cy.get(gradeLocator, { exact: true })
        .first()
        .click()
})