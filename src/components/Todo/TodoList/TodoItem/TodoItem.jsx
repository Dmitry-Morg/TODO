import styles from "./TodoItem.module.css";
import CheckBox from "../../../UI/CheckBox/CheckBox";
import { RiCloseFill } from "react-icons/ri";
import { BiSquareRounded } from "react-icons/bi";
import { BsFillPlayFill } from "react-icons/bs";
import DeleteButton from "../../../UI/DeleteButton/DeleteButton";
import { useDispatch } from "react-redux";
import { removeTodo,toggleStatus } from "../../../../store/todos/todos-actions";
function TodoItem({ todo, changeStatus }) {
  const dispatch = useDispatch()
  const handleStatusDone = () => {
    if (todo.status === "DONE") {
      dispatch(toggleStatus(todo.id, "NEW"));
    } else {
      dispatch(toggleStatus(todo.id, "DONE"))
    }
  };
  return (
    <div className={styles.todoItemContainer}>
      <CheckBox checked={todo.status === "DONE"} onChange={handleStatusDone} />
      <span className={todo.status ? `${styles.todoItemText}` : `${styles.todoItemTextDone}`}>{todo.text}</span>
      {todo.status !== "DONE" &&
        (todo.status === "IN_PROGRESS" ? (
          <DeleteButton onClick={() =>   dispatch(toggleStatus(todo.id, "NEW"))}>
            <BiSquareRounded />
          </DeleteButton>
        ) : (
          <DeleteButton onClick={() => dispatch(toggleStatus(todo.id, "IN_PROGRESS"))}>
            <BsFillPlayFill />
          </DeleteButton>
        ))}

      <DeleteButton
      onClick={() => dispatch(removeTodo(todo.id))}>
        <RiCloseFill />
      </DeleteButton>
    </div>
  );
}
export default TodoItem;
