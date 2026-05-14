const express = require('express');
const router = express.Router();
const searchMovies = require('../controllers/movieController');


router.get("/search", searchMovies);

// router.get("/api/movies/:id");

module.exports = router;