// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { v1 } from "uuid";
import { ITodoItem } from "..";
let todo: ITodoItem[] = [
  { id: v1(), content: "a", isCompleted: false },
  { id: v1(), content: "b", isCompleted: false },
  { id: v1(), content: "c", isCompleted: false },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { id, content, isCompleted } = req.body as ITodoItem;
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
