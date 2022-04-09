import React from 'react';
import useAdminAuth from '../hooks/useAdminAuth';
import AdminLogin from '../pages/admin/AdminLogin';

export default function AdminAuthGuard({ children }) {
  const { accessToken } = useAdminAuth();
  if (!accessToken) {
    return <AdminLogin />;
  } else {
    return <>{children}</>;
  }
}