const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  // Define los campos y tipos de datos para el esquema del carrito
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
