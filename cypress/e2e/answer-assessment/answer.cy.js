
import { CONSTANT } from '../../support/constants'

describe('Test Assessment TVO - Answer', () => {
    before(() => {
        cy.visit(CONSTANT.tvoURL)
    })

    // Below scenario will verify the home page 
    it('1. Verification of Landing page', () => {
        // Banner text should be visible
        cy.get(`img[alt="${CONSTANT.bannerTxt}"]`)
            .should('be.visible')
        // Home Page heading should be correct with correct CSS color
        cy.verifyHeader('h1', CONSTANT.mainPageHeader, 'rgb(2, 14, 53)')
        // Home page contain should be correct
        cy.verifyParagraphTxt(`${CONSTANT.mainPageContentTxtP1}`, 'rgb(61, 70, 73)')
        cy.verifyParagraphTxt(`${CONSTANT.mainPageContentTxtP2}`, 'rgb(61, 70, 73)')
        console.log('Navigation to Home page is successfully and verification passed');

    })

    // Below  scenario verify the grade 1 page 
    it('2. Navigate to Grade 1 Page perfrom UI verification', () => {
        // Click on dropdown to select grade
        cy.navigateToGrade('a[href="/pages/grade-1"]')

        // Grade 1 Header verification
        cy.verifyHeader('h1', CONSTANT.grade1Header, 'rgb(255, 255, 255)')
        // Grade 1 Paragraph content txt and color verification
        cy.verifyParagraphTxt(`${CONSTANT.grade1ContentTxt}`, 'rgb(61, 70, 73)')
        console.log('Navigation to selected grade page is successfully and verification passed');

    })

    // Below scenario verify the learn forward in the curriculum section
    it('3. Open Subject card verification card UI', () => {
        // Click on dropdown to select grade
        cy.navigateToGrade('a[href="/pages/grade-1"]')

        cy.get('.shogun-heading-component h2')
            .first()
            .scrollIntoView()

        // verify the header and the para text with CSS color verification
        cy.verifyHeader('h2', `${CONSTANT.forwardCurriculumSection}`, 'rgb(2, 14, 53)')
        cy.verifyParagraphTxt(`${CONSTANT.learnForwardParaTxt}`, 'rgb(61, 70, 73)')


        // Open the subject card and verify the style of card
        cy.selectSubject('#s-f9924085-cdf6-409f-b476-67d7c5a74702-root')

        // Verification On Subject Pages
        cy.verifyHeader('h1', `${CONSTANT.grade1}`, 'rgb(255, 255, 255)')
        cy.verifyHeader('h2', `${CONSTANT.mathTxt}`, 'rgb(255, 255, 255)')
        cy.verifyHeader('h3', `${CONSTANT.cardHeaderStrands}`, 'rgb(2, 14, 53)')

        // Jump to learning activity should navigate to learning activiy section
        cy.get('a[href="#jumpto-lesson-packs"]').click();
        cy.get('h2[class="head-fancy"]').should('be.visible')

        // By default Number is selected and highlighted

        cy.get('#tab0')
            .should('have.attr', 'class', 'tabd highlighted')

        // Click on Algrebra and verify the tab get the class highlighted
        cy.get('#tab1 > button')
            .click({force:true})
            
        cy.get('#tab1')
            .should('have.attr', 'class', 'tabd highlighted')

        // Number should not have class highlighted now
        cy.get('#tab0')
            .should('have.attr', 'class', 'tabd')

    })
})
