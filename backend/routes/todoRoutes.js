const express = require("express");
const router = express.Router();
const todoControllers = require("../controllers/todoControllers");
const authMiddleware = require("../middleware/authMIddleware");

router.use(authMiddleware);

router.get("/get-all", todoControllers.getTodos);

router.get("/get-todo/:id", todoControllers.getTodoById);

router.post("/post", todoControllers.postTodos);

router.delete("/delete-todo/:id", todoControllers.deleteTodoById);

router.put("/update-todo/:id", todoControllers.updateTodo);

module.exports = router;
