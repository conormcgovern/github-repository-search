import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app bar', () => {
  render(<App />);
  const text = screen.getByText(/Repository Search/i);
  expect(text).toBeInTheDocument();
});
