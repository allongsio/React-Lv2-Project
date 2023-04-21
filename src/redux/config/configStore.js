import { createStore } from "redux";
import { combineReducers } from "redux";
import list from "../modules/list";
import titleAndContent from "../modules/titleAndContent";
import id from "../modules/id";

const rootReducer = combineReducers({ list, titleAndContent, id });
const store = createStore(rootReducer);

export default store;
