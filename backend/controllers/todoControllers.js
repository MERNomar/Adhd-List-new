const {Todo} = require('../models/todosModels');


const getTodos = (req , res) => {
    Todo.find()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).json(err))
};



const postTodos = (req , res) => {
  //  const {title , completed , worked_time , created_date , steps} = req.body
    const data = req.body
    Todo.create(data)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).json(err))
};

const getTodoById = (req , res) => {
    const id = req.params.id
    Todo.findById(id)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).json(err))
};

const deleteTodoById = (req , res) => {
    const id = req.params.id
    Todo.findByIdAndDelete(id)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).json(err))
};

const updateTodo = (req , res) => {
    const id = req.params.id
    const data = req.body
    console.log(data)
    Todo.findByIdAndUpdate(id , data , {returnDocument : 'after'})
    .then(data => res.status(200).json(data))
    .catch(err =>  res.status(400).json(err))
};

module.exports = {
    getTodos,
    postTodos,
    getTodoById,
    deleteTodoById,
    updateTodo
};