import { RequestHandler } from "express";

import { Todo } from "../models/todo";

const TODOS: Todo[] = [];
let id = 1;

export const createTodo: RequestHandler = (req, res, next) => {
  const todoText = (req.body as { text: string }).text;
  const newTodo = new Todo(id.toString(), todoText);
  id += 1;

  TODOS.push(newTodo);

  res.status(201).json({ message: 'todo created', created: newTodo })
}

export const listTodos: RequestHandler = (req, res, next) => {
  res.status(200).json({ message: 'todo list', list: TODOS })
}

export const editTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;
  const editIndex = TODOS.findIndex(({ id }) => todoId === id);

  if (editIndex === -1) return next('Todo not found');

  const todoText = (req.body as { text: string }).text;
  TODOS[editIndex].text = todoText;

  res.status(201).json({ message: 'todo edited', edited: todoText })
}

export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;
  const deleteIndex = TODOS.findIndex(({ id }) => todoId === id);

  if (deleteIndex === -1) return next('Todo not found');
  
  TODOS.splice(deleteIndex, 1);

  res.status(200).json({ message: 'todo deleted' })
}