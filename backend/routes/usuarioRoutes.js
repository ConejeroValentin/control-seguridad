const express = require("express");
const router = express.Router();
const Usuario = require("../models/Usuario");

// GET
router.get("/", async (req, res) => {
  const data = await Usuario.find();
  res.json(data);
});

// POST
router.post("/", async (req, res) => {
  const nuevo = new Usuario(req.body);
  await nuevo.save();
  res.json(nuevo);
});

// PUT
router.put("/:id", async (req, res) => {
  try {
    await Usuario.findByIdAndUpdate(req.params.id, req.body);
    res.json({ msg: "Actualizado correctamente" });
  } catch (error) {
    res.status(500).json({ msg: "Error al actualizar" });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Usuario.findByIdAndDelete(req.params.id);
  res.json({ msg: "Eliminado" });
});

module.exports = router;