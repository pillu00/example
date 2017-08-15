import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import {createLogger} from 'redux-logger'
import reducer from './reducers';

// middleware that logs actions
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });

export default function getStore() {

  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware,
    ),
  );

  const store = createStore(
    reducer,
    {},
    enhancer
  );

  return store;
}
