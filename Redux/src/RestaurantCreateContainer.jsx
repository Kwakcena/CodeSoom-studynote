import React from 'react';

import { useDispatch } from 'react-redux';

import RestaurantForm from './RestaurantForm';

import {
  addRestaurant,
} from './actions';

export default function RestaurantCreateContainer() {
  const dispatch = useDispatch();
  function handleClick() {
    // TODO: dispatch
    dispatch(addRestaurant());
  }
  return (
    <RestaurantForm
      onClick={handleClick}
    />
  );
}
