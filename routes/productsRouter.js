const express = require('express');
const router = express.Router();

// Variable para almacenar los productos
let products = [
  { id: 1, name: 'Producto 1' },
  { id: 2, name: 'Producto 2' },
  { id: 3, name: 'Producto 3' }
];

// Ruta GET '/products'
router.get('/', (req, res) => {
  res.json(products);
});

// Ruta GET '/products/:id'
router.get('/:id', (req, res) => {
  const productId = req.params.id;
  
  // Lógica para obtener un producto por ID
  const product = products.find(p => p.id === parseInt(productId));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Producto no encontrado' });
  }
});

module.exports = router;
