import express from "express";
import { addProduct, getAllProducts, removeProduct, updateProduct } from "../controllers/productController.js";
import { adminCheck, userCheck } from "../middlewares/userCheck.js";
import { methodAll } from "../utils/shareFunc.js";
import { fileCheck, updateFile } from "../middlewares/fileCheck.js";



export const productRouter = express.Router();


productRouter.route('/').get(userCheck, getAllProducts).
  post(userCheck, adminCheck, fileCheck, addProduct).all(methodAll);

productRouter.route('/:id').patch(userCheck, adminCheck, updateFile, updateProduct).delete(userCheck, adminCheck, removeProduct);








