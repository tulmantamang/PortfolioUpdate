import mongoose, { Schema, Document } from 'mongoose';

export interface IContactDoc extends Document {
  name: string;
  email: string;
  message: string;
  read: boolean;
  status: 'new' | 'read' | 'replied' | 'spam';
  createdAt?: Date;
}

const ContactSchema: Schema = new Schema(
  {
    name:    { type: String, required: true },
    email:   { type: String, required: true },
    message: { type: String, required: true },
    read:    { type: Boolean, default: false },
    status:  {
      type: String,
      enum: ['new', 'read', 'replied', 'spam'],
      default: 'new',
    },
  },
  { timestamps: true }
);

export default mongoose.model<IContactDoc>('Contact', ContactSchema);
