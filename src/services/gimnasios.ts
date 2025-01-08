import api from './api';

// Tipado para Gimnasio
export interface Gimnasio {
    id: string; // Presente en respuestas de la API
    nombre: string;
    ciudad: string;
    estado: string;
    pais: string;
    codigoPostal: string;
    numeroAdmins: number;
    numeroClientes: number;
    numeroVigilantes: number;
    fotoPerfil: string; // URL de la imagen
}

// Obtener gimnasios (GET)
export const getGimnasios = async (): Promise<Gimnasio[]> => {
    try {
        const response = await api.get<Gimnasio[]>('/Gimnasios'); // Tipado de la respuesta
        return response.data;
    } catch (error: any) {
        console.error('Error al obtener los gimnasios:', error.response?.data || error.message);
        throw new Error('No se pudieron obtener los gimnasios.');
    }
};

// Editar un gimnasio (PUT)
export const editGimnasio = async (id: string, gimnasioData: Partial<Gimnasio>): Promise<Gimnasio> => {
    try {
        const response = await api.put<Gimnasio>(`/Gimnasios/${id}`, gimnasioData);
        return response.data;
    } catch (error: any) {
        console.error('Error al editar el gimnasio:', error.response?.data || error.message);
        throw new Error('No se pudo editar el gimnasio.');
    }
};

// Eliminar un gimnasio (DELETE)
export const deleteGimnasio = async (id: string): Promise<void> => {
    try {
        await api.delete(`/Gimnasios/${id}`);
    } catch (error: any) {
        console.error('Error al eliminar el gimnasio:', error.response?.data || error.message);
        throw new Error('No se pudo eliminar el gimnasio.');
    }
};
