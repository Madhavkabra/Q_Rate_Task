'use client';

import { createTheme as createMuiTheme } from '../../components/Mui';
import { baseThemeOptions } from './base-theme-options';
import { darkThemeOptions } from './dark-theme-options';
import { lightThemeOptions } from './light-theme-options';

const createTheme = (config) => {
  return createMuiTheme(
    baseThemeOptions,
    config.mode === 'dark' ? darkThemeOptions : lightThemeOptions,
    {
      direction: config.direction,
    }
  );
};

const theme = createTheme({ mode: 'light', direction: 'ltr' });

export default theme;
