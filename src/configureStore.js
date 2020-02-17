import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";

import rootReducer from "./reducers";

const loggerMiddleware = createLogger();

export default function configureStore(preloadedState) {
  // returns redux store, holding complete state tree
  // createStore takes in reducer argument, preloadedState, enhancer
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  );
}
