import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MetaMaskProvider } from 'metamask-react';
import { AlertMessageProvider } from './contexts/AlertMessageContext';
import { WalletProvider } from './contexts/WalletContext';
import { WhitelistProvider } from './contexts/WhitelistContext';
import Routes from './Router';
import ThemeConfig from './theme';

export default function App() {
  return (
    <ThemeConfig>
      <MetaMaskProvider>
        <AlertMessageProvider>

          <WhitelistProvider>
            <WalletProvider>
              <Router>
                <Routes />
              </Router>
            </WalletProvider>

          </WhitelistProvider>
        </AlertMessageProvider>
      </MetaMaskProvider>
    </ThemeConfig>
  );
}
