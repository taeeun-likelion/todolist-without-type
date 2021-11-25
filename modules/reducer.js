import { v1 } from "uuid";
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
} from "./actions";
const initialTodo = [
  {
    id: v1(),
    content: null,
    isCompleted: false,
  },
];
export function todo(state = initialTodo, action) {
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
    case POST_TODO:
    case POST_TODO_SUCCESS:
      return {
        ...state,
        todos: action.todos,
      };
    case POST_TODO_FAIL:
      return action.error;
    case DEL_TODO:
    case DEL_TODO_SUCCESS:
      return {
        ...state,
        todos: action.todos,
      };
    case DEL_TODO_FAIL:
      return action.error;
    default:
      return state;
  }
}
