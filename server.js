const express = require('express');
const { productRouter } = require('./routes/productRoute');
const { default: mongoose } = require('mongoose');
const categoryRoutes = require('./routes/categoryRoutes');

const server = express();
server.use(express.json());
server.use('/product', productRouter);
server.use("/category", categoryRoutes)

mongoose.connect('mongodb://127.0.0.1:27017/products&category')
.then(() => console.log('connected to DB...!'))
.catch(err => console.log('connection failed', err));

server.listen(3000, () =>{
    console.log("server is running on http://localhost:3000")
});