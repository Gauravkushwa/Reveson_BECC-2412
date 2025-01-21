const express = require('express');
const {CategoryModel} = require('../models/categoryModel');

const categoryRoutes = express.Router();
categoryRoutes.use(express.json());

categoryRoutes.post('/',async (req, res) =>{
   try {
     const newCategory = CategoryModel(req.body);
     await newCategory.save();
     res.status(201).json({message: 'category created successfully..', Category: newCategory})
   } catch (error) {
    res.status(404).json({message: 'error in data creation',description: error})
   }
});

categoryRoutes.get("/",async (req, res) =>{
    try {
        const categorys = await CategoryModel.find()
        res.status(200).send(categorys)
    } catch (error) {
        res.status(404).json({message: 'error in reading the data', error})
    }
});
categoryRoutes.put('/:id',async (req, res) =>{
    try {
        const updatedCategory = await CategoryModel.findByIdAndUpdate(req.params.id,req.body, {new: true});
        res.status(201).json({message: 'category updated succussfully..', updatedCategory: updatedCategory})
    } catch (error) {
        res.status(500).send('category is not updated')
    }
});

categoryRoutes.delete('/:id',async (req, res) =>{
    try {
        const deleteCategory = await CategoryModel.findByIdAndDelete(req.params.id, req.body, {new: this.true});
        res.status(201).send("category Deleted succussfully..!")
    } catch (error) {
        res.status(404).send('invalid ID')
    }
})

module.exports = categoryRoutes;