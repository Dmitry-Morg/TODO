export const filters = (state) =>
  state.todos.filter((todo) => {
    if (todo.status === "NEW") return state.filters.new;
    if (todo.status === "IN_PROGRESS") return state.filters.in_progress;
    if (todo.status === "DONE") return state.filters.done;
    return false;
  });
