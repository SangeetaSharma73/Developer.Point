import express from 'express';
import routes from './routes';
import todoRoutes from './routes/todo.route';
const app = express();

app.use(express.json());

app.use('/api', routes);
app.use('/api/todos', todoRoutes);

export default app;
