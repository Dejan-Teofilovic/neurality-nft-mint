import React from 'react';
import { useRoutes } from 'react-router';
import HomePage from './pages/HomePage';

export default function Routes() {
  return useRoutes([
    {
      path: '/',
      element: <HomePage />
    }
  ]);
}