import React from 'react';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Button,
} from '@mui/material';
import { Usuario } from '../../services/usuarios';

interface UsuarioFormProps {
    open: boolean;
    usuario: Partial<Usuario>;
    onClose: () => void;
    onSave: () => void;
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UsuarioForm: React.FC<UsuarioFormProps> = ({ open, usuario, onClose, onSave, onInputChange }) => {
    return (
        <Dialog open={open} onClose={onClose} fullWidth>
            <DialogTitle>{usuario.userId ? 'Editar Usuario' : 'Crear Usuario'}</DialogTitle>
            <DialogContent>
                <TextField
                    margin="dense"
                    label="Nombre"
                    name="nombre"
                    fullWidth
                    value={usuario?.nombre || ''}
                    onChange={onInputChange}
                />
                <TextField
                    margin="dense"
                    label="Apellido"
                    name="apellido"
                    fullWidth
                    value={usuario?.apellido || ''}
                    onChange={onInputChange}
                />
                <TextField
                    margin="dense"
                    label="Correo Electrónico"
                    name="correoElectronico"
                    fullWidth
                    value={usuario?.correoElectronico || ''}
                    onChange={onInputChange}
                />
                <TextField
                    margin="dense"
                    label="Teléfono"
                    name="telefono"
                    fullWidth
                    value={usuario?.telefono || ''}
                    onChange={onInputChange}
                />
                <TextField
                    margin="dense"
                    label="Foto de Perfil"
                    name="fotoPerfil"
                    fullWidth
                    value={usuario?.fotoPerfil || ''}
                    onChange={onInputChange}
                />
                <TextField
                    margin="dense"
                    label="Fecha de Nacimiento"
                    name="fechaNacimiento"
                    type="date"
                    fullWidth
                    value={usuario?.fechaNacimiento || ''}
                    onChange={onInputChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    margin="dense"
                    label="Género"
                    name="genero"
                    fullWidth
                    value={usuario?.genero || ''}
                    onChange={onInputChange}
                />
                <TextField
                    margin="dense"
                    label="Peso Actual"
                    name="pesoActual"
                    type="number"
                    fullWidth
                    value={usuario?.pesoActual || ''}
                    onChange={onInputChange}
                />
                <TextField
                    margin="dense"
                    label="Peso Objetivo"
                    name="pesoObjetivo"
                    type="number"
                    fullWidth
                    value={usuario?.pesoObjetivo || ''}
                    onChange={onInputChange}
                />
                <TextField
                    margin="dense"
                    label="Altura"
                    name="altura"
                    type="number"
                    fullWidth
                    value={usuario?.altura || ''}
                    onChange={onInputChange}
                />
                <TextField
                    margin="dense"
                    label="Objetivo"
                    name="objetivo"
                    fullWidth
                    value={usuario?.objetivo || ''}
                    onChange={onInputChange}
                />
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
                    onClick={onSave}
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

export default UsuarioForm;
