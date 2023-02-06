import { useDispatch, useSelector } from "react-redux";
import CheckBox from "../../../UI/CheckBox/CheckBox";
import styles from "./TodoShow.module.css";
import { changeNewFilter, changeInProgressFilter, changeDoneFilter } from "../../../../store/filters/filter-actions";

function TodoShow() {
  const dispatch = useDispatch()
  const show = useSelector(state => state.filter)
  return (
    <div className={styles.todoShowContainer}>
      <h4 className={styles.todoShowTitle}>Фильтр отображения задач:</h4>
      <div className={styles.todoShowCheckBox}>
        <CheckBox
          checked={show.new}
          text="Новые"
          onChange={(checked) => dispatch(changeNewFilter(checked))}
        />
        <CheckBox
          checked={show.in_progress}
          text="В процессе"
          onChange={(checked) => dispatch(changeInProgressFilter(checked))}
        />
        <CheckBox
          checked={show.done}
          text="Завершенные"
          onChange={(checked) => dispatch(changeDoneFilter(checked))}
        />
      </div>
    </div>
  );
}
export default TodoShow;
