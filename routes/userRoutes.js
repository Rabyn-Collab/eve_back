import express from "express";
import { getAllUsers, loginUser, registerUser } from "../controllers/userController.js";
import { methodAll } from "../utils/shareFunc.js";


export const userRouter = express.Router();

userRouter.route('/').get(getAllUsers).all(methodAll);

userRouter.route('/login').post(loginUser).all(methodAll);

userRouter.route('/register').post(registerUser).all(methodAll);








