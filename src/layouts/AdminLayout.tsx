import React from 'react';

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <nav>
                <h2>Admin Menu</h2>
            </nav>
            <main>{children}</main>
        </div>
    );
};

export default AdminLayout;
