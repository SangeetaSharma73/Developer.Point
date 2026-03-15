import { Router } from 'express';
import * as todoController from '../controllers/todo.controller';
const router = Router();

router.post('/', todoController.createTodo);
router.get('/', todoController.getTodo);
router.get('/', todoController.getTodoById);
router.put('/:id', todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);

export default router;
