import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../src/App.jsx';

describe('App', () => {
  it('renders GreetingForm and CardPreview', () => {
    render(<App />);
    expect(screen.getByText('Greeting Card Generator')).toBeInTheDocument();
  });
});