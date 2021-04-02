import React from 'react';
import { render, screen } from '@testing-library/react';
import Alert from '../components/Alert';

describe('Alert', () => {
  test('it displays an error message', () => {
    const { asFragment } = render(<Alert message="Error!" isSuccess={false} />);
    expect(screen.getByText('Error!')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  test('it displays a success message', () => {
    const { asFragment } = render(
      <Alert message="Property added." isSuccess />
    );
    expect(screen.getByText('Property added.')).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });

  test('it does not render when there is no alert message', () => {
    const { asFragment } = render(<Alert message="" isSuccess={false} />);
    const alert = asFragment();
    expect(alert).toMatchSnapshot();
  });
});
