import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL, // ✅ FIXED
});

api.interceptors.request.use(
    (config) => {
        const userInfo = sessionStorage.getItem('userInfo');
        if (userInfo) {
            const parsedInfo = JSON.parse(userInfo);
            if (parsedInfo.token) {
                config.headers.Authorization = `Bearer ${parsedInfo.token}`;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;