import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import mongoose from 'mongoose';
import contactRoutes from './routes/contactRoutes.js';
import { errorHandler } from './utils/asyncHandler.js';
import { apiLimiter } from './middleware/rateLimiter.js';

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 5000;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';

// ── Security headers ──────────────────────────────────────────────────────────
app.use(helmet());

// ── CORS ──────────────────────────────────────────────────────────────────────
app.use(cors({
  origin: [FRONTEND_URL, 'http://localhost:3000', 'http://localhost:3001'],
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

// ── Body parsers ──────────────────────────────────────────────────────────────
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// ── General API rate limiter ──────────────────────────────────────────────────
app.use('/api', apiLimiter);

// ── Routes ────────────────────────────────────────────────────────────────────
app.use('/api/contacts', contactRoutes);


// Health check
app.get('/ping', (_req, res) =>
  res.json({ ok: true, timestamp: new Date().toISOString() })
);

// ── Global error handler ──────────────────────────────────────────────────────
app.use(errorHandler);

// ── Startup ───────────────────────────────────────────────────────────────────
const startServer = async () => {
  if (process.env.MONGODB_URI) {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('✅ MongoDB connected');
    } catch (err) {
      console.error('❌ MongoDB connection error:', err);
      process.exit(1);
    }
  } else {
    console.warn('⚠️  MONGODB_URI not set — starting without database');
  }

  app.listen(PORT, () =>
    console.log(`🚀 Backend listening on http://localhost:${PORT}`)
  );
};

startServer();
