import axios from 'axios';

// Configuración de instancia de Axios con la base URL de la API
const api = axios.create({
    baseURL: 'https://localhost:7180/api', // Cambia por la URL de tu API
});

// Configura el token en los encabezados automáticamente
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token'); // Obtén el token almacenado
    if (token) {
        config.headers.Authorization = `Bearer ${token}`; // Agrega el token a los headers
    }
    return config;
});

export default api;
