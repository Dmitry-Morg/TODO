import { useDispatch, useSelector } from "react-redux";
import CheckBox from "../../../UI/CheckBox/CheckBox";
import styles from "./TodoShow.module.css";
import { setNew, setProgress, setDone } from "../../../../features/Filters/filters-slice";

function TodoShow() {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.filters);
  return (
    <div className={styles.todoShowContainer}>
      <h4 className={styles.todoShowTitle}>Фильтр отображения задач:</h4>
      <div className={styles.todoShowCheckBox}>
        <CheckBox checked={show.new} text="Новые" onChange={(checked) => dispatch(setNew(checked))} />
        <CheckBox checked={show.in_progress} text="В процессе" onChange={(checked) => dispatch(setProgress(checked))} />
        <CheckBox checked={show.done} text="Завершенные" onChange={(checked) => dispatch(setDone(checked))} />
      </div>
    </div>
  );
}
export default TodoShow;
