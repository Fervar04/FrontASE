import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { Cancel, CheckCircle } from '@mui/icons-material';

interface Props {
    open: boolean;
    title: string;
    content: string;
    onClose: () => void;
    onConfirm: () => void;
}

const ConfirmDialog: React.FC<Props> = ({ open, title, content, onClose, onConfirm }) => (
    <Dialog open={open} onClose={onClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>{content}</DialogContent>
        <DialogActions>
            <Button
                onClick={onClose}
                variant="contained"
                color="secondary"
                startIcon={<Cancel />}
                sx={{
                    backgroundColor: '#ff0000',
                    '&:hover': {
                        backgroundColor: '#cc0000',
                    },
                }}
            >
                Cancelar
            </Button>
            <Button
                onClick={onConfirm}
                variant="contained"
                color="primary"
                startIcon={<CheckCircle />}
                sx={{
                    backgroundColor: '#800080',
                    '&:hover': {
                        backgroundColor: '#660066',
                    },
                }}
            >
                Confirmar
            </Button>
        </DialogActions>
    </Dialog>
);

export default ConfirmDialog;
