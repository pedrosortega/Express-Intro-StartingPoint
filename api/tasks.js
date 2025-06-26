const express = require("express");
const router = express.Router();
const { Task } = require("../dummy-database");

// GET all tasks
router.get("/", (req, res) => {
   const tasks = Task.findAll();
   if (!tasks) {
    return res.status(404).json({ error: "Task not found" });
  }
  res.json(tasks);
});

// GET a single task by id

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = Task.findByPk(id);
  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }
  res.json(task);
});

// Patch a task by id

// Delete a task by id

// Create a new task

module.exports = router;
