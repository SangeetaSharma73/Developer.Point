import Todo, { ITodo } from '../models/todo.model';

export const createTodo = (data: Partial<ITodo>): Promise<ITodo> => {
  return Todo.create(data);
};

export const updateTodo = (id: string, data: Partial<ITodo>): Promise<ITodo | null> => {
  return Todo.findByIdAndUpdate(id, data, { new: true });
};

export const getTodos = (): Promise<ITodo[]> => {
  return Todo.find();
};

export const getTodoById = (id: string): Promise<ITodo | null> => {
  return Todo.findById(id);
};

export const deleteTodo = (id: string): Promise<ITodo | null> => {
  return Todo.findByIdAndDelete(id);
};
