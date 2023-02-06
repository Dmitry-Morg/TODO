import styles from "./TodoForm.module.css";
import Input from "../../UI/Input";
import Button from "../../UI/Button/Button";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../features/Todos/todos-slice";
import { useState } from "react";
function TodoForm() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      dispatch(addTodo(search));
    }
    setSearch("");
  };
  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={handleSubmit}>
        <Input value={search} type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Добавьте таск..." />
        <Button type="submit">Добавить</Button>
      </form>
    </div>
  );
}
export default TodoForm;
