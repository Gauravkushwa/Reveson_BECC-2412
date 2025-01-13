const express = require('express');
const mongoose = require('mongoose');
const movieRoutes = require('./routes/movieRoutes')

const server = express();
server.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/moviesCollection')
.then(()=> console.log('connected to DB successfully...!!'))
.catch(err => console.log('error in data connection', err));

server.use('/', movieRoutes);

const PORT = 3000;
server.listen(PORT, () =>{
    console.log("server is running on port http://localhost:3000")
})