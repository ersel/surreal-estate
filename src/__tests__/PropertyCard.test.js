import React from 'react';
import { render, screen } from '@testing-library/react';
import PropertyCard from '../components/PropertyCard';

describe('Property Card', () => {
  const validProps = {
    title: 'Suburban Fixer Upper',
    type: 'terrace',
    bedrooms: 3,
    bathrooms: 1,
    price: 190000,
    city: 'Liverpool',
    email: 'taz@mail.com',
  };
  describe('Property Card renders items based on props', () => {
    beforeEach(() => render(<PropertyCard {...validProps} />));

    test('title', () => {
      expect(screen.getByText(/suburban fixer upper/i)).toBeInTheDocument();
    });
    test('type', () => {
      expect(screen.getByText(/terrace/)).toBeInTheDocument();
    });
    test('bedrooms', () => {
      expect(screen.getByText(/bedrooms: 3/i)).toBeInTheDocument();
    });
    test('bathrooms', () => {
      expect(screen.getByText(/bathrooms: 1/i)).toBeInTheDocument();
    });
    test('price', () => {
      expect(screen.getByText(/£190,000/)).toBeInTheDocument();
    });

    test('city', () => {
      expect(screen.getByText(/liverpool/i)).toBeInTheDocument();
    });

    test('email', () => {
      const button = screen.getByRole('button', { name: /email/i });
      expect(button).toBeInTheDocument();
      expect(button.closest('a')).toHaveAttribute(
        'href',
        expect.stringContaining('taz@mail.com')
      );
    });
  });
});
