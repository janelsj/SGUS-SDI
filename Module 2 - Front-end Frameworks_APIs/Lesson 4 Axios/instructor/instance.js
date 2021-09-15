// Create instance of Axios
const axios = require('axios');

const API = axios.create({
    baseURL: 'https://mod2-api.herokuapp.com'
});

module.exports = API;