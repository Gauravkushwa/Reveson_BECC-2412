const express = require('express');
const fs = require('fs');

const todo_Router = express.Router();
todo_Router.use(express.json());

const todos = [
    {id: 1, task: 'learning node.js', status: 'completed'},
    {id: 2, task: 'learning backEnd', status: 'running'},
    {id: 3, task: 'reading books', status: 'completed'}
]


todo_Router.get('/todos', (req, res) =>{
    res.status(200).json(todos)
});

todo_Router.post('/todos', (req, res) =>{
    const {task, status} = req.body;
  const  newTodo = {id: todos.length +1, task, status};
    todos.push(newTodo)
    res.status(200).send(todos)
});

todo_Router.get('/:id', (req, res) =>{
    const todo = todos.find((t) => t.id === parseInt(req.params.id));
    if(!todo) return res.status(404).send('Inviled id');
    res.status(200).send(todo)
});

todo_Router.put('/:id', (req, res) =>{
    const todo = todos.find((t) => t.id === parseInt(req.params.id));
    if(!todo) return res.status(404).send('please inter valid id');
    const {task, status} = req.body;
    todo.task = task ||todo.task;
    todo.status = status || todo.status;
    res.status(200).send(todo)
})

todo_Router.delete('/:id', (req, res) =>{
    const currentIndex = todos.findIndex((t) => t.id === parseInt(req.params.id))
    if(currentIndex === -1) return res.status(404).send('invalid todo id!')
    
        todos.splice(currentIndex, 1)
    res.status(200).send('todo deleted succussfuly')
})

module.exports = todo_Router;