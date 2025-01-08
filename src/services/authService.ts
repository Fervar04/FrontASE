import api from './api';


interface LoginResponse {
    token: string;
    userName: string;
    email: string;
    role: string;
}

export const login = async (email: string, password: string): Promise<LoginResponse> => {
    const response = await api.post('/Usuarios/Login', { email, password });
    return response.data;
};
