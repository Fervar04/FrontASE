import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';

interface CrearGimnasioFormProps {
    open: boolean;
    onClose: () => void;
    onSave: (gimnasioData: {
        nombre: string;
        ciudad: string;
        estado: string;
        pais: string;
        codigoPostal: string;
        fotoPerfil: string;
        numeroAdmins: number;
        numeroClientes: number;
        numeroVigilantes: number;
    }) => void;
}

const CrearGimnasioForm: React.FC<CrearGimnasioFormProps> = ({ open, onClose, onSave }) => {
    const [nuevoGimnasio, setNuevoGimnasio] = useState({
        nombre: '',
        ciudad: '',
        estado: '',
        pais: '',
        codigoPostal: '',
        fotoPerfil: '',
        numeroAdmins: 0,
        numeroClientes: 0,
        numeroVigilantes: 0,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNuevoGimnasio((prev) => ({
            ...prev,
            [name]: name.startsWith('numero') ? parseInt(value, 10) : value,
        }));
    };

    const handleSave = () => {
        onSave(nuevoGimnasio);
        setNuevoGimnasio({
            nombre: '',
            ciudad: '',
            estado: '',
            pais: '',
            codigoPostal: '',
            fotoPerfil: '',
            numeroAdmins: 0,
            numeroClientes: 0,
            numeroVigilantes: 0,
        });
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth>
            <DialogTitle>Crear Gimnasio</DialogTitle>
            <DialogContent>
                <TextField margin="dense" label="Nombre" name="nombre" fullWidth value={nuevoGimnasio.nombre} onChange={handleInputChange} />
                <TextField margin="dense" label="Ciudad" name="ciudad" fullWidth value={nuevoGimnasio.ciudad} onChange={handleInputChange} />
                <TextField margin="dense" label="Estado" name="estado" fullWidth value={nuevoGimnasio.estado} onChange={handleInputChange} />
                <TextField margin="dense" label="País" name="pais" fullWidth value={nuevoGimnasio.pais} onChange={handleInputChange} />
                <TextField margin="dense" label="Código Postal" name="codigoPostal" fullWidth value={nuevoGimnasio.codigoPostal} onChange={handleInputChange} />
                <TextField margin="dense" label="Foto Perfil (URL)" name="fotoPerfil" fullWidth value={nuevoGimnasio.fotoPerfil} onChange={handleInputChange} />
                <TextField margin="dense" label="Número de Admins" name="numeroAdmins" type="number" fullWidth value={nuevoGimnasio.numeroAdmins} onChange={handleInputChange} />
                <TextField margin="dense" label="Número de Clientes" name="numeroClientes" type="number" fullWidth value={nuevoGimnasio.numeroClientes} onChange={handleInputChange} />
                <TextField margin="dense" label="Número de Vigilantes" name="numeroVigilantes" type="number" fullWidth value={nuevoGimnasio.numeroVigilantes} onChange={handleInputChange} />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} sx={{ backgroundColor: '#ff0000', color: 'white', '&:hover': { backgroundColor: '#cc0000' } }}>
                    Cancelar
                </Button>
                <Button onClick={handleSave} sx={{ backgroundColor: '#800080', color: 'white', '&:hover': { backgroundColor: '#660066' } }}>
                    Guardar
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default CrearGimnasioForm;
