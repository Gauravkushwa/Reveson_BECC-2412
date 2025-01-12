const express = require('express');

const User = require('./models/user');
const Product = require('./models/product');
const { default: mongoose } = require('mongoose');
const server = express();

mongoose.connect('mongodb://127.0.0.1:27017/mongo')
.then(() => console.log('connected to DB successfully...!!'))
.catch(err => console.log('error in DB connection',err));

server.use(express.json());

           // CRUD Operation for users

server.get('/users', async (req, res) =>{
    const users = await User.find();
    res.status(200).send(users);
});

server.post('/users', async (req, res) =>{
    try {
        const newUser = User(req.body);
        await newUser.save();
        res.status(201).send(newUser)
    } catch (error) {
        res.status(400).send('error in data creation', error)
    }
});

server.put('/users/:id', async (req, res) =>{
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(201).send(updatedUser);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

server.delete('/users/:id', async (req, res) =>{
    try {
        const updatedUser = await User.findByIdAndDelete(req.params.id, req.body, {new: true});
        res.status(201).send('user deleted successfully...!!');
    } catch (error) {
        res.status(400).send(error.message)
    }
});


            //CRUD Operation for Products

server.get('/products', async (req, res) =>{
    const products = await Product.find();
    res.status(200).send(products)
});

server.post('/products', async (req, res) =>{
   try {
    const newProduct =  Product(req.body);
    await newProduct.save();
    res.status(201).send(newProduct)
   } catch (error) {
    res.status(400).send(error.message)
   }
});

server.put('/products/:id', async (req, res) =>{
    try {
        const updatedProdut = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(201).send(updatedProdut);
    } catch (error) {
        res.status(400).send(error.message)
    }

});

server.delete('/products/:id', async (req, res) =>{
   try {
    const deleteProduct = await Product.findOneAndDelete(req.params.id, req.body, {new: true})
    res.status(201).send('product deleted successfully...!!')
   } catch (error) {
    res.status(400).send(error.message)
   }
});


server.listen(3000, () =>{
    console.log('server is running port http://localhost:3000')
})