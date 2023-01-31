import styles from "./TodoForm.module.css";
import Input from "../../UI/Input";
import Button from "../../UI/Button/Button";
import { useState } from "react";
function TodoForm({ addTodo }) {
  const [text, setText] = useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (text) {
      addTodo(text);
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
