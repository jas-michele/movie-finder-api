const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT


const movieRoutes = require('./routes/movieRoutes');


app.use('/')

app.use('/api/search')

app.listen(PORT, () => {
    console.log(`Running on localhost: ${PORT}`)
})