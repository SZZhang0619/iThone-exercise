import * as insuredForm from '../fixtures/insured-form.json'

describe('Insured Form', () => {
  beforeEach(() => {
    cy.visit('');
  });

  it('have title "Reactive Forms 實作 ─ 被保險人', () => {
    // Arrange
    const title = 'Reactive Forms 實作 ─ 被保險人'
    // Assert
    cy.get('h1').should('have.text', title);
  });

  it('should can add the insured', () => {
    // Arrange
    const name = insuredForm.name;
    const gender = insuredForm.gender;
    const age = insuredForm.age;
    // Act
    cy.get('[type="button"]').click();
    cy.get('#name-0').type(name);
    cy.get(`[for="${gender}-0"]`).click();
    cy.get('#age-0').select(age);
    // Assert
    cy.get('[type="submit"]').should('be.enabled');
  });

  it('should can delete the insured', () => {
    // Act
    cy.get('[type="button"]').click();
    cy.get('fieldset').contains('刪除').click();
    // Assert
    cy.get('fieldset').should('have.length',0);
  });

  it('should can not add the insured when the age is not valid', () => {
    // Arrange
    const name = insuredForm.name;
    const gender = insuredForm.gender;
    // Act
    cy.get('[type="button"]').click();
    cy.get('#name-0').type(name);
    cy.get(`[for="${gender}-0"]`).click();
    // Assert
    cy.get('[type="submit"]').should('be.disabled');
  });

  it('should can not add the insured when the gender is not valid', () => {
    // Arrange
    const name = insuredForm.name;
    const age = insuredForm.age;
    // Act
    cy.get('[type="button"]').click();
    cy.get('#name-0').type(name);
    cy.get('#age-0').select(age);
    // Assert
    cy.get('[type="submit"]').should('be.disabled');
  });

  it('should can not add the insured when the name is not valid', () => {
    // Arrange
    const gender = insuredForm.gender;
    const age = insuredForm.age;
    // Act
    cy.get('[type="button"]').click();
    cy.get(`[for="${gender}-0"]`).click();
    cy.get('#age-0').select(age);
    // Assert
    cy.get('[type="submit"]').should('be.disabled');
  });



})
