import styles from "./TodoFilter.module.css";
import TodoSearch from "./TodoSearch/TodoSearch.js";
import TodoShow from "./TodoShow/TodoShow.js";

function TodoFilter({ setShowFilter, setSearchText, showFilter }) {
  return (
    <div className={styles.todoFilterContainer}>
      <TodoSearch setSearchText={setSearchText} />
      <TodoShow setShowFilter={setShowFilter} showFilter={showFilter} />
    </div>
  );
}
export default TodoFilter;
