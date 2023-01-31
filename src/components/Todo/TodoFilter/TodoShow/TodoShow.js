import CheckBox from "../../../UI/CheckBox/CheckBox";
import styles from "./TodoShow.module.css";

function TodoShow({ setShowFilter, showFilter }) {
  return (
    <div className={styles.todoShowContainer}>
      <h4 className={styles.todoShowTitle}>Фильтр отображения задач:</h4>
      <div className={styles.todoShowCheckBox}>
        <CheckBox
          checked={showFilter.new}
          text="Новые"
          onChange={(checked) => setShowFilter({ ...showFilter, new: checked })}
        />
        <CheckBox
          checked={showFilter.in_progress}
          text="В процессе"
          onChange={(checked) => setShowFilter({ ...showFilter, in_progress: checked })}
        />
        <CheckBox
          checked={showFilter.done}
          text="Завершенные"
          onChange={(checked) => setShowFilter({ ...showFilter, done: checked })}
        />
      </div>
    </div>
  );
}
export default TodoShow;
