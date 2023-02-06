import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "@@todos",
  initialState: [],
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (text) => ({
        payload: {
          text,
          id: nanoid(),
          status: "NEW",
        },
      }),
    },
    removeTodo: (state, action) => {
      const id = action.payload;
      return state.filter((todo) => todo.id !== id);
    },
    changeStatus: (state,action) => {
      const id = action.payload.id;
         state.map((todo) => {
          if (todo.id === id) {
            todo.status = action.payload.status;
          }
          return todo;
        });
    }
  },
});
export const { addTodo, removeTodo, changeStatus } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
