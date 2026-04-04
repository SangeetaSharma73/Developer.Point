import { Request, Response } from 'express';

export const healthCheck = (_req: Request, res: Response): void => {
  res.json({
    message: 'Server is running'
  });
};
