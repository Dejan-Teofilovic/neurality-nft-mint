import React from 'react';
import { Navigate } from 'react-router-dom';
import useWallet from '../hooks/useWallet';

export default function PrivateAuthGuard({ children }) {
  const { tokenId } = useWallet();

  if (!tokenId) {
    return <Navigate to="/" />;
  }
  return <>{children}</>;
}