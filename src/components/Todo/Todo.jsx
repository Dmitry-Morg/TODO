import styles from "./Todo.module.css";
import TodoForm from "./TodoForm/TodoForm.jsx";
import TodoFilter from "./TodoFilter/TodoFilter.jsx";
import TodoList from "./TodoList/TodoList.jsx";
import { useSelector } from "react-redux";
import { useState } from "react";
import { filters } from "../../features/Filters/filter-selector";
function Todo() {
  const [searchText, setSearchText] = useState("");
  const filteredTodos = useSelector(filters).filter((item) => {
    return item.text.toLowerCase().includes(searchText.toLowerCase());
  });
  return (
    <div className={styles.todoContainer}>
      <h1 className={styles.todoTitle}>TODO</h1>
      <TodoForm />
      <TodoFilter setSearchText={setSearchText} />
      <TodoList todos={filteredTodos} />
    </div>
  );
}
export default Todo;
