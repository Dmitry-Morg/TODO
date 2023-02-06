import styles from "./TodoFilter.module.css";
import TodoSearch from "./TodoSearch/TodoSearch.jsx";
import TodoShow from "./TodoShow/TodoShow.jsx";

function TodoFilter({ setSearchText }) {
  return (
    <div className={styles.todoFilterContainer}>
      <TodoSearch setSearchText={setSearchText} />
      <TodoShow />
    </div>
  );
}
export default TodoFilter;
