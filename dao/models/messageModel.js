const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  // Define los campos y tipos de datos para el esquema de mensajes
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
