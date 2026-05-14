const express = recquire('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT


const movieRoutes = require('./routes/movieRoutes');


app.use('/api')

app.use('/api/search')