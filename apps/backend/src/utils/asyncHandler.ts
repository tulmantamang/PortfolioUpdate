import { Request, Response, NextFunction } from 'express';

type AsyncFn = (req: Request, res: Response, next: NextFunction) => Promise<any>;

/**
 * Wraps an async Express handler to forward errors to the global error handler.
 * Eliminates boilerplate try/catch in every controller.
 */
export const asyncHandler =
  (fn: AsyncFn) =>
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };

/**
 * Global Express error-handling middleware.
 * Register LAST in the middleware chain with app.use(errorHandler).
 */
export const errorHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  const status = err.status || err.statusCode || 500;
  const message =
    process.env.NODE_ENV === 'production' && status === 500
      ? 'Internal Server Error'
      : err.message || 'Something went wrong';

  if (status === 500) {
    console.error('Unhandled error:', err);
  }

  res.status(status).json({ error: message });
};
