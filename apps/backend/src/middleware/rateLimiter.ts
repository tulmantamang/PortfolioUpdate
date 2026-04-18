import rateLimit from 'express-rate-limit';

/**
 * Login rate limiter — max 10 attempts per 15 minutes per IP.
 * Prevents brute-force attacks on the admin login endpoint.
 */
export const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: 'Too many login attempts. Please try again in 15 minutes.',
  },
});

/**
 * General API rate limiter — max 100 requests per minute per IP.
 */
export const apiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Rate limit exceeded. Please slow down.' },
});
