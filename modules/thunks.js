import axios from "axios";
import {
  GET_TODO,
  GET_TODO_SUCCESS,
  GET_TODO_FAIL,
  POST_TODO,
  POST_TODO_SUCCESS,
  POST_TODO_FAIL,
} from "./actions";
export const getTodoThunk = () => async (dispatch) => {
  dispatch({ type: GET_TODO });
  try {
    const req = await axios.get("http://localhost:3000/api/todoapi");
    const todos = req.data;
    dispatch({ type: GET_TODO_SUCCESS, todos });
  } catch (e) {
    dispatch({ type: GET_TODO_FAIL, error: e });
  }
};

export const postTodoThunk = (todo) => async (dispatch) => {
  dispatch({ type: POST_TODO });
  try {
    const req = axios.post("http://localhost:3000/api/todoapi", todo);
    const todos = req.data;
    dispatch({ type: POST_TODO_SUCCESS, todos });
  } catch (e) {
    dispatch({ type: POST_TODO_FAIL, error: e });
  }
};
