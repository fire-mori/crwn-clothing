import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App', () => {
  render(<App />);
  const titleElement = screen.getByText('Hats');
  expect(titleElement).toBeInTheDocument();
});
