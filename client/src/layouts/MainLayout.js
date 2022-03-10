import React from 'react';
import { Outlet } from 'react-router';
import TopNavbar from '../components/TopNavbar';

export default function MainLayout() {
  return (
    <>
      <TopNavbar />
      <Outlet />
    </>
  );
}