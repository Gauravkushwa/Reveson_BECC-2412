const mongoose = require('mongoose');

// Product Schema:

// Define a Product schema with the following fields:
// name: A string that is required and must be unique across all products.
// price: A number that must be positive (greater than zero).
// category: A string representing the category to which the product belongs.
// stock: A number indicating how many items of this product are in stock. This field should be required and have a default value of 0.
// created_at: A date field that stores the timestamp when the product was added. It should default to the current date and time.
// Category Schema:

const productSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    price: {type: Number, required: true, min: 0},
    category: {type: String,required: true },
    stock: {type: Number, required: true, default: 0},
    created_at: {type:Date, default: Date.now}
},{
    versionKey: false
});

// productSchema.virtual({
//     ref: "category"
// })

const ProductModel = mongoose.model("products", productSchema);
module.exports = {ProductModel};