const mongoose = require('mongoose');

// Define a Category schema with the following fields:
// name: A string that is required and must be unique across all categories.
// description: A string that provides details about the category.
// products: An array of ObjectIDs that reference the Product schema. This will represent the products that belong to this category.

const categorySchema =  new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    description: {type: String, required: true}
}, {
    versionKey: false
})

const CategoryModel = mongoose.model("categories", categorySchema);

module.exports = {CategoryModel}