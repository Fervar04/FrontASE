import React, { useState } from 'react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Button,
    Grid,
} from '@mui/material';
import { CrearUsuarioDto } from '../../services/crearUsuario';

interface CrearUsuarioFormProps {
    open: boolean;
    onClose: () => void;
    onSave: (usuario: CrearUsuarioDto) => void;
}

const CrearUsuarioForm: React.FC<CrearUsuarioFormProps> = ({ open, onClose, onSave }) => {
    const [nuevoUsuario, setNuevoUsuario] = useState<CrearUsuarioDto>({
        email: '',
        password: '',
        nombre: '',
        apellido: '',
        telefono: '',
        fotoPerfil: '',
        fechaNacimiento: '',
        genero: '',
        pesoActual: 0,
        pesoObjetivo: 0,
        altura: 0,
        objetivo: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNuevoUsuario((prev) => ({
            ...prev,
            [name]: name === 'pesoActual' || name === 'pesoObjetivo' || name === 'altura' ? parseFloat(value) : value,
        }));
    };

    const handleSave = () => {
        onSave(nuevoUsuario); // Llama al callback para guardar el usuario
        setNuevoUsuario({
            email: '',
            password: '',
            nombre: '',
            apellido: '',
            telefono: '',
            fotoPerfil: '',
            fechaNacimiento: '',
            genero: '',
            pesoActual: 0,
            pesoObjetivo: 0,
            altura: 0,
            objetivo: '',
        });
        onClose(); // Cierra el formulario
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth>
            <DialogTitle>Crear Usuario</DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="dense"
                            label="Correo Electrónico"
                            name="email"
                            fullWidth
                            value={nuevoUsuario.email}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="dense"
                            label="Contraseña"
                            name="password"
                            type="password"
                            fullWidth
                            value={nuevoUsuario.password}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="dense"
                            label="Nombre"
                            name="nombre"
                            fullWidth
                            value={nuevoUsuario.nombre}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="dense"
                            label="Apellido"
                            name="apellido"
                            fullWidth
                            value={nuevoUsuario.apellido}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="dense"
                            label="Teléfono"
                            name="telefono"
                            fullWidth
                            value={nuevoUsuario.telefono}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="dense"
                            label="Foto Perfil (URL)"
                            name="fotoPerfil"
                            fullWidth
                            value={nuevoUsuario.fotoPerfil}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="dense"
                            label="Fecha de Nacimiento"
                            name="fechaNacimiento"
                            type="date"
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                            value={nuevoUsuario.fechaNacimiento}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="dense"
                            label="Género"
                            name="genero"
                            fullWidth
                            value={nuevoUsuario.genero}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="dense"
                            label="Peso Actual"
                            name="pesoActual"
                            type="number"
                            fullWidth
                            value={nuevoUsuario.pesoActual}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="dense"
                            label="Peso Objetivo"
                            name="pesoObjetivo"
                            type="number"
                            fullWidth
                            value={nuevoUsuario.pesoObjetivo}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="dense"
                            label="Altura"
                            name="altura"
                            type="number"
                            fullWidth
                            value={nuevoUsuario.altura}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            margin="dense"
                            label="Objetivo"
                            name="objetivo"
                            fullWidth
                            value={nuevoUsuario.objetivo}
                            onChange={handleInputChange}
                        />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button
                    onClick={onClose}
                    sx={{
                        backgroundColor: '#ff0000',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: '#cc0000',
                        },
                    }}
                >
                    Cancelar
                </Button>
                <Button
                    onClick={handleSave}
                    sx={{
                        backgroundColor: '#800080',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: '#660066',
                        },
                    }}
                >
                    Guardar
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default CrearUsuarioForm;
