const {Todo} = require('../models/todosModels');
const mongoose = require('mongoose')

const getTodos = (req , res) => {
    Todo.find()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).json({error : err}))
};



const postTodos = (req , res) => {
  //  const {title , completed , worked_time , created_date , steps} = req.body
    const data = req.body 
    if(data.title.length === 0) return res.status(400).json({error : "Please enter the title"})
    Todo.create(data)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).json({error : err}))
};

const getTodoById = (req , res) => {
    const id = req.params.id
    Todo.findById(id)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).json({error : err}))
};

const deleteTodoById = (req , res) => {
    const id = req.params.id
    Todo.findByIdAndDelete(id)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).json({error : err}))
};

const updateTodo = (req , res) => {
    const id = req.params.id
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({error : "Item was not found"})
    const data = req.body
    console.log(data)
    Todo.findByIdAndUpdate(id , data , {returnDocument : 'after'})
    .then(data => res.status(200).json(data))
    .catch(err =>  res.status(400).json({error : err}))
};

module.exports = {
    getTodos,
    postTodos,
    getTodoById,
    deleteTodoById,
    updateTodo
};