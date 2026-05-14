const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT
const movieRoutes = require("./routes/movieRoutes");


const movieRoutes = require('./routes/movieRoutes');


app.use('/', movieRoutes)

app.use('/api/search')

app.listen(PORT, () => {
    console.log(`Running on localhost: ${PORT}`)
})