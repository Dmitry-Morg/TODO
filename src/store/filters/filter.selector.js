export const filters = (state) =>
  state.todos.filter((todo) => {
    if (todo.status === "NEW") return state.filter.new;
    if (todo.status === "IN_PROGRESS") return state.filter.in_progress;
    if (todo.status === "DONE") return state.filter.done;
    return false;
  });
