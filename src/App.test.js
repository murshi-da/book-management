// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import { render, screen } from '@testing-library/react';
import App from './App';

// Test suite
test('renders learn react link', () => {
  // Render the App component
  render(<App />);
  
  // Query for the element with the text "learn react"
  const linkElement = screen.getByText(/learn react/i);
  
  // Assert that the element is in the document
  expect(linkElement).toBeInTheDocument();
});
