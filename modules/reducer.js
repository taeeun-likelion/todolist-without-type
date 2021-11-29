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
const initialTodo = [
  {
    id: 0,
    title: "initial todo",
    completed: false,
  },
];
export function todo(state = initialTodo, action) {
  switch (action.type) {
    case GET_TODO:
    case POST_TODO:
    case DEL_TODO:
    case EDIT_TODO:
    case COMPLETE_TODO:
      return state;
    case GET_TODO_SUCCESS:
      return state.concat(action.todos);
    case GET_TODO_FAIL:
      return action.error;
    case POST_TODO_SUCCESS:
      return state.concat(action.todos);
    case POST_TODO_FAIL:
      return action.error;
    case DEL_TODO_SUCCESS:
      return state.filter((item) => item.id !== action.id);
    case DEL_TODO_FAIL:
      return action.error;
    case EDIT_TODO_SUCCESS:
      return state.map((item) => ({
        ...item,
        title: item.id === action.todos.id ? action.todos.title : item.title,
      }));
    case EDIT_TODO_FAIL:
      return action.error;
    case COMPLETE_TODO_SUCCESS:
      return state.map((item) => ({
        ...item,
        completed: item.id === action.id ? !item.completed : item.completed,
      }));
    case COMPLETE_TODO_FAIL:
      return action.error;
    default:
      return state;
  }
}
