const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    PtName: {type: String, required: true},
    Qty: {type: Number, required: true},
    price: {type: Number, required: true},
    totalPrice: {type: Number, required: true}
});

module.exports = mongoose.model("products", productsSchema);