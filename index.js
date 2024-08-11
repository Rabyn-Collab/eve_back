import express from "express";
import morgan from "morgan";
import { userRouter } from "./routes/userRoutes.js";
const app = express();
const port = 5000;

app.use(morgan('dev'));



app.get('/', (req, res) => {
  return res.status(200).json({ message: 'welcome to server' });
});



app.use('/api/users', userRouter);





app.listen(port, () => {
  console.log('connected');
});

