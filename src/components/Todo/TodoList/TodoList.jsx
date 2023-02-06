import styles from "./TodoList.module.css";
import TodoItem from "./TodoItem/TodoItem";
function TodoList({ todos}) {
  return (
    <div className={styles.todoListContainer}>
      {todos.length > 0
        ? todos.map((todo) => (
            <TodoItem todo={todo} key={todo.id} />
          ))
        : ""}
    </div>
  );
}
export default TodoList;
