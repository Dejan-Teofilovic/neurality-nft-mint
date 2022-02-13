import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Router';
import ThemeConfig from './theme';

export default function App() {
  return (
    <ThemeConfig>
      <Router>
        <Routes />
      </Router>
    </ThemeConfig>
  );
}
