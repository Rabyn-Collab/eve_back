import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  detail: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    enum: ['Samsung', 'Nike', 'Tesla', 'Dolce'],
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: ['Tech', 'Beauty', 'Clothes'],
    required: true,

  },
  rating: {
    type: String,
    default: 0
  },
  price: {
    type: Number,
    required: true,
  }
}, { timestamps: true });

export const Product = mongoose.model('Product', productSchema);