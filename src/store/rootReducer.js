import todosReducer from "./todos/todosReducer";
import userReducer from "./user/userReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ user: userReducer, todos: todosReducer });

export default rootReducer;
