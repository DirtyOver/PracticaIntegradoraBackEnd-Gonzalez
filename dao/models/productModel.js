const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  // Define los campos y tipos de datos para el esquema de productos
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
