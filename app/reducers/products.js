import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const fetchedProducts = createReducer({}, {
  [types.SET_FETCHED_PRODUCTS](state, action){
    let newState = {};
    action.products.forEach((product) => {
      newState[product.id] = product
    });
    return newState;
  }
});
