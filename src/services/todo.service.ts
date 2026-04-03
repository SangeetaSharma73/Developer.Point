import Todo, { ITodo } from '../models/todo.model';

export const createTodo = async (data: Partial<ITodo>) => {
  return await Todo.create(data);
};

export const updateTodo = async (id: string, data: Partial<ITodo>) => {
  return await Todo.findByIdAndUpdate(id, data, { new: true });
};

export const getTodos = async () => {
  return await Todo.find();
};

export const getTodoById = async (id: string) => {
  return await Todo.findById(id);
};

export const deleteTodo = async (id: string) => {
  return await Todo.findByIdAndDelete(id);
};
