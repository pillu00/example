import * as types from './types';
import Api from '../lib/api';

export function fetchCategories(){
  return (dispatch, getState) => {
    return Api.get('/productlisting').then(resp => {
      dispatch(setFetchedCategories({categories : resp}));
    }).catch((ex) => {
      console.log(ex);
    })
  }
}

export function setFetchedCategories({categories}){
  return {
    type: types.SET_FETCHED_CATEGORIES,
    categories
  }
}
