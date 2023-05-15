'use client';
import theme from '@/src/theme';
import React from 'react';
import { Box, ThemeProvider } from '../components/Mui/material';
import PropTypes from 'prop-types';
import SideBar from '@/components/SideBar';
import { Provider } from 'react-redux';
import store from '../store';
import Progress from '../components/Progress';
import '@/styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html>
      <ThemeProvider theme={theme}>
        <body>
          <Provider store={store}>
            <Box display='flex' width='100vw' fontSize='8px'>
              <Progress />
              <SideBar />
              <Box sx={{ width: '100vw', position: 'relative', mt: '100px' }}>
                {children}
              </Box>
            </Box>
          </Provider>
        </body>
      </ThemeProvider>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
