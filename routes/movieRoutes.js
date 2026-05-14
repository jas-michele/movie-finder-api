const express = require('express');
const router = express.Router();
const getMovies = require("../controllers/movieController");
const {searchMovies, getMovieDetals} = require('../controllers/movieController');


router.get("/search", searchMovies);

// router.get("/api/movies/:id");

module.exports = router;