export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_STATUS = "TOGGLE_STATUS";

export const addTodo = (text, id) => ({
  type: ADD_TODO,
  id,
  text,
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id,
});

export const toggleStatus = (id, status) => ({
  type: TOGGLE_STATUS,
  id,
  status,
});
