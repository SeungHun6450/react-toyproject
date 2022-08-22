import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { combineReducers } from "redux";
import ReduxThunk from "redux-thunk";
import logger from "redux-logger";
import { getFinedustalaram } from "./finedustalarm";

const rootReducer = combineReducers({
  getFinedustalaram,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(ReduxThunk, logger))
);

export default store;
