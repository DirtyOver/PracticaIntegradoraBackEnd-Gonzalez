const express = require('express');
const router = express.Router();

// Variable para almacenar los productos del carrito
let cartItems = [];

// Ruta GET '/cart'
router.get('/', (req, res) => {
  res.json(cartItems);
});

// Ruta POST '/cart'
router.post('/', (req, res) => {
  const { productId, quantity } = req.body;
  
  // Lógica para agregar un producto al carrito
  const itemIndex = cartItems.findIndex(item => item.productId === productId);
  if (itemIndex !== -1) {
    cartItems[itemIndex].quantity += quantity;
  } else {
    cartItems.push({ productId, quantity });
  }
  
  res.json({ message: 'Producto agregado al carrito' });
});

// Ruta DELETE '/cart'
router.delete('/', (req, res) => {
  // Lógica para vaciar el carrito
  cartItems = [];
  res.json({ message: 'Carrito vaciado' });
});

module.exports = router;
