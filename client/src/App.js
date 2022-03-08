import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AlertMessageProvider } from './contexts/AlertMessageContext';
import { WhitelistProvider } from './contexts/WhitelistContext';
import Routes from './Router';
import ThemeConfig from './theme';

export default function App() {
  return (
    <ThemeConfig>
      <AlertMessageProvider>
        <WhitelistProvider>
          <Router>
            <Routes />
          </Router>
        </WhitelistProvider>
      </AlertMessageProvider>
    </ThemeConfig>
  );
}
