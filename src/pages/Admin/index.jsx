// pages/Admin/index.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminLayout from './layout'; // Importando o layout do admin

function Admin() {
  return (
    <AdminLayout>
      <Outlet /> 
    </AdminLayout>
  );
}

export default Admin;
