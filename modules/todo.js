import * as todoAPI from "../pages/api/todoapi";
import { v1 } from "uuid";

//action type
const GET_TODO = "GET_TODO";
const GET_TODO_SUCCESS = "GET_TODO_SUCCESS";
const GET_TODO_FAIL = "GET_TODO_FAIL";

//action creator
export const getTodos = () => async (dispatch) => {
  dispatch({ type: GET_TODO });
  try {
    const todos = await todoAPI.getTodos();
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
export default function todo(state = initialTodo, action) {
  switch (action.type) {
    case GET_TODO:
    case GET_TODO_SUCCESS:
      //add todo
      return {
        ...state,
        todos: action.todos,
      };
    default:
      return state;
  }
}
