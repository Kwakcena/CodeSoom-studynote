import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';
import RestaurantContainer from './RestaurantContainer';

jest.mock('react-redux');
describe('RestaurantContainer', () => {
  beforeEach(() => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector(({
      restaurant: {
        id: 1,
        name: '마법사 주방',
        address: '서울시 강남구',
      },
    })));
  });

  it('renders name and address', () => {
    const { container } = render((
      <RestaurantContainer restaurantId="1" />
    ));

    expect(container).toHaveTextContent('마법사 주방');
    expect(container).toHaveTextContent('서울시');
  });
});
