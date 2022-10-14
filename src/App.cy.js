import React from 'react';
import App from './App';

const CORRECT_TEXT = "src/App.js";
const INCORRECT_TEXT = "src/App.jsx";

// const TEXT = CORRECT_TEXT;
const TEXT = INCORRECT_TEXT;

describe('shows failing assertion', () => {
  it('cy.get', () => {
    cy.mount(<App/>);
    cy.get('[data-testid="code"]');
    cy.get('[data-testid="yeet"]');
  })

  it('cy.find', () => {
    cy.mount(<App/>);
    cy.get("header").find("code").contains(TEXT);
  })
})

describe('does not show failing assertion', () => {
  it('cy.findByText', () => {
    cy.mount(<App/>);
    cy.findByText(TEXT);
  })

  it('cy.findByTestId', () => {
    cy.mount(<App/>);
    cy.findByTestId("code");
    cy.findByTestId("yeet");
  })
})
