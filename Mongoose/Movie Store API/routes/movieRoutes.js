const express = require('express');
const Movie = require('../model/movies')

const movieRoutes = express.Router();
movieRoutes.use(express.json());

movieRoutes.get('/movies', async (req, res) => {
    try {
      const { page = 1, limit = 10, sortBy = 'title', order = 'asc' } = req.query;
  
      // Convert `page` and `limit` to numbers for calculations
      const pageNumber = parseInt(page, 10);
      const limitNumber = parseInt(limit, 10);
      const sortOrder = order === 'desc' ? -1 : 1; // Default order is ascending
  
      // Fetch movies with pagination and sorting
      const movies = await Movie.find()
        .sort({ [sortBy]: sortOrder }) // Dynamic sorting
        .skip((pageNumber - 1) * limitNumber) // Skip the required number of documents
        .limit(limitNumber); // Limit the number of documents
  
      // Total count for pagination metadata
      const totalMovies = await Movie.countDocuments();
  
      res.status(200).json({
        movies,
        pagination: {
          totalMovies,
          currentPage: pageNumber,
          totalPages: Math.ceil(totalMovies / limitNumber),
        },
      });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching movies', details: error.message });
    }
  });
  

movieRoutes.post('/movies', async (req, res) => {
    try {
        const movies = req.body;  

        // Validate that movies array is provided
        if (!Array.isArray(movies) || movies.length === 0) {
            return res.status(400).json({ error: "Movies array is required" });
        }

        // Insert all movies into the database
        const newMovies = await Movie.insertMany(movies);

        // Send success response
        res.status(201).json({ message: "Movies created successfully!", movies: newMovies });

    } catch (error) {
        // Send error response
        res.status(400).json({ error: "Error in data creation", details: error.message });
    }
});

  

movieRoutes.put('/movies/:id',async (req, res) =>{
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(201).send(updatedMovie)
  } catch (error) {
    res.status(400).json('error in data updation', error)
  }
});

movieRoutes.delete('/movies/:id',async (req, res) =>{
try {
    const deletedMovie = await Movie.findByIdAndDelete(req.params.id, req.body, {new: true});
    res.send('data deleted successfully...!')
    } catch (error) {
    res.status(400).json('error in data deletion', error)
    }
});

module.exports = movieRoutes;