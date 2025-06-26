const express = require("express");
const router = express.Router();
const { Task } = require("../dummy-database");

// GET all tasks
router.get("/", (req, res) => {
  // Replace this with your code!
  res.status(501).send("Not implemented");
});

// GET a single task by id

// Patch a task by id
router.patch('/:id', (req, res) => {
  const id = Number(req.params.id);
  const updates = req.body; 

  try {
    const updatedTask = Task.update(id, updates);
    res.json(Task.findAll()); 
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});
// Delete a task by id

// Create a new task

module.exports = router;
