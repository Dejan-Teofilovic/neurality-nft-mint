import React from 'react';
import { Outlet } from 'react-router';
import AlertMessage from '../components/AlertMessage';
import useAlertMessage from '../hooks/useAlertMessage';

export default function AdminLayout() {
  const { severity } = useAlertMessage();
  return (
    <>
      <Outlet />
      {severity && <AlertMessage />}
    </>
  );
}