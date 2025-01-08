import React, { useState, useEffect } from 'react';
import { getGimnasios } from '../../services/gimnasios';
import { crearGimnasio } from '../../services/crearGimnasio';
import CrearGimnasioForm from '../../components/gym/CrearGimnasioForm';
import GimnasiosTable from '../../components/gym/GimnasiosTable';
import { Box, Typography, Fab, Snackbar, Alert } from '@mui/material';
import { Add } from '@mui/icons-material';
import SuperAdminLayout from '../../layouts/SuperAdminLayout';

// Tipo de datos
interface GimnasioData {
    id: string;
    nombre: string;
    ciudad: string;
    estado: string;
    pais: string;
    codigoPostal: string;
    fotoPerfil: string;
    numeroAdmins: number;
    numeroClientes: number;
    numeroVigilantes: number;
}

const GimnasiosPage: React.FC = () => {
    const [gimnasios, setGimnasios] = useState<GimnasioData[]>([]);
    const [createModalOpen, setCreateModalOpen] = useState(false);
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' as 'success' | 'error' });

    useEffect(() => {
        const fetchGimnasios = async () => {
            try {
                const data = await getGimnasios();
                setGimnasios(data);
            } catch (error) {
                console.error('Error al obtener gimnasios:', error);
            }
        };
        fetchGimnasios();
    }, []);

    const handleCreateGym = async (gimnasioData: Omit<GimnasioData, 'id'>) => {
        try {
            const newGym = await crearGimnasio(gimnasioData);
            setGimnasios((prev) => [...prev, newGym]);
            setSnackbar({ open: true, message: 'Gimnasio creado con éxito', severity: 'success' });
        } catch (error) {
            setSnackbar({ open: true, message: 'Error al crear gimnasio', severity: 'error' });
        } finally {
            setCreateModalOpen(false);
        }
    };

    const handleEditGym = (gimnasio: GimnasioData) => {
        console.log('Editar gimnasio:', gimnasio);
        // Aquí puedes abrir un modal de edición con los datos del gimnasio seleccionado
    };

    const handleDeleteGym = (id: string) => {
        console.log('Eliminar gimnasio con ID:', id);
        setGimnasios((prev) => prev.filter((gym) => gym.id !== id));
        setSnackbar({ open: true, message: 'Gimnasio eliminado con éxito', severity: 'success' });
    };

    return (
        <SuperAdminLayout>
            <Box>
                <Typography variant="h4" gutterBottom>
                    Gimnasios
                </Typography>
                {/* Tabla de gimnasios */}
                <GimnasiosTable gimnasios={gimnasios} onEdit={handleEditGym} onDelete={handleDeleteGym} />
                
                {/* Botón para crear gimnasio */}
                <Fab
                    color="primary"
                    aria-label="add"
                    sx={{ position: 'fixed', bottom: 16, right: 16 }}
                    onClick={() => setCreateModalOpen(true)}
                >
                    <Add />
                </Fab>

                {/* Formulario de creación */}
                <CrearGimnasioForm
                    open={createModalOpen}
                    onClose={() => setCreateModalOpen(false)}
                    onSave={handleCreateGym}
                />

                {/* Snackbar de notificaciones */}
                <Snackbar
                    open={snackbar.open}
                    autoHideDuration={6000}
                    onClose={() => setSnackbar({ ...snackbar, open: false })}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                >
                    <Alert severity={snackbar.severity}>{snackbar.message}</Alert>
                </Snackbar>
            </Box>
        </SuperAdminLayout>
    );
};

export default GimnasiosPage;
