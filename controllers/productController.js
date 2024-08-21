import { Product } from "../models/Product.js";
import mongoose from "mongoose";
import fs from 'fs';

export const getAllProducts = async (req, res) => {

  try {
    const products = await Product.find({});

    return res.status(200).json(products);
  } catch (err) {
    return res.status(400).json({ message: `${err}` });
  }
}


export const getProductById = async (req, res) => {

  try {

    const product = await Product.findById(req.params.id);

    return res.status(200).json(product);
  } catch (err) {
    return res.status(400).json({ message: `${err}` });
  }
}



export const addProduct = async (req, res) => {
  const {
    title,
    detail,
    brand,
    stock,
    category,
    price } = req.body;

  try {
    await Product.create({
      title,
      detail,
      brand,
      category,
      price: Number(price),
      stock: Number(stock),
      image: req.imagePath
    });

    return res.status(200).json({ message: 'successfully product added' });
  } catch (err) {
    return res.status(400).json({ message: `${err}` });
  }
}



export const updateProduct = async (req, res) => {
  const { id } = req.params;

  try {
    if (mongoose.isValidObjectId(id)) {
      const isExist = await Product.findById(id);
      if (!isExist) return res.status(400).json({ message: 'product not found' });
      const obj = {
        title: req.body.title || isExist.title,
        detail: req.body.detail || isExist.detail,
        brand: req.body.brand || isExist.brand,
        stock: req.body.stock || isExist.stock,
        category: req.body.category || isExist.category,
        price: req.body.price || isExist.price
      };
      if (req.imagePath) {
        await isExist.updateOne({ ...obj, image: req.imagePath });
        fs.unlink(isExist.image, (err) => {

        })

      } else {
        await isExist.updateOne(obj);
      }
      return res.status(200).json({ message: 'successfully updated' });

    }

    return res.status(400).json({ message: 'please provide valid id' });
  } catch (err) {
    return res.status(400).json({ message: `${err}` });
  }
}




export const removeProduct = async (req, res) => {
  const { id } = req.params;

  try {
    if (mongoose.isValidObjectId(id)) {
      const isExist = await Product.findById(id);
      if (!isExist) return res.status(400).json({ message: 'product not found' });
      fs.unlink(isExist.image, (err) => {

      })
      await isExist.deleteOne();

      return res.status(200).json({ message: 'successfully remove' });

    }

    return res.status(400).json({ message: 'please provide valid id' });
  } catch (err) {
    return res.status(400).json({ message: `${err}` });
  }
}