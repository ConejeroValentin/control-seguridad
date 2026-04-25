const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Conexión Mongo
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.log(err));

// Rutas
const usuarioRoutes = require("./routes/usuarioRoutes");
app.use("/api/usuarios", usuarioRoutes);

// Ruta base
app.get("/", (req, res) => {
  res.send("API de Control de Seguridad funcionando 🚀");
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}`);
});