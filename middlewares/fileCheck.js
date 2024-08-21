import path from 'path';



const supported = ['.jpg', '.png', '.jpeg', '.webp'];




export const fileCheck = (req, res, next) => {
  const image = req.files?.image;
  if (image) {
    const extType = path.extname(image.name);
    if (supported.includes(extType)) {
      image.mv(`./uploads/${image.name}`, (err) => {
        if (err) return res.status(400).json({ message: 'please provide valid image' });
        req.imagePath = `/uploads/${image.name}`;
        next();
      })
    }

  }

  return res.status(400).json({ message: 'please provide image' });
}



export const updateFile = (req, res, next) => {
  const image = req.files?.image;
  if (image) {
    const extType = path.extname(image.name);
    if (supported.includes(extType)) {
      image.mv(`./uploads/${image.name}`, (err) => {
        if (err) return res.status(400).json({ message: 'please provide valid image' });
        req.imagePath = `/uploads/${image.name}`;
        next();
      })
    }

  }

  next();
}