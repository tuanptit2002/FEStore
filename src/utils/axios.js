// axios-instance.js
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080/api' // Chú ý URL sử dụng http://, không phải https:// khi sử dụng localhost
});

export default instance;
