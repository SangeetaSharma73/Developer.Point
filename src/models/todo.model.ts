import mongoose, { Schema, Document } from 'mongoose';

export interface ITodo extends Document {
  title: string;
  description?: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'hard';
  dueData?: Date;
}

const TodoSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    completed: { type: Boolean },
    priority: { type: String, enum: ['low', 'medium', 'hard'] },
    dueDate: { type: Date }
  },
  {
    timestamps: true
  }
);

const Todo = mongoose.model<ITodo>('Todo', TodoSchema);

export default Todo;
