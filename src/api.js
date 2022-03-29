import axios from 'axios';

const api = axios.create({
    baseURL: 'http://api.library.mcpeblocker.uz/api'
});

export default api;