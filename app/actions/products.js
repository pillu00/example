import * as types from './types';
import Api from '../lib/api';

export function fetchProducts(categoryId){
  const route = '/productlisting/' + categoryId;
  return (dispatch, getState) => {
    return Api.get(route).then(resp => {
      dispatch(setFetchedProducts({products : resp}));
    }).catch((ex) => {
      console.log(ex);
    })
  }
}

export function setFetchedProducts({products}){
  return {
    type: types.SET_FETCHED_PRODUCTS,
    products
  }
}
