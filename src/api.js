import axios from 'axios';

const api = axios.create({
    baseURL: 'http://api.library.mcpeblocker.uz/api',
    mode: 'no-cors',
    headers: {
        "Access-Control-Allow-Origin": "*",
        Accept: 'application/json',
        "Content-Type": "application/json"
    }
});

export default api;