import dotenv from 'dotenv';
import express from 'express';
import passport from 'passport';

import { errorMiddleware } from './middleware/error.middleware';
import authRoutes from './routes/auth.route';
import routes from './routes/index';
import todoRoutes from './routes/todo.route';
dotenv.config();

import './config/passport'; // just execute file

const app = express();

app.use(express.json());
app.use(passport.initialize()); // ✅ REQUIRED
app.use('/api', routes);
app.use('/api/todos', todoRoutes);

app.use('/api/auth', authRoutes);

app.get('/', (_req, res): void => {
  res.send('Api is working ...');
});

// ✅ Error middleware MUST be last
app.use(errorMiddleware);

export default app;
