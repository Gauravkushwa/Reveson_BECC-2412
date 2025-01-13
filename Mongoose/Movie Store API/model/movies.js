const mongoose = require('mongoose');

const moviesSchema = new mongoose.Schema({
    title: {type: String, required: true},
    genre: {type: String, required: true},
    releaseYear: {type: Number, required: true},
    description: {type: String, required: true},
    rating: {type: Number, required: true},
    cast: {type: String, required: true}
    
});

module.exports = mongoose.model("movies", moviesSchema);