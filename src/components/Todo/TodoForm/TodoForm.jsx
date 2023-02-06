import styles from "./TodoForm.module.css";
import Input from "../../UI/Input";
import Button from "../../UI/Button/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../store/todos/todos-actions";
import { v4 as uuidv4 } from "uuid";
function TodoForm() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(addTodo(text, uuidv4()));
      setText("");
    }
  };
  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <Input value={text} onChange={(e) => setText(e.target.value)} placeholder="Добавьте таск..." />
        <Button type="submit">Добавить</Button>
      </form>
    </div>
  );
}
export default TodoForm;
