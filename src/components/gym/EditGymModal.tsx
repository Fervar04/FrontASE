// components/EditGymModal/EditGymModal.tsx
import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
} from '@mui/material';

interface Gym {
    id: string;
    nombre: string;
    ciudad: string;
    estado: string;
    pais: string;
    codigoPostal: string;
    numeroAdmins: number;
    numeroClientes: number;
    numeroVigilantes: number;
    fotoPerfil: string;
}

interface Props {
    open: boolean;
    gym: Gym | null;
    onClose: () => void;
    onSave: (gym: Gym) => void;
}

const EditGymModal: React.FC<Props> = ({ open, gym, onClose, onSave }) => {
    const [formData, setFormData] = React.useState<Gym | null>(gym);

    React.useEffect(() => {
        setFormData(gym);
    }, [gym]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (formData) {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleSave = () => {
        if (formData) {
            onSave(formData);
        }
    };

    return (
        <Dialog open={open} onClose={onClose} fullWidth>
            <DialogTitle>Editar Gimnasio</DialogTitle>
            <DialogContent>
                <TextField
                    margin="dense"
                    label="Nombre"
                    name="nombre"
                    fullWidth
                    value={formData?.nombre || ''}
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    label="Ciudad"
                    name="ciudad"
                    fullWidth
                    value={formData?.ciudad || ''}
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    label="Estado"
                    name="estado"
                    fullWidth
                    value={formData?.estado || ''}
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    label="País"
                    name="pais"
                    fullWidth
                    value={formData?.pais || ''}
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    label="Código Postal"
                    name="codigoPostal"
                    fullWidth
                    value={formData?.codigoPostal || ''}
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    label="Administradores"
                    name="numeroAdmins"
                    type="number"
                    fullWidth
                    value={formData?.numeroAdmins || ''}
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    label="Clientes"
                    name="numeroClientes"
                    type="number"
                    fullWidth
                    value={formData?.numeroClientes || ''}
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    label="Vigilantes"
                    name="numeroVigilantes"
                    type="number"
                    fullWidth
                    value={formData?.numeroVigilantes || ''}
                    onChange={handleChange}
                />
                <TextField
                    margin="dense"
                    label="Foto Perfil URL"
                    name="fotoPerfil"
                    fullWidth
                    value={formData?.fotoPerfil || ''}
                    onChange={handleChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="secondary" variant="contained">
                    Cancelar
                </Button>
                <Button onClick={handleSave} color="primary" variant="contained">
                    Guardar
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditGymModal;
