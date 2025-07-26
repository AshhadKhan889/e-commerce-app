const express = require('express');
const router = express.Router();

// Dummy product data
const products = [
  { id: 1, name: 'Product One', price: 99.99 },
  { id: 2, name: 'Product Two', price: 149.99 },
  { id: 3, name: 'Product Three', price: 199.99 },
];

// GET /products
router.get('/', (req, res) => {
  res.json(products);
});

module.exports = router;
