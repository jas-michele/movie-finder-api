const express = require('express');
const router = express.Router();
const getMovies = require("../controllers/movieController");
const getAllMovies = require('../controllers/movieController');


router.get("/search", getAllMovies);

// router.get("/api/movies/:id");

module.exports = router;