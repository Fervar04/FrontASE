import React, { useState } from 'react';
import {
    AppBar,
    Box,
    CssBaseline,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
    Avatar,
    Divider,
} from '@mui/material';
import { Home, People, FitnessCenter, AdminPanelSettings, Logout, ArrowBack, ArrowForward } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const drawerWidthExpanded = 280;
const drawerWidthCollapsed = 80;
const drawerWidth = 20;

const menuItems = [
    { text: 'Inicio', path: '/super-admin', icon: <Home /> },
    { text: 'Usuarios', path: '/super-admin/usuarios', icon: <People /> },
    { text: 'Gimnasios', path: '/super-admin/gimnasios', icon: <FitnessCenter /> },
    { text: 'Administradores', path: '/super-admin/administradores', icon: <AdminPanelSettings /> },
];

const SuperAdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const navigate = useNavigate();

    const toggleDrawer = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleLogout = () => {
        // Limpiar datos de autenticación y redirigir al login
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            {/* Barra superior */}
            <AppBar
                position="fixed"
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    backgroundColor: 'background.paper',
                }}
            >

            </AppBar>

            {/* Barra lateral */}
            <Drawer
                variant="permanent"
                sx={{
                    width: isCollapsed ? drawerWidthCollapsed : drawerWidthExpanded,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: isCollapsed ? drawerWidthCollapsed : drawerWidthExpanded,
                        boxSizing: 'border-box',
                        backgroundColor: 'background.paper',
                        color: 'text.primary',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between', // Asegura que los botones estén al final
                        transition: 'width 0.5s ease, background-color 0.3s ease',
                        overflow: 'hidden', // Para ocultar contenido al colapsar
                    },
                }}
            >
                <Box>
                    <Toolbar />
                    {/* Logo de la empresa */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: isCollapsed ? 'center' : 'flex-start',
                            alignItems: 'center',
                            padding: 2,
                            transition: 'all 0.5s ease',
                        }}
                    >
                        <Avatar
                            src="/src/assets/logo.png" // Cambia por la ruta de tu logo
                            alt="Logo de la empresa"
                            sx={{
                                width: isCollapsed ? 40 : 60,
                                height: isCollapsed ? 40 : 60,
                                transition: 'width 0.5s ease, height 0.5s ease',
                            }}
                        />
                        {!isCollapsed && (
                            <Typography
                                variant="h6"
                                sx={{
                                    marginLeft: 2,
                                    opacity: isCollapsed ? 0 : 1,
                                    transition: 'opacity 0.3s ease',
                                }}
                            >
                                Gym Admin
                            </Typography>
                        )}
                    </Box>

                    {/* Menú */}
                    <List>
                        {menuItems.map((item) => (
                            <ListItem key={item.text} disablePadding>
                                <ListItemButton
                                    onClick={() => navigate(item.path)}
                                    sx={{
                                        justifyContent: isCollapsed ? 'center' : 'flex-start',
                                        transition: 'padding 0.3s ease',
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            justifyContent: 'center',
                                            color: 'primary.main',
                                            minWidth: isCollapsed ? 'auto' : 56,
                                            transition: 'all 0.3s ease',
                                        }}
                                    >
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={item.text}
                                        sx={{
                                            opacity: isCollapsed ? 0 : 1,
                                            whiteSpace: 'nowrap',
                                            transition: 'opacity 0.3s ease',
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>

                {/* Botones al final */}
                <Box sx={{ padding: 2 }}>
                    <Divider />
                    {/* Botón de cerrar sesión */}
                    <ListItem disablePadding>
                        <ListItemButton
                            onClick={handleLogout}
                            sx={{
                                justifyContent: isCollapsed ? 'center' : 'flex-start',
                                transition: 'padding 0.3s ease',
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    color: 'error.main',
                                    justifyContent: 'center',
                                    minWidth: isCollapsed ? 'auto' : 56,
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                <Logout />
                            </ListItemIcon>
                            <ListItemText
                                primary="Cerrar Sesión"
                                sx={{
                                    opacity: isCollapsed ? 0 : 1,
                                    whiteSpace: 'nowrap',
                                    transition: 'opacity 0.3s ease',
                                }}
                            />
                        </ListItemButton>
                    </ListItem>

                    {/* Botón para colapsar la barra */}
                    <ListItem disablePadding>
                        <ListItemButton
                            onClick={toggleDrawer}
                            sx={{
                                justifyContent: isCollapsed ? 'center' : 'flex-start',
                                transition: 'padding 0.3s ease',
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    color: 'primary.main',
                                    justifyContent: 'center',
                                    minWidth: isCollapsed ? 'auto' : 56,
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                {isCollapsed ? <ArrowForward /> : <ArrowBack />}
                            </ListItemIcon>
                            <ListItemText
                                primary="Colapsar Barra"
                                sx={{
                                    opacity: isCollapsed ? 0 : 1,
                                    whiteSpace: 'nowrap',
                                    transition: 'opacity 0.3s ease',
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                </Box>
            </Drawer>

            {/* Contenido principal */}
            <Box
    component="main"
    sx={{
        flexGrow: 1,
        p: 2, // Ajusta el padding vertical y horizontal según tus necesidades
        marginLeft: `${drawerWidth}px`, // Mantén el margen igual al ancho de la barra
    }}
>
    {children}
</Box>
        </Box>
    );
};

export default SuperAdminLayout;
