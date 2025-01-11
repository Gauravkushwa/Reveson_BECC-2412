const express = require('express');
const fs = require('fs')
const morgan = require('morgan');
const path = require('path');

const server = express();

const logDirectory = path.join(__dirname, 'src');

if(!fs.existsSync (logDirectory)){
    fs.mkdirSync (logDirectory)
}

const accessLogStream = fs.createWriteStream(path.join(logDirectory, 'access.log'), { flags: 'a' });

morgan.token('date', () => new Date().toISOString());
morgan.token('http-version', (req) => `HTTP/${req.httpVersion}`)

server.use(
    morgan(
        ':method :status :res[content-length] - :response-time ms :date :http-version :url',
        { stream: accessLogStream }
      )
)

server.get('/', (req, res) =>{
    res.status(200).send('these is main route...!!')
})
 
server.post('/' , (req, res) =>{
    res.status(201).send('post request created successfully..!')
});

server.put('/', (req, res) =>{
    res.status(201).send('task updated successfully..!')
});

server.delete('/', (req, res) =>{
    res.send('task deleted succussfully..!')
});

server.get('/get-users', (req, res) =>{
    res.status(200).send('these is all users..!')
});

server.listen(3000, () =>{
    console.log('server is running on http://localhost:3000')
})