import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v1 } from "uuid";
import axios from "axios";
import Todo from "../components/Todo";
import { getTodos, postTodos } from "../modules/thunks";
const Home = () => {
  //const [todolist, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");
  const todolist = useSelector((state) => state.getTodo.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);
  const postTodoApi = async (todo) => {
    try {
      const res = await axios.post("http://localhost:3000/api/todoapi", todo);
      const data = res.data;
    } catch (e) {
      console.log(e);
    }
  };

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
      //setTodoList([...todolist, item]);
      dispatch(postTodos(item));
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
            return (
              // <Todo
              //   key={item.id}
              //   item={item}
              //   todolist={todolist}
              //   setTodoList={setTodoList}
              // />
              <div key={item.id}>{item.content}</div>
            );
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
