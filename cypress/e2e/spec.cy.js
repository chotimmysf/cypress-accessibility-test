import React from 'react';
import ReactDOM from 'react-dom';
<reference types="cypress"/>

describe('template spec', () => {
  it('provides a report of WCAG failures', () => {
    cy.visit('https://www.sf.gov/');
    cy.injectAxe();
    cy.checkA11y();
  });

  it('excludes the SF Gov header from the WCAG check', () => {
    cy.visit('https://www.sf.gov/');
    cy.injectAxe();
    cy.checkA11y(null, { includedImpacts: ['critical', 'serious', 'medium'] })
  })
})