import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import the Jest DOM extension for custom matchers
import Home from '../components/Home';

// Mocking the name and city variables for testing purposes
const name = "Your Name";
const city = "Your City";

test("renders the h1 with the text 'Your Name is a Web Developer from Your City'", () => {
  render(<Home />);
  const expectedText = `${name} is a Web Developer from ${city}`;
  const h1 = screen.getByText((content, element) => {
    return element.tagName.toLowerCase() === 'h1' && content.includes(expectedText);
  });
  expect(h1).toBeInTheDocument();
  expect(h1.tagName).toBe("H1"); // check that the element is a <h1>
});