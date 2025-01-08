import api from './api';

export interface CrearUsuarioDto {
    email: string;
    password: string;
    nombre: string;
    apellido: string;
    telefono: string;
    fotoPerfil: string;
    fechaNacimiento: string; // Formato ISO
    genero: string;
    pesoActual: number;
    pesoObjetivo: number;
    altura: number;
    objetivo: string;
}

// Servicio para crear usuario
export const crearUsuario = async (usuarioData: CrearUsuarioDto): Promise<CrearUsuarioDto> => {
    try {
        const response = await api.post<CrearUsuarioDto>('/Usuarios/CrearUsuario', usuarioData);
        return response.data;
    } catch (error: any) {
        console.error('Error al crear el usuario:', error.response?.data || error.message);
        throw new Error(error.response?.data?.message || 'No se pudo crear el usuario.');
    }
};
