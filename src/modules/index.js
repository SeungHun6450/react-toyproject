import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { combineReducers } from "redux";
import ReduxThunk from "redux-thunk";
import logger from "redux-logger";
import posts from "./posts";

const rootReducer = combineReducers({
  posts,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(ReduxThunk, logger))
);

export default store;
