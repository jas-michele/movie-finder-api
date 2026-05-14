const axios = require('axios');

require('dotenv').config();
const API_KEY = process.env.OMDB_API_KEY

const apiClient = require("./api/apiClient");




const searchMovies = async (req, res ) => {
    try {
        const moviesTitle = req.query.title;

        if(!moviesTitle) {
            return res.status(400).json({
                error: "Title query parameter is required"
            });
        }

        const movieAPIResponse = apiClient.get(`?apikey=${API_KEY}&s=${moviesTitle}`);

        const movieData = await movieAPIResponse.json();

        console.log(movieData)

        const transformedTitle = {
            movieTitle: movieData.title
        }
    } catch (error) {

        if (error.response) {
            console.error('API Error:', error.response.status, error.response.data);
            res.status(error.response.status).json({ message: 'Error fetching data from external API.' });
        } else {
            console.error('Network Error:', error.message);
            res.status(500).json({ message: 'A network error occurred.' });
        }
    }
}

module.exports = getAllMovies;