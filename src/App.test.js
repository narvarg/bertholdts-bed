import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world text', () => {
  render(<App />);
  const screenText = screen.getByText("Hello World!");
  expect(screenText).toBeVisible();
});
