import isLogged from "./isLogged";
import Counter from "./counter";
import { combineReducers } from "redux";

const store = combineReducers({
  login: isLogged,
  counter: Counter,
});
export default store;
