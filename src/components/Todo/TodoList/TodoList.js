import styles from "./TodoList.module.css";
import TodoItem from "./TodoItem/TodoItem";
function TodoList({ todos, changeStatus, removeTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {todos.length > 0
        ? todos.map((todo) => (
            <TodoItem todo={todo} removeTodo={removeTodo} key={todo.id} changeStatus={changeStatus} />
          ))
        : ""}
    </div>
  );
}
export default TodoList;
