const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema ({
    title :{ type : String , required : true},
    category :{ type : String , required : true} ,
    completed : { type : Boolean , required : true},
    important : { type : Boolean , required : true},
    worked_time : { type : Number , required : true},
    created_date : {type : Date},
    steps : {type : Array},
}, {timestamps : true});

const Todo = mongoose.model('TodoList' , todoSchema);

module.exports = {Todo};