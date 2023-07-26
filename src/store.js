import { createStore, combineReducers, applyMiddleware } from "redux";
import recruit from "./modules/recruit";
import upload from "./modules/upload";
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";

const logger = createLogger();

const rootReducer = combineReducers({
  recruit,
  upload,
});

const store = createStore(rootReducer, applyMiddleware(logger, ReduxThunk));

export default store;
