import reducer from './reducer';

import {
  setRestaurants,
  changeRestaurantField,
  addRestaurant,
} from './actions';
import restaurants from '../fixtures/restaurants';

describe('reducer', () => {
  describe('setRestaurants', () => {
    it('change restaurants array', () => {
      const initialState = {
        restaurants: [],
      };
      const state = reducer(initialState, setRestaurants(restaurants));
      expect(state.restaurants).not.toHaveLength(0);
    });
  });

  describe('changeRestaurantField', () => {
    it('change restaurant form', () => {
      const initialState = {
        restaurant: {
          name: '이름',
          category: '분류',
          address: '주소',
        },
      };
      const state = reducer(initialState, changeRestaurantField({
        name: 'name',
        value: '마법사주방',
      }));
      expect(state.restaurant.name).toBe('마법사주방');
    });
  });

  describe('addRestaurant', () => {
    it('appends restaurant into restaurants and clear restaurant form', () => {
      const initialState = {
        newId: 101,
        restaurants: [],
        restaurant: {
          name: '마법사주방',
          category: '이탈리안',
          address: '서울시 강남구 역삼동',
        },
      };
      const state = reducer(initialState, addRestaurant());
      expect(state.restaurants).toHaveLength(1);
      expect(state.restaurant.id).toBe(101);
      expect(state.restaurant.name).toBe('');
      expect(state.restaurant.newId).toBe(102);
    });
  });
});
