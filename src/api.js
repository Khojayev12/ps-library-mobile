import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.library.mcpeblocker.uz/api'
});

export default api;