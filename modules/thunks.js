import axios from "axios";
import {
  GET_TODO,
  GET_TODO_SUCCESS,
  GET_TODO_FAIL,
  POST_TODO,
  POST_TODO_SUCCESS,
  POST_TODO_FAIL,
  DEL_TODO,
  DEL_TODO_SUCCESS,
  DEL_TODO_FAIL,
  EDIT_TODO,
  EDIT_TODO_SUCCESS,
  EDIT_TODO_FAIL,
  COMPLETE_TODO,
  COMPLETE_TODO_SUCCESS,
  COMPLETE_TODO_FAIL,
} from "./actions";
export const getTodoThunk = () => async (dispatch) => {
  dispatch({ type: GET_TODO });
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    const todos = res.data;
    dispatch({ type: GET_TODO_SUCCESS, todos });
  } catch (e) {
    dispatch({ type: GET_TODO_FAIL, error: e });
  }
};

export const postTodoThunk = (todo) => async (dispatch) => {
  dispatch({ type: POST_TODO });
  try {
    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      todo
    );
    const todos = res.data;
    //console.log(todos);
    dispatch({ type: POST_TODO_SUCCESS, todos });
  } catch (e) {
    dispatch({ type: POST_TODO_FAIL, error: e });
  }
};

export const delTodoThunk = (id) => async (dispatch) => {
  dispatch({ type: DEL_TODO });
  try {
    const res = await axios.delete(`http://localhost:3000/api/todo/${id}`, {
      data: { id: id },
    });
    const todos = res.data;
    dispatch({ type: DEL_TODO_SUCCESS, todos });
  } catch (e) {
    dispatch({ type: DEL_TODO_FAIL, error: e });
  }
};

export const editTodoThunk = (id, todo) => async (dispatch) => {
  dispatch({ type: EDIT_TODO });
  try {
    const res = await axios.patch(`http://localhost:3000/api/todo/${id}`, {
      id: id,
      content: todo,
    });
    const todos = res.data;
    dispatch({ type: EDIT_TODO_SUCCESS, todos });
  } catch (e) {
    dispatch({ type: EDIT_TODO_FAIL, error: e });
  }
};

export const completeTodoThunk = (id) => async (dispatch) => {
  dispatch({ type: COMPLETE_TODO });
  try {
    const todos = await todoAPI.completeTodo(id);
    dispatch({ type: COMPLETE_TODO_SUCCESS, todos });
    console.log(todos);
  } catch (e) {
    dispatch({ type: COMPLETE_TODO_FAIL, error: e });
  }
};
