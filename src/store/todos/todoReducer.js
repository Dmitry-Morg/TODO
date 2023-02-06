import { ADD_TODO, REMOVE_TODO, TOGGLE_STATUS } from "./todos-actions";

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO: {
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          status: "NEW",
        },
      ];
    }
    case REMOVE_TODO: {
      return state.filter((todo) => todo.id !== action.id);
    }
    case TOGGLE_STATUS: {
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, status: action.status };
        }
        return todo;
      });
    }
    default: {
      return state;
    }
  }
};
