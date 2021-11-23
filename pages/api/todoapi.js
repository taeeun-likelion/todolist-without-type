// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { v1 } from "uuid";
let todo = [
  { id: v1(), content: "a", isCompleted: false },
  { id: v1(), content: "b", isCompleted: false },
  { id: v1(), content: "c", isCompleted: false },
];

export default function handler(req, res) {
  const { id, content, isCompleted } = req.body;
  switch (req.method) {
    case "GET":
      return res.status(200).json(todo);
    case "POST":
      todo = todo.concat({ id, content, isCompleted });
      return res.status(200).json(todo);
    case "PATCH":
      todo = todo.map((item) => ({
        ...item,
        content: item.id === id ? content : item.content,
      }));
      return res.status(200).json(todo);
    case "DELETE":
      todo = todo.filter((item) => item.id !== id);
      return res.status(200).json(todo);
  }
}
