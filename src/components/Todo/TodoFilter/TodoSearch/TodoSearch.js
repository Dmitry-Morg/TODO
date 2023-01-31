import styles from "./TodoSearch.module.css";
import Input from "../../../UI/Input";
import Button from "../../../UI/Button/Button";
import { useState } from "react";
function TodoSearch({ setSearchText }) {
  const [value,setValue] = useState('')
  const handleSearch = (e) => {
    e.preventDefault()
    setSearchText(value)
  }
  console.log(value)
  return (
    <form onSubmit={handleSearch} className={styles.todoSearchContainer}>
      <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Поиск..." />
      <Button  type="submit">Найти</Button>
    </form>
  );
}
export default TodoSearch;
