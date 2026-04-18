// Placeholder DB config factory
import mongoose from 'mongoose';
export async function connectDB(uri: string) {
  await mongoose.connect(uri);
}
export default connectDB;
