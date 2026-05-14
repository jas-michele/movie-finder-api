const axios = require('axios');

require('dotenv').config();
const API_KEY = process.env.OMDB_API_KEY






const getAllMovies = async (req, res ) => {
    try {
        const movieTitle = req.params.toLowerCase();

        const movieAPIRespons = axios.create()
    }
}