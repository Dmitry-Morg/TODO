import styles from "./TodoItem.module.css";
import CheckBox from "../../../UI/CheckBox/CheckBox";
import { RiCloseFill } from "react-icons/ri";
import { BiSquareRounded } from "react-icons/bi";
import { BsFillPlayFill } from "react-icons/bs";
import DeleteButton from "../../../UI/DeleteButton/DeleteButton";
import { useDispatch } from "react-redux";
import { changeStatus, removeTodo } from "../../../../features/Todos/todos-slice";
function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const handleStatusDone = () => {
    if (todo.status === "DONE") {
      dispatch(changeStatus({id:todo.id, status:"NEW"}));
    } else {
      dispatch(changeStatus({id:todo.id, status:"DONE"}));
    }
  };
  return (
    <div className={styles.todoItemContainer}>
      <CheckBox checked={todo.status === "DONE"} onChange={handleStatusDone} />
      <span className={todo.status ? `${styles.todoItemText}` : `${styles.todoItemTextDone}`}>{todo.text}</span>
      {todo.status !== "DONE" &&
        (todo.status === "IN_PROGRESS" ? (
          <DeleteButton onClick={() => dispatch(changeStatus({id:todo.id, status:"NEW"}))}>
            <BiSquareRounded />
          </DeleteButton>
        ) : (
          <DeleteButton onClick={() => dispatch(changeStatus({id:todo.id, status:"IN_PROGRESS"}))}>
            <BsFillPlayFill />
          </DeleteButton>
        ))}

      <DeleteButton onClick={() => dispatch(removeTodo(todo.id))}>
        <RiCloseFill />
      </DeleteButton>
    </div>
  );
}
export default TodoItem;
