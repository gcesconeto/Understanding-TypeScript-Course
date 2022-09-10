import { RequestHandler } from "express";

import { Todo } from "../models/todo";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const todoText = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), todoText);

  TODOS.push(newTodo);

  res.status(201).json({ message: 'todo created', created: newTodo })
}
