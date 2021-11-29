import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v1 } from "uuid";
import Todo from "../components/Todo";
import { getTodoThunk, postTodoThunk } from "../modules/thunks";
const Home = () => {
  const [todo, setTodo] = useState("");
  const todolist = useSelector((state) => state.todo);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodoThunk());
  }, [dispatch]);
  const onHandleInputChange = (e) => {
    setTodo(e.target.value);
  };
  const addTodo = () => {
    const item = {
      id: v1(),
      title: todo,
      completed: false,
    };
    if (todo) {
      dispatch(postTodoThunk(item));
    }
    setTodo("");
  };
  return (
    <>
      <header>
        <div>Todolist</div>
        <input
          placeholder="todo 입력하기"
          value={todo}
          onChange={onHandleInputChange}
        />
        <button onClick={() => addTodo()}>Add Todo</button>
      </header>
      <ul>
        {todolist && //undefined일 때  대비
          todolist.map((item) => {
            return <Todo key={item.id} item={item} todolist={todolist} />;
          })}
      </ul>
    </>
  );
};
export default Home;
