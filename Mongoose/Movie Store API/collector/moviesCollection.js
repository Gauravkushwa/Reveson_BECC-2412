const Movie = require('../model/movies');

const getMovies = async (req, res) =>{
    try {
        const {q, genre, rating, sortBy = "releaseYear", page=1, limit=10} = req.query;
        
        const query = {}
        if(q) query.title = {$regex: q, $options: "i"};
        if(genre) query.genre = genre;
        if(rating) query.rating = {$gte: parseFloat(rating)};
    
        const skip = (page - 1) * limit;
    
        const movies = await Movie.find(query)
        .sort({[sortBy]: 1})
        .skip(skip)
        .limit(parseInt(limit));
        
        const totalMovies = await Movie.countDocuments(query);
    
        res.status(200).json({
            movies,
            pagination: {
            currentPage: parseInt(page),
            totalPages: Math.ceil(totalMovies / limit),
            totalMovies,
          },
        })
    } catch (error) {
        res.status(500).json({error: 'internal server error'})
    }
};

module.exports = getMovies;

