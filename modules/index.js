import { combineReducers } from "redux";
import { getTodo, postTodo } from "./reducer";
const rootReducer = combineReducers({ getTodo, postTodo });

export default rootReducer;
