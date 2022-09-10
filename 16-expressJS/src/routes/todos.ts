import { Request, Response, NextFunction, Router } from 'express';

import { createTodo, editTodo, listTodos, deleteTodo } from '../constrollers/todos';

const router = Router();

router.post('/', createTodo)

router.get('/', listTodos)

router.patch('/:id', editTodo)

router.delete('/:id', deleteTodo)

export default router;