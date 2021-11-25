import * as todoAPI from "../pages/api/todoapi";
import { v1 } from "uuid";
import axios from "axios";

//action type
const GET_TODO = "GET_TODO";
const GET_TODO_SUCCESS = "GET_TODO_SUCCESS";
const GET_TODO_FAIL = "GET_TODO_FAIL";

//action creator
export const getTodos = () => async (dispatch) => {
  dispatch({ type: GET_TODO });
  try {
    const req = await axios.get("http://localhost:3000/api/todoapi");
    const todos = req.data;
    dispatch({ type: GET_TODO_SUCCESS, todos });
  } catch (e) {
    dispatch({ type: GET_TODO_FAIL, error: e });
  }
};

//initial state
const initialTodo = [
  {
    id: v1(),
    content: null,
    isCompleted: false,
  },
];
//reducer
export default function getTodo(state = initialTodo, action) {
  switch (action.type) {
    case GET_TODO:
    case GET_TODO_SUCCESS:
      //add todo
      return {
        ...state,
        todos: action.todos,
      };
    case GET_TODO_FAIL:
      return action.error;
    default:
      return state;
  }
}
