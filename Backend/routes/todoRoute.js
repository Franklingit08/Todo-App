import express from 'express'
import { createTodo, deleteTodo, getTodoById, getTodos, updateTodo } from '../controllers/todoController.js';

const todoRoute = express.Router();

todoRoute.post('/create-todo', createTodo);

todoRoute.get('/getTodos', getTodos);

todoRoute.delete('/:id', deleteTodo);

todoRoute.patch('/update',updateTodo);

todoRoute.get('/getTodoById', getTodoById);

export default todoRoute;