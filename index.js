import express from "express";

const app = express();
const port = 5000;

const numbers = [11, 22, 44, 55, 66];

app.get('/', (req, res) => {
  const total = numbers.reduce((a, b) => a + b);
  return res.status(200).json({
    data: "lios",
    total
  });
});


// products

// api/products  get add
// api/products/:id   detail update delete



// allProducts
// product/detail
// product/add
// product/update
// product/delete


app.listen(port, () => {
  console.log('connected');
});

