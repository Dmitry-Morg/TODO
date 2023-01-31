import styles from "./Todo.module.css";
import TodoForm from "./TodoForm/TodoForm.js";
import TodoFilter from "./TodoFilter/TodoFilter.js";
import TodoList from "./TodoList/TodoList.js";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Todo() {
  const [todos, setTodos] = useState([]);

  const initialShowFilter = {
    new: true,
    in_progress: true,
    done: true,
  };

  const [showFilter, setShowFilter] = useState(initialShowFilter);
  const [searchText, setSearchText] = useState("");

  const addTodo = (text) => {
    const newTask = {
      text: text,
      status: "NEW",
      id: uuidv4(),
    };
    setTodos([...todos, newTask]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const changeStatus = (id, status) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return { ...item, status: status };
        }
        return item;
      })
    );
  };

  const filteredTodos = todos
    .filter((todo) => {
      if (todo.status === "NEW") return showFilter.new;
      if (todo.status === "IN_PROGRESS") return showFilter.in_progress;
      if (todo.status === "DONE") return showFilter.done;
      return false;
    })
    .filter((item) => {
      return item.text.toLowerCase().includes(searchText.toLowerCase());
    });

  return (
    <div className={styles.todoContainer}>
      <h1 className={styles.todoTitle}>TODO</h1>
      <TodoForm addTodo={addTodo} />
      <TodoFilter
        setSearchText={setSearchText}
        filteredTodos={filteredTodos}
        setShowFilter={setShowFilter}
        showFilter={showFilter}
      />
      <TodoList todos={filteredTodos} removeTodo={removeTodo} changeStatus={changeStatus} />
    </div>
  );
}
export default Todo;
