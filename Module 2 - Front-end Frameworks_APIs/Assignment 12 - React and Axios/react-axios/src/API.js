import axios from 'axios';
const API = axios.create({
    baseURL: "https://ip-geolocation-ipwhois-io.p.rapidapi.com",
    headers: {
        'x-rapidapi-host': 'ip-geolocation-ipwhois-io.p.rapidapi.com',
        'x-rapidapi-key': '2cc4f9fb5fmsh6c7c17f151bdaa1p1f3fb7jsne9ae56177c97'
        }
});

export default API;