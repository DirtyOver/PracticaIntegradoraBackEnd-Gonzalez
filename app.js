const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cartRouter = require('./routes/cartRouter');
const productsRouter = require('./routes/productsRouter');

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Conexión exitosa a MongoDB');
  })
  .catch((error) => {
    console.error('Error de conexión a MongoDB:', error);
  });

app.use(express.json());

app.use('/cart', cartRouter);
app.use('/products', productsRouter);

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});

