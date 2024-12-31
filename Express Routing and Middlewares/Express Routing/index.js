const express = require('express');
const fs = require('fs');

const server = express();

const  todo_Router  = require('./Router/todo_Router');
const  userRouter = require('./Router/user_Router')

server.use(express.json());
server.use('/', todo_Router)
server.use('/', userRouter)

server.listen(3000, () => {
    console.log('server is running on port http://localhost:3000')
})