import { createTheme as createMuiTheme } from '@mui/material/styles';

const { breakpoints } = createMuiTheme();

const constants = {
  majorSidebarWidth: '32.25rem',
  miniSidebarWidth: '10rem',
  sidebarWidth: '42.25rem',
};

export const baseThemeOptions = {
  breakpoints,
  constants,
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
        sizeLarge: {
          fontSize: 15,
        },
        sizeMedium: {
          fontSize: 14,
        },
        sizeSmall: {
          fontSize: 13,
        },
      },
    },

    MuiIcon: {
      styleOverrides: {
        fontSizeLarge: {
          fontSize: 32,
        },
      },
    },

    MuiListItem: {
      styleOverrides: {
        button: {
          '&:before': {
            borderRadius: '0px 2px 2px 0px',
            bottom: 0,
            content: '""',
            left: 0,
            position: 'absolute',
            top: 0,
            transform: 'scaleX(0)',
            transformOrigin: 'left center',
            transition: 'transform 0.25s',
            width: 2,
          },
          '&:active:before': {
            transform: 'scaleX(1)',
          },
        },
        dense: {
          paddingBottom: 6,
          paddingLeft: 16,
          paddingRight: 16,
          paddingTop: 6,
        },
      },
    },
    MuiListItemText: {
      defaultProps: {
        primaryTypographyProps: {
          variant: 'body2',
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 400,
          letterSpacing: 0.15,
          lineHeight: 1.43,
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        filled: {
          '&:focus': {
            backgroundColor: 'transparent',
          },
        },
      },
    },

    MuiSvgIcon: {
      styleOverrides: {
        fontSizeLarge: {
          fontSize: 32,
        },
        fontSizeMedium: {
          fontSize: 17,
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#2A2F3C',
        },
      },
    },
  },
  shape: {
    borderRadius: 6,
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
      fontSize: '6rem',
      fontWeight: 600,
      lineHeight: 1.5,
      fontStyle: 'normal',
      textTransform: 'capitalize',
    },
    h2: {
      fontSize: '4.5rem',
      fontWeight: 600,
      lineHeight: 1.5,
      fontStyle: 'normal',
      textTransform: 'capitalize',
    },
    h3: {
      fontSize: '4rem',
      fontWeight: 600,
      lineHeight: 1.5,
      fontStyle: 'normal',
      textTransform: 'capitalize',
    },
    h4: {
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '3rem',
      lineHeight: '1.5',
      textTransform: 'capitalize',
    },
    h5: {
      fontStyle: 'normal',
      fontSize: '2.25rem',
      fontWeight: 600,
      lineHeight: 1.5,
      textTransform: 'capitalize',
    },
    h6: {
      fontStyle: 'normal',
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.5,
      textTransform: 'capitalize',
    },
    body1: {
      fontWeight: 400,
      fontStyle: 'normal',
      fontSize: '2rem',
      lineHeight: 1.5,
      letterSpacing: 0.15,
    },
    body2: {
      fontWeight: 400,
      fontStyle: 'normal',
      fontSize: '1.75rem',
      lineHeight: 1.6,
      letterSpacing: 0.15,
    },
    subtitle1: {
      fontStyle: 'normal',
      fontSize: '2rem',
      fontWeight: 500,
      lineHeight: 1.75,
    },
    subtitle2: {
      fontStyle: 'normal',
      fontSize: '1.75rem',
      fontWeight: 500,
      lineHeight: 1.75,
    },
    caption: {
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '1.5rem',
      lineHeight: 1.6,
      letterSpacing: 0.15,
    },
    overline: {
      fontStyle: 'normal',
      fontSize: '1.5rem',
      fontWeight: 600,
      letterSpacing: 1,
      lineHeight: 2.46,
      textTransform: 'uppercase',
    },
    alertTitle: {
      fontSize: '2rem',
      fontWeight: 500,
      letterSpacing: 0.15,
      lineHeight: '3rem',
    },
  },
};
