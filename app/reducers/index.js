import {combineReducers} from 'redux';
import * as categoriesReducers from './categories';
import * as productsReducers from './products';
import {navigationReducer} from './navigation';

export default combineReducers(Object.assign(
  navigationReducer,
  categoriesReducers,
  productsReducers,
));
