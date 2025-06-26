const express = require("express");
const router = express.Router();
const { Task } = require("../dummy-database");

// GET all tasks
router.get("/", (req, res) => {
  const tasks = Task.findAll();
  try {
    res.send(tasks);
  } catch {
    res.status(501).send("Not implemented");
  }
});

// GET a single task by id
router.get("/", (req, res) => {
  const getId = Task.findByPk(1);
  try {
    res.send(getId);
  } catch {
    res.status(501).send("Not Implemented");
  }
});

// Patch a task by id

// Delete a task by id

// Create a new task

module.exports = router;
