const axios = require('axios');

require('dotenv').config();
const API_KEY = process.env.OMDB_API_KEY

console.log(API_KEY);

const apiClient = require("../api/apiClient")


const searchMovies = async (req, res ) => {
    try {
        const moviesTitle = req.query.title;

        if(!moviesTitle) {
            return res.status(400).json({
                error: "Title query parameter is required"
            });
        }

        const movieAPIResponse = await apiClient.get(`?apikey=${API_KEY}&s=${moviesTitle}`);

        res.json(movieAPIResponse.data);

    } catch (error) {

       console.error(error.message);

       res.status(500).json({
        error: "Server error"
       });
    }  
}

const getMovieDetails = async (req, res) => {

    try {
        const movieId = req.params.id;

        const response = apiClient.get(`?apikey=${API_KEY}&i=${movieId}`)

        res.json(response.data)

    } catch (error) {

        console.error(error.message);

        res.status(500).json({
            error: "Sever error"
        })
    }


}

module.exports = searchMovies;