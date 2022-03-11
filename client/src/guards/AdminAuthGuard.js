import React, { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdminAuth from '../hooks/useAdminAuth';
import AdminLogin from '../pages/admin/AdminLogin';

export default function AdminAuthGuard({ children }) {
  const { accessToken } = useAdminAuth();
  const { pathname } = useLocation();
  const [requestedLocation, setRequestedLocation] = useState(null);

  if (!accessToken) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <AdminLogin />;
    // return <Navigate to={requestedLocation} />;
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <>{children}</>;
}