import express from "express";
import { loginUser } from "../controllers/userController.js";


export const userRouter = express.Router();



userRouter.get('/', (req, res) => {
  return res.status(200).json({ data: 'all Users' });
});

userRouter.post('/login', loginUser);




userRouter.post('/register', (req, res) => {
  return res.status(200).json({ data: 'all Users' });
});




