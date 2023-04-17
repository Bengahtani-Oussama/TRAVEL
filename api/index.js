import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import AuthRoute from './routes/Auth.js';
import UsersRoute from './routes/Users.js';
import HotelsRoute from './routes/Hotels.js';
import RoomsRoute from './routes/Rooms.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

mongoose.set('strictQuery', true);

const app = express();
dotenv.config();

// CREATE CONNECTION TO MONGODB
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log('Connected to mongoDB.');
  } catch (err) {
    throw err;
  }
};

// mongoose.connection.on("connected", () => {
//   console.log("Mongodb is Connectedd");
// });

// CHECK IF DISCONNECTED
mongoose.connection.on('disconnected', () => {
  console.log('mongoDB disconnected!');
});

// Middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', AuthRoute);
app.use('/api/users', UsersRoute);
app.use('/api/hotels', HotelsRoute);
app.use('/api/rooms', RoomsRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.Message || 'Something went wrong!';

  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

const port = process.env.PORT || 6600;

app.listen(port, () => {
  connect();
  console.log(`Connected To BackEnd ${port}`);
});
