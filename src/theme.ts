import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#6200EE', // Color principal (morado)
        },
        secondary: {
            main: '#03DAC6', // Color secundario (verde claro)
        },
        background: {
            default: '#121212', // Fondo oscuro
            paper: '#1E1E1E', // Fondo de los paneles
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#A5A5A5',
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
});

export default darkTheme;
