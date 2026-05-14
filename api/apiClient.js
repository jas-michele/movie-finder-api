const axios = require('axios');


const apiClient = axios.create({
    baseURL: 'http://www.omdbapi.com/',

})

module.exports = apiClient;