import { RequestHandler } from "express";

import { Todo } from "../models/todo";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const todoText = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), todoText);

  TODOS.push(newTodo);

  res.status(201).json({ message: 'todo created', created: newTodo })
}

export const listTodos: RequestHandler = (req, res, next) => {
  res.status(200).json({ message: 'todo list', list: TODOS })
}

export const editTodo: RequestHandler = (req, res, next) => {
  const todoId = req.params.id as string;
  const editTodo = TODOS.find(({ id }) => todoId === id);
  if (!editTodo) return next('Todo not found');
  const todoText = (req.body as { text: string }).text;
  TODOS[TODOS.indexOf(editTodo)].text = todoText;

  res.status(201).json({ message: 'todo edited', edited: todoText })
}

export const deleteTodo: RequestHandler = (req, res, next) => {
  const todoId = req.params.id as string;
  const deleteTodo = TODOS.find(({ id }) => todoId === id);
  if (!deleteTodo) return next('Todo not found');
  TODOS.splice(TODOS.indexOf(deleteTodo), 1);

  res.status(200).json({ message: 'todo deleted' })
}