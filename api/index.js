import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user_route.js';
import authRoute from './routes/auth_route.js';

dotenv.config();



mongoose.connect(process.env.mongo).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.log('Error:', error);
});

const app = express();


app.use(express.json());

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

app.use('/api/user', userRoute);
app.use('/api/auth', authRoute);