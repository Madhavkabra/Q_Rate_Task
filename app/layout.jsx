'use client';
import theme from '@/src/theme';
import React from 'react';
import { Box, ThemeProvider } from '../components/Mui/material';
import PropTypes from 'prop-types';
import SideBar from '@/components/SideBar';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '../store';
import Progress from '../components/Progress';
import ErrorBoundary from '../components/ErrorBoundry';
import '@/styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html>
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <body>
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                <Box display='flex' width='100vw' fontSize='8px'>
                  <Progress />
                  <SideBar />
                  <Box
                    sx={{ width: '100vw', position: 'relative', mt: '100px' }}
                  >
                    {children}
                  </Box>
                </Box>
              </PersistGate>
            </Provider>
          </body>
        </ThemeProvider>
      </ErrorBoundary>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
