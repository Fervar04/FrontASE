import api from './api';

// Tipado para Usuario
export interface Usuario {
    id?: number; // ID del usuario
    userId: string; // Identificador único
    correoElectronico: string; // Cambiado de correoElectronico
    nombre: string;
    apellido: string;
    telefono: string;
    genero: string;
    fotoPerfil?: string; // Opcional
    fechaNacimiento?: string; // Opcional
    pesoActual?: number; // Opcional
    pesoObjetivo?: number; // Opcional
    altura?: number; // Opcional
    objetivo?: string; // Opcional
}

// Obtener usuarios (GET)
export const getUsuarios = async (): Promise<Usuario[]> => {
    try {
        const response = await api.get<Usuario[]>('/Usuarios/Listar');
        return response.data;
    } catch (error: any) {
        console.error('Error al obtener los usuarios:', error.response?.data || error.message);
        throw new Error('No se pudieron obtener los usuarios.');
    }
};

// Editar usuario (PUT)
export const editUsuario = async (userId: string, usuarioData: Partial<Usuario>): Promise<Usuario> => {
    try {
        const response = await api.put<Usuario>(`/Usuarios/Editar/${userId}`, usuarioData);
        return response.data;
    } catch (error: any) {
        console.error('Error al editar el usuario:', error.response?.data || error.message);
        throw new Error('No se pudo editar el usuario.');
    }
};

// Eliminar usuario (DELETE)
export const deleteUsuario = async (userId: string): Promise<void> => {
    try {
        await api.delete(`/Usuarios/Eliminar/${userId}`);
    } catch (error: any) {
        console.error('Error al eliminar el usuario:', error.response?.data || error.message);
        throw new Error('No se pudo eliminar el usuario.');
    }
};
