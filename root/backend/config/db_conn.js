import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

export default db;