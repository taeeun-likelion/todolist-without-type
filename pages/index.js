import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v1 } from "uuid";
import Todo from "../components/Todo";
import { getTodoThunk, postTodoThunk } from "../modules/thunks";
const Home = () => {
  //const [todolist, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");
  const todolist = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    if (todolist) return;
    dispatch(getTodoThunk());
  }, [todolist, dispatch]);
  const onHandleInputChange = (e) => {
    setTodo(e.target.value);
  };
  const addTodo = () => {
    const item = {
      id: v1(),
      content: todo,
      isCompleted: false,
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
            return <Todo key={item.id} item={item} />;
          })}
      </ul>
    </>
  );
};
// export async function getStaticProps() {
//   const res = await axios.get("http://localhost:3000/api/todoapi");
//   const data = await res.data;
//   console.log(res, data);
//   return { props: { data } };
// }
export default Home;
