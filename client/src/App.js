import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AlertMessageProvider } from './contexts/AlertMessageContext';
import { WalletProvider } from './contexts/WalletContext';
import { WhitelistProvider } from './contexts/WhitelistContext';
import { AdminAuthProvider } from './contexts/AdminAuthContext';
import Routes from './Router';
import ThemeConfig from './theme';

export default function App() {
  return (
    <ThemeConfig>
      <AlertMessageProvider>
        <WhitelistProvider>
          <WalletProvider>
            <AdminAuthProvider>
              <Router>
                <Routes />
              </Router>
            </AdminAuthProvider>
          </WalletProvider>
        </WhitelistProvider>
      </AlertMessageProvider>
    </ThemeConfig>
  );
}
