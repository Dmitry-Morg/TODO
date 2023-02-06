import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./features/Filters/filters-slice";
import { todoReducer } from "./features/Todos/todos-slice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    filters: filterReducer
  },
  devTools: true
})