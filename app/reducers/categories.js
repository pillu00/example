import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const fetchedCategories = createReducer({}, {
  [types.SET_FETCHED_CATEGORIES](state, action){
    let newState = {};
    action.categories.forEach((category) => {
      newState[category.id] = category
    });
    return newState;
  }
});

// export const categoryCount = createReducer(0, {
//   [types.SET_FETCHED_CATEGORIES](state, action){
//     return action.categories.length;
//   }
// });
