import { NextFunction, Request, Response } from 'express';
import { ZodSchema } from 'zod';

export const validate =
  (schema: ZodSchema) =>
  (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      res.status(400).json({
        success: false,
        message: 'Validation Error',
        errors: result.error.issues.map((err) => ({
          field: err.path[0],
          message: err.message
        }))
      });
      return;
    }

    next();
  };
