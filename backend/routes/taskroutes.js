const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// Crear
router.post("/", async (req, res) => {
  const task = new Task({ text: req.body.text });
  await task.save();
  res.json(task);
});

// Leer
router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// Completar
router.put("/:id", async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    { completed: true },
    { returnDocument: "after" }
  );
  res.json(task);
});

// Eliminar
router.delete("/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ msg: "Eliminada" });
});

module.exports = router;
