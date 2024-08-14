import express from "express";
import { getAllUsers, loginUser, registerUser } from "../controllers/userController.js";


export const userRouter = express.Router();

userRouter.route('/').get(getAllUsers).all((req, res) => {
  return res.status(405).json({ message: 'method not allowed' });
});

userRouter.route('/login').post(loginUser).all((req, res) => {
  return res.status(405).json({ message: 'method not allowed' });
});

userRouter.route('/register').post(registerUser).all((req, res) => {
  return res.status(405).json({ message: 'method not allowed' });
});








