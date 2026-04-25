const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema({
  nombre: String,
  puesto: String,
  tarea: String,
  completado: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Usuario", UsuarioSchema);