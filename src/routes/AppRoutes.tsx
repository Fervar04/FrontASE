import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import AdminDashboard from '../pages/AdminDashboard';
import SuperAdminDashboard from '../pages/SuperAdminDashboard';
import DownloadAppPage from '../pages/DownloadAppPage';
import UsuariosPage from '../pages/SuperAdmin/UsuariosPage';
import GimnasiosPage from '../pages/SuperAdmin/GimnasiosPage';
import AdministradoresPage from '../pages/SuperAdmin/AdministradoresPage';

const AppRoutes = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/super-admin" element={<SuperAdminDashboard />} />
            <Route path="/super-admin/usuarios" element={<UsuariosPage />} />
            <Route path="/super-admin/gimnasios" element={<GimnasiosPage />} />
            <Route path="/super-admin/administradores" element={<AdministradoresPage />} />
            <Route path="/download-app" element={<DownloadAppPage />} />
        </Routes>
    </Router>
);

export default AppRoutes;
