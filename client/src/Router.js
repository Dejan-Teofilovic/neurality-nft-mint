import React from 'react';
import { useRoutes } from 'react-router';
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';
import HomePage from './pages/HomePage';

export default function Routes() {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <HomePage />
        }
      ]
    },
    {
      path: '/admin',
      element: <AdminLayout />
    }
  ]);
}