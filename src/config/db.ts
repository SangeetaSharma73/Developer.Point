import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string);
    console.info(`MongoDB connected: ${conn.connection.host}`);
  } catch (err: unknown) {
    console.error(`DB connection failed`, err);
    throw err;
  }
};

export default connectDB;
