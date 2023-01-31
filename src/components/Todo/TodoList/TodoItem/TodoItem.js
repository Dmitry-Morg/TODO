import styles from "./TodoItem.module.css";
import CheckBox from "../../../UI/CheckBox/CheckBox";
import { RiCloseFill } from "react-icons/ri";
import { BiSquareRounded } from "react-icons/bi";
import { BsFillPlayFill } from "react-icons/bs";
import DeleteButton from "../../../UI/DeleteButton/DeleteButton";
function TodoItem({ todo, removeTodo, changeStatus }) {
  const handleStatusDone = () => {
    if (todo.status === "DONE") {
      changeStatus(todo.id, "NEW");
    } else {
      changeStatus(todo.id, "DONE");
    }
  };
  return (
    <div className={styles.todoItemContainer}>
      <CheckBox checked={todo.status === "DONE"} onChange={handleStatusDone} />
      <span className={todo.status ? `${styles.todoItemText}` : `${styles.todoItemTextDone}`}>{todo.text}</span>
      {todo.status !== "DONE" &&
        (todo.status === "IN_PROGRESS" ? (
          <DeleteButton onClick={() => changeStatus(todo.id, "NEW")}>
            <BiSquareRounded />
          </DeleteButton>
        ) : (
          <DeleteButton onClick={() => changeStatus(todo.id, "IN_PROGRESS")}>
            <BsFillPlayFill />
          </DeleteButton>
        ))}

      <DeleteButton onClick={() => removeTodo(todo.id)}>
        <RiCloseFill />
      </DeleteButton>
    </div>
  );
}
export default TodoItem;
