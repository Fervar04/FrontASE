import React, { useEffect, useState } from "react";
import {
  getUsuarios,
  deleteUsuario,
  editUsuario,
} from "../../services/usuarios";
import { crearUsuario, CrearUsuarioDto } from "../../services/crearUsuario"; // Servicio para crear usuario
import { Box, Typography, Fab, Snackbar, Alert } from "@mui/material";
import { Add } from "@mui/icons-material";
import UsuarioTable from "../../components/usuarios/UsuarioTable";
import ConfirmDialog from "../../components/ConfirmDialog";
import UsuarioForm from "../../components/usuarios/UsuarioForm";
import CrearUsuarioForm from "../../components/usuarios/CrearUsuarioForm"; // Formulario para crear usuario
import SuperAdminLayout from "../../layouts/SuperAdminLayout";
import { Usuario } from "../../services/usuarios";
import { Backdrop, CircularProgress } from "@mui/material";

const UsuariosPage: React.FC = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const [openUsuarioForm, setOpenUsuarioForm] = useState(false);
  const [openCrearUsuarioForm, setOpenCrearUsuarioForm] = useState(false); // Estado para el formulario de creación
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });
  const [selectedUsuarioId, setSelectedUsuarioId] = useState<string | null>(
    null
  );
  const [currentUsuario, setCurrentUsuario] = useState<Partial<Usuario>>({});
  const [isLoading, setIsLoading] = useState(false);

  // Obtener lista de usuarios
  const fetchUsuarios = async () => {
    setIsLoading(true); // Activa la pantalla de carga
    try {
      const data = await getUsuarios();
      setUsuarios(data);
    } catch (error: any) {
      console.error("Error al obtener los usuarios:", error.message || error);
      setSnackbar({
        open: true,
        message: "Error al cargar usuarios",
        severity: "error",
      });
    } finally {
      setIsLoading(false); // Desactiva la pantalla de carga
    }
  };

  // Manejo de edición
  const handleEditUsuario = async () => {
    if (currentUsuario && currentUsuario.userId) {
      setIsLoading(true); // Activa la pantalla de carga
      try {
        const updatedUsuario = await editUsuario(
          currentUsuario.userId,
          currentUsuario
        );
        setUsuarios((prevUsuarios) =>
          prevUsuarios.map((usuario) =>
            usuario.userId === updatedUsuario.userId ? updatedUsuario : usuario
          )
        );
        setSnackbar({
          open: true,
          message: "Usuario actualizado con éxito.",
          severity: "success",
        });
      } catch (error: any) {
        console.error("Error al editar el usuario:", error.message || error);
        setSnackbar({
          open: true,
          message: "Error al actualizar el usuario.",
          severity: "error",
        });
      } finally {
        setIsLoading(false); // Desactiva la pantalla de carga
        setOpenUsuarioForm(false); // Cierra el formulario
        setCurrentUsuario({});
      }
    }
  };

  // Manejo de creación
  const handleCrearUsuario = async (nuevoUsuario: CrearUsuarioDto) => {
    setIsLoading(true); // Activa la pantalla de carga
    try {
      await crearUsuario(nuevoUsuario);
      await fetchUsuarios(); // Recarga la lista de usuarios
      setSnackbar({
        open: true,
        message: "Usuario creado con éxito.",
        severity: "success",
      });
    } catch (error: any) {
      console.error("Error al crear el usuario:", error.message || error);
      setSnackbar({
        open: true,
        message: "Error al crear el usuario.",
        severity: "error",
      });
    } finally {
      setIsLoading(false); // Desactiva la pantalla de carga
      setOpenCrearUsuarioForm(false); // Cierra el formulario
    }
  };

  // Manejo de eliminación
  const handleDeleteClick = (userId: string) => {
    setSelectedUsuarioId(userId);
    setOpenConfirmDialog(true);
  };

  const handleDelete = async () => {
    if (selectedUsuarioId) {
      setIsLoading(true); // Activa la pantalla de carga
      try {
        await deleteUsuario(selectedUsuarioId);
        setUsuarios((prevUsuarios) =>
          prevUsuarios.filter((usuario) => usuario.userId !== selectedUsuarioId)
        );
        setSnackbar({
          open: true,
          message: "Usuario eliminado con éxito.",
          severity: "success",
        });
      } catch (error: any) {
        console.error("Error al eliminar el usuario:", error.message || error);
        setSnackbar({
          open: true,
          message: "Error al eliminar el usuario.",
          severity: "error",
        });
      } finally {
        setIsLoading(false); // Desactiva la pantalla de carga
        setOpenConfirmDialog(false); // Cierra el diálogo de confirmación
        setSelectedUsuarioId(null);
      }
    }
  };

  // Cargar usuarios al iniciar
  useEffect(() => {
    fetchUsuarios();
  }, []);

  return (
    <SuperAdminLayout>
      <Box>
        <Typography
          variant="h4"
          sx={{
            marginBottom: 3,
            textAlign: "center",
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          Lista de Usuarios
        </Typography>

        {/* Tabla de usuarios */}
        <UsuarioTable
          usuarios={usuarios}
          onEdit={(usuario) => {
            setCurrentUsuario(usuario);
            setOpenUsuarioForm(true);
          }}
          onDelete={handleDeleteClick}
        />

        {/* Diálogo de confirmación */}
        <ConfirmDialog
          open={openConfirmDialog}
          title="Confirmar eliminación"
          content="¿Estás seguro de que deseas eliminar este usuario? Esta acción no se puede deshacer."
          onClose={() => setOpenConfirmDialog(false)}
          onConfirm={handleDelete}
        />

        {/* Formulario para editar usuario */}
        <UsuarioForm
          open={openUsuarioForm}
          usuario={currentUsuario}
          onClose={() => {
            setOpenUsuarioForm(false);
            setCurrentUsuario({});
          }}
          onSave={handleEditUsuario}
          onInputChange={(e) =>
            setCurrentUsuario((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />

        {/* Formulario para crear usuario */}
        <CrearUsuarioForm
          open={openCrearUsuarioForm}
          onClose={() => setOpenCrearUsuarioForm(false)}
          onSave={handleCrearUsuario}
        />

        {/* Snackbar para notificaciones */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert severity={snackbar.severity}>{snackbar.message}</Alert>
        </Snackbar>

        {/* Botón flotante para añadir usuario */}
        <Fab
          color="primary"
          aria-label="add"
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
            backgroundColor: "#800080",
            "&:hover": {
              backgroundColor: "#660066",
            },
          }}
          onClick={() => setOpenCrearUsuarioForm(true)}
        >
          <Add />
        </Fab>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Box>
    </SuperAdminLayout>
  );
};

export default UsuariosPage;
