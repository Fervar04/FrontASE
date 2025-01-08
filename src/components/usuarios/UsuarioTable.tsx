import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { Usuario } from '../../services/usuarios';

interface Props {
    usuarios: Usuario[];
    onEdit: (usuario: Usuario) => void;
    onDelete: (userId: string) => void;
}

const UsuarioTable: React.FC<Props> = ({ usuarios, onEdit, onDelete }) => (
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Correo Electrónico</TableCell> {/* Ajuste: correoElectronico */}
                    <TableCell>Teléfono</TableCell>
                    <TableCell>Género</TableCell>
                    <TableCell>Acciones</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {usuarios.map((usuario) => (
                    <TableRow key={usuario.userId}>
                        <TableCell>{`${usuario.nombre} ${usuario.apellido}`}</TableCell>
                        <TableCell>{usuario.correoElectronico}</TableCell> {/* Ajustado a correoElectronico */}
                        <TableCell>{usuario.telefono}</TableCell>
                        <TableCell>{usuario.genero}</TableCell>
                        <TableCell>
                            <Button
                                variant="contained"
                                color="primary"
                                startIcon={<Edit />}
                                sx={{ marginRight: 1 }}
                                onClick={() => onEdit(usuario)}
                            >
                                Editar
                            </Button>
                            <Button
                                variant="contained"
                                color="error"
                                startIcon={<Delete />}
                                onClick={() => onDelete(usuario.userId)}
                            >
                                Eliminar
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);

export default UsuarioTable;
