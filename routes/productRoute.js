const { ProductModel } = require("../models/productModel");
const express = require('express');

const productRouter = express.Router();
productRouter.use(express.json());

productRouter.get('/',async (req, res) =>{
    const products = await ProductModel.find();
    res.status(200).send(products)
});

productRouter.post('/',async (req, res) =>{
    try {
        const newPorduct = ProductModel(req.body);
        await newPorduct.save();
        res.status(201).json({message: 'new product is created...!', product: newPorduct});   
    } catch (error) {
        res.status(500).json({error: 'failed in product creation'})
    }
});

productRouter.put('/:id',async (req, res) =>{
    try {
        const updatedProdut = await ProductModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json({message: 'product updated succussfully...', updatedProdut: updatedProdut})
    } catch (error) {
        res.status(500).send('Product is not updated')
    }
})

productRouter.delete("/:id",async (req, res) =>{
    try {
        const deletedProduct = await ProductModel.findByIdAndDelete(req.params.id);
        res.status(200).send('Data Deleted Succussfully...!!!')
    } catch (error) {
        res.status(500).send('Data is not Delete...!!')
    }
})
module.exports = {productRouter}