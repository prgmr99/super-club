import { createStore, combineReducers } from "redux";
import recruit from "./modules/recruit";

const rootReducer = combineReducers({
  recruit,
});

const store = createStore(rootReducer);

export default store;
