import Contact from '../models/Contact.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { Request, Response } from 'express';
import mailService from '../services/mailService.js';

// ── Public: submit contact form ───────────────────────────────────────────────
export const createContact = asyncHandler(async (req: Request, res: Response) => {
  const { name, email, message } = req.body;
  const contact = new Contact({ name, email, message });
  await contact.save();

  try {
    await mailService.sendMail({
      to: process.env.RECIPIENT_EMAIL,
      subject: `New portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });
  } catch {
    // Mail failure doesn't fail the request — DB write succeeded
  }

  res.status(201).json({ id: contact._id });
});

