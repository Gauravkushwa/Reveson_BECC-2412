const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    userName : {type: String, required: true},
    email : {type: String, required: true},
    age : {type: Number, required: true}
});

module.exports = mongoose.model("users", usersSchema);