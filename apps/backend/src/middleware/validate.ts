import { z } from 'zod';
import { Request, Response, NextFunction } from 'express';

/**
 * Factory: returns an Express middleware that validates req.body
 * against the provided Zod schema. Returns 400 if validation fails.
 */
export const validateBody =
  (schema: z.ZodSchema) =>
  (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({
        error: 'Validation failed',
        details: result.error.flatten().fieldErrors,
      });
    }
    req.body = result.data; // replace with parsed + coerced data
    next();
  };

// ── Schemas ────────────────────────────────────────────────────────────────────

export const projectSchema = z.object({
  title: z.string().min(1, 'Title is required').max(120),
  description: z.string().min(1, 'Description is required').max(2000),
  techStack: z.array(z.string()).optional().default([]),
  github: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  liveDemo: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  image: z.string().optional().default(''),
  category: z.string().optional().default('General'),
  featured: z.boolean().optional().default(false),
  year: z.number().int().min(2000).max(2100).optional(),
});

export const blogSchema = z.object({
  title: z.string().min(1).max(200),
  excerpt: z.string().max(500).optional(),
  content: z.string().min(1, 'Content is required'),
  tags: z.array(z.string()).optional().default([]),
  readTime: z.number().int().positive().optional().default(5),
  enabled: z.boolean().optional().default(true),
});

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000),
});

export const loginSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(1, 'Password is required'),
});
