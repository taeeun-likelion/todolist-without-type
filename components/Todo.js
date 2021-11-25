import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import indexStyles from "../styles/index.module.css";
export default function Todo({ item, todolist, setTodoList }) {
  const [newTodo, setNewTodo] = useState("");
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const editTodoApi = async (id, newTodo) => {
    try {
      const res = axios.patch("http://localhost:3000/api/todoapi", {
        id: id,
        content: newTodo,
      });
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  const onHandleInputChange = (e) => {
    setNewTodo(e.target.value);
  };
  const deleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };
  const completeTodo = (id) => {
    const newTodoList = todolist.map((todo) => ({
      ...todo,
      isCompleted: todo.id === id ? !todo.isCompleted : todo.isCompleted,
    }));
    setTodoList(newTodoList);
  };
  const onEditTodoClick = () => {
    setEdit(!edit);
  };
  const editTodo = (id) => {
    const newTodoList = todolist.map((item) => ({
      ...item,
      content: item.id === id ? newTodo : item.content,
    }));
    if (newTodo) {
      setTodoList(newTodoList);
      editTodoApi(id, newTodo);
    }
    setNewTodo("");
    setEdit(!edit);
  };
  return (
    <div>
      {edit ? (
        <input
          placeholder="todo 입력하기"
          value={newTodo}
          onChange={onHandleInputChange}
        />
      ) : (
        <li className={item.isCompleted ? indexStyles.completed : ""}>
          {item.content}
        </li>
      )}
      <button onClick={() => deleteTodo(item.id)}>Delete Todo</button>
      {edit ? (
        <button onClick={() => editTodo(item.id)}>Edit</button>
      ) : (
        <button onClick={() => onEditTodoClick()}>Edit Todo</button>
      )}
      <button onClick={() => completeTodo(item.id)}>Completed</button>
    </div>
  );
}
