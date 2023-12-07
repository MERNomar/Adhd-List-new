const express = require('express')
const todoRoutes = express()
const todoControllers = require('../controllers/todoControllers')


todoRoutes.get('/get-all' , todoControllers.getTodos) 

todoRoutes.get('/get-todo/:id' , todoControllers.getTodoById) 

todoRoutes.post('/post' , todoControllers.postTodos) 

todoRoutes.delete('/delete-todo/:id' , todoControllers.deleteTodoById) 

todoRoutes.put('/update-todo/:id' , todoControllers.updateTodo)





module.exports = todoRoutes;
