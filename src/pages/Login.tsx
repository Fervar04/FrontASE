import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';
import {
    Box,
    Button,
    TextField,
    Typography,
    Paper,
    Alert,
    Stack,
    CircularProgress,
} from '@mui/material';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false); // Estado para el indicador de carga
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null); // Limpiar errores anteriores
        setLoading(true); // Activar animación de carga
        try {
            const { token, role } = await login(email, password);

            // Guardar el token en localStorage
            localStorage.setItem('token', token);

            // Redirigir al dashboard según el rol
            if (role === 'Admin') {
                navigate('/admin');
            } else if (role === 'SuperAdmin') {
                navigate('/super-admin');
            } else {
                navigate('/download-app');
            }
        } catch (err: any) {
            setError('Error al iniciar sesión. Verifica tus credenciales.');
        } finally {
            setLoading(false); // Desactivar animación de carga
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: '#121212', // Fondo oscuro
            }}
        >
            <Paper
                elevation={10}
                sx={{
                    padding: 4,
                    maxWidth: 400,
                    width: '100%',
                    borderRadius: 2,
                    backgroundColor: '#1e1e1e',
                    color: '#fff',
                    textAlign: 'center',
                }}
            >
                {/* Logo */}
                <Box sx={{ marginBottom: 2 }}>
                    <img
                        src="/logo.png" // Cambia por la ruta de tu logo
                        alt="Logo"
                        style={{ width: '100px', height: '100px' }}
                    />
                </Box>

                <Typography variant="h4" align="center" gutterBottom>
                    Iniciar Sesión
                </Typography>
                {error && (
                    <Alert severity="error" sx={{ marginBottom: 2 }}>
                        {error}
                    </Alert>
                )}
                <form onSubmit={handleSubmit}>
                    <Stack spacing={2}>
                        <TextField
                            type="email"
                            label="Correo Electrónico"
                            variant="outlined"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            fullWidth
                            required
                            InputProps={{
                                style: { color: '#fff' },
                            }}
                            InputLabelProps={{
                                style: { color: '#aaa' },
                            }}
                        />
                        <TextField
                            type="password"
                            label="Contraseña"
                            variant="outlined"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            fullWidth
                            required
                            InputProps={{
                                style: { color: '#fff' },
                            }}
                            InputLabelProps={{
                                style: { color: '#aaa' },
                            }}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            disabled={loading} // Deshabilitar el botón mientras carga
                            sx={{
                                backgroundColor: '#800080',
                                '&:hover': {
                                    backgroundColor: '#660066',
                                },
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            {loading ? (
                                <CircularProgress size={24} sx={{ color: '#fff' }} />
                            ) : (
                                'Ingresar'
                            )}
                        </Button>
                    </Stack>
                </form>
            </Paper>
        </Box>
    );
};

export default Login;
