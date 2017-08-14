import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import {createLogger} from 'redux-logger'
import getRootReducer from "./reducers";

// middleware that logs actions
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });

export default function getStore(navReducer) {

  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware,
    ),
  );

  const store = createStore(
    getRootReducer(navReducer),
    {},
    enhancer
  );

  return store;
}
