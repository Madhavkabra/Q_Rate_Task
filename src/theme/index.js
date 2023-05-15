"use client";

import { createTheme as createMuiTheme } from "../../components/Mui/material";
import { baseThemeOptions } from "./base-theme-options";
import { lightThemeOptions } from "./light-theme-options";

const createTheme = (config) => {
  return createMuiTheme(baseThemeOptions, lightThemeOptions, {});
};

const theme = createTheme();

export default theme;
