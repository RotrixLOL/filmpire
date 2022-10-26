import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { Provider } from 'react-redux';

import ToggleColorModeProvider from './utils/ToggleColorMode';
import App from './App';
import store from './redux';
import './index.css';

const theme = createTheme({});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToggleColorModeProvider>
        <Router>
          <App />
        </Router>
      </ToggleColorModeProvider>
    </Provider>
  </React.StrictMode>,
);
