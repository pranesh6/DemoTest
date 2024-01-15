import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Show expected output', () => {
  render(<App />);
  const element = screen.getByTestId('header-element');
  expect(element).toHaveTextContent('Expected Output');
});
