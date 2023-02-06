import { combineReducers } from "redux";
import { todoReducer } from "./todos/todoReducer";
import { filterReducer } from "./filters/filterReducer";
export const rootReducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer,
});
