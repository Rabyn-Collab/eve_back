import jwt from "jsonwebtoken";



export const userCheck = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(401).json({ message: 'you are not autorised' });

  const decode = jwt.decode(token, 'secret');

  if (!decode) return res.status(401).json({ message: 'you are not autorised' });

  req.userId = decode.id;
  req.isAdmin = decode.isAdmin;

  next();

}


export const adminCheck = (req, res, next) => {
  if (req.isAdmin) return next();

  return res.status(401).json({ message: 'you are not autorised' });

}