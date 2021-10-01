import axios from 'axios';
const API = axios.create({
    baseURL: "http://mod2-api.herokuapp.com"
});

export default API;