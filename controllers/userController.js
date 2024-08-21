import { User } from "../models/User.js";
import bcrypt from 'bcrypt';
import Jwt from "jsonwebtoken";

export const getAllUsers = async (req, res) => {
  return res.status(200).json({ message: `all users ${req.query.data}` });
}


export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const isExist = await User.findOne({ email: email });
    if (!isExist) return res.status(401).json({ message: 'invalid credential' });

    // const valid = bcrypt.compareSync(password, isExist.password);
    // if (!valid) return res.status(401).json({ message: 'invalid credential' });
    const token = Jwt.sign({
      id: isExist._id,
      isAdmin: isExist.isAdmin
    }, 'secret');

    return res.status(200).json({
      email,
      fullname: isExist.fullname,
      isAdmin: isExist.isAdmin,
      token
    });



  } catch (err) {
    return res.status(400).json({ message: `${err}` });
  }

}


export const registerUser = async (req, res) => {
  const { email, fullname, password } = req.body;
  try {
    const isExist = await User.findOne({ email: email });
    if (isExist) return res.status(409).json({ message: 'user already exist' });
    const hash = bcrypt.hashSync(password, 12);
    await User.create({
      email,
      fullname,
      password: hash
    });
    return res.status(201).json({ message: 'user registered successfully' });
  } catch (err) {
    return res.status(400).json({ message: `${err}` });
  }
}