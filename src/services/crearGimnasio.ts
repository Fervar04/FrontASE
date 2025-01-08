import api from './api';

// Servicio para crear gimnasio
export const crearGimnasio = async (gimnasioData: {
    nombre: string;
    ciudad: string;
    estado: string;
    pais: string;
    codigoPostal: string;
    fotoPerfil: string;
    numeroAdmins: number;
    numeroClientes: number;
    numeroVigilantes: number;
}) => {
    try {
        const response = await api.post('/Gimnasios', gimnasioData);
        return response.data; // Devuelve los datos del gimnasio creado
    } catch (error: any) {
        console.error('Error al crear el gimnasio:', error.response?.data || error.message);
        console.error('Detalles del error:', error);
        if (error.response) {
            console.error('Response data:', error.response.data);
            console.error('Response status:', error.response.status);
            console.error('Response headers:', error.response.headers);
        }
        throw new Error(error.response?.data?.message || 'No se pudo crear el gimnasio.');
    }
};
