import React from 'react';
import { Snackbar, Alert } from '@mui/material';

interface Props {
    open: boolean;
    message: string;
    severity: 'success' | 'error';
    onClose: () => void;
}

const AlertComponent: React.FC<Props> = ({ open, message, severity, onClose }) => (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
        <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
            {message}
        </Alert>
    </Snackbar>
);

export default AlertComponent;
