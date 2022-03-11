import React from 'react';
import { Outlet } from 'react-router';
import TopNavbar from '../components/TopNavbar';
import AlertMessage from '../components/AlertMessage';
import useAlertMessage from '../hooks/useAlertMessage';

export default function MainLayout() {
  const { severity } = useAlertMessage();
  return (
    <>
      <TopNavbar />
      <Outlet />
      {severity && <AlertMessage />}
    </>
  );
}