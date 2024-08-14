import express from "express";
import morgan from "morgan";
import { userRouter } from "./routes/userRoutes.js";
import cors from "cors";
import mongoose from "mongoose";


const app = express();
const port = 5000;

app.use(cors({}));
app.use(morgan('dev'));
app.use(express.json());



mongoose.connect('mongodb+srv://rabyn900:moles900@cluster0.ikwdezp.mongodb.net/ShopUs').then((val) => {

  app.listen(port, () => {
    console.log('connected');
  });


}).catch((err) => {
  console.log(err);
})


app.get('/', (req, res) => {
  return res.status(200).json({ message: 'welcome to server' });
});



app.use('/api/users', userRouter);




