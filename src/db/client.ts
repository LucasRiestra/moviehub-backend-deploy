import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

import mongoose from 'mongoose';

export const DATA_SOURCE = 'mongo';

const connectDb = async () => {
    try {
      await mongoose.connect(process.env.MONGO_DB_URI);
      console.log('MongoDB connected');
    } catch (err) {
      console.error('Error connecting to MongoDB', err);
      process.exit(1);
    }
  };
  
  connectDb();

export default prisma;
