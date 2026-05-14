const axios = require('axios');

require('dotenv').config();
const API_KEY = process.env.OMDB_API_KEY

const apiClient = require("./api/apiClient");




const getAllMovies = async (req, res ) => {
    try {
        const moviesTitle = req.params.toLowerCase();

        const movieAPIResponse = apiClient.get(`?apikey=${API_KEY}&/s=${moviesTitle}`);

        const movieData = await movieAPIResponse.json();

        console.log(movieData)

        const transformedTitle = {
            movieTitle: movieData.title
        }
    } catch 
}