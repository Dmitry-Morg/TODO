import { NEW_FILTER, IN_PROGRESS_FILTER, DONE_FILTER } from "./filter-actions";

const initialState = {
  new: true,
  in_progress: true,
  done: true,
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_FILTER: {
      return { ...state, new: action.status };
    }
    case IN_PROGRESS_FILTER: {
      return { ...state, in_progress: action.status };
    }
    case DONE_FILTER: {
      return { ...state, done: action.status };
    }
    default: {
      return state;
    }
  }
};
