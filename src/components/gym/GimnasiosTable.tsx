import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar } from '@mui/material';

// Tipo de datos para gimnasio
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

interface GimnasiosTableProps {
    gimnasios: GimnasioData[];
}

const GimnasiosTable: React.FC<GimnasiosTableProps> = ({ gimnasios }) => {
    return (
        <TableContainer component={Paper} sx={{ marginTop: 2 }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Ciudad</TableCell>
                        <TableCell>Estado</TableCell>
                        <TableCell>País</TableCell>
                        <TableCell>Código Postal</TableCell>
                        <TableCell>Foto Perfil</TableCell>
                        <TableCell>Admins</TableCell>
                        <TableCell>Clientes</TableCell>
                        <TableCell>Vigilantes</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {gimnasios.map((gym) => (
                        <TableRow key={gym.id}>
                            <TableCell>{gym.nombre}</TableCell>
                            <TableCell>{gym.ciudad}</TableCell>
                            <TableCell>{gym.estado}</TableCell>
                            <TableCell>{gym.pais}</TableCell>
                            <TableCell>{gym.codigoPostal}</TableCell>
                            <TableCell>
                                <Avatar src={gym.fotoPerfil} alt="Foto Perfil" sx={{ width: 50, height: 50 }} />
                            </TableCell>
                            <TableCell>{gym.numeroAdmins}</TableCell>
                            <TableCell>{gym.numeroClientes}</TableCell>
                            <TableCell>{gym.numeroVigilantes}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default GimnasiosTable;
