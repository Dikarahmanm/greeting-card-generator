import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import GreetingForm from '../src/components/GreetingForm.jsx';

describe('Minimal Test', () => {
  it('renders GreetingForm', () => {
    render(<GreetingForm />);
    expect(screen.getByLabelText('Upload Template Image')).toBeInTheDocument();
  });
});