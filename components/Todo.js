import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  completeTodoThunk,
  delTodoThunk,
  editTodoThunk,
} from "../modules/thunks";
import indexStyles from "../styles/index.module.css";
export default function Todo({ item }) {
  const { id, title, completed } = item;
  const [newTodo, setNewTodo] = useState("");
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const onHandleInputChange = (e) => {
    setNewTodo(e.target.value);
  };
  const deleteTodo = (id) => {
    dispatch(delTodoThunk(id));
  };
  const completeTodo = (id) => {
    dispatch(completeTodoThunk(id));
  };
  const onEditTodoClick = () => {
    setEdit(!edit);
  };
  const editTodo = (id) => {
    if (newTodo) {
      dispatch(editTodoThunk(id, newTodo));
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
        <li className={completed ? indexStyles.completed : ""}>{title}</li>
      )}
      <button onClick={() => deleteTodo(id)}>Delete Todo</button>
      {edit ? (
        <button onClick={() => editTodo(id)}>Edit</button>
      ) : (
        <button onClick={() => onEditTodoClick()}>Edit Todo</button>
      )}
      <button onClick={() => completeTodo(id)}>Completed</button>
    </div>
  );
}
