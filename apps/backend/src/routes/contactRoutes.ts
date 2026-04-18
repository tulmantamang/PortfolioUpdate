import express from 'express';
import {
  createContact,
} from '../controllers/contactController.js';
import { validateBody, contactSchema } from '../middleware/validate.js';

const router = express.Router();

// Public — submit form
router.post('/', validateBody(contactSchema), createContact);

export default router;
