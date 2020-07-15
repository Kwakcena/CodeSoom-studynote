import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import LoginPage from './LoginPage';

describe('LoginPage', () => {
  it('renders Log-In title', () => {
    const { container } = render((
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('Log In');
  })

  it('renders input controls', () => {
    const { getByLabelText } = render((
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    ))

    expect(getByLabelText('E-mail')).not.toBeNull();
  })
});
