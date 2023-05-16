const common = {
  white: '#ffffff',
};

const primary = {
  200: '#FD9972',
  300: '#ED7342',
};

const secondary = {
  600: '#215263',
};

const neutral = {
  200: '#E1E3EA',
  500: '#9AA1B7',
  800: '#2A2F3C',
};

const success = {
  200: '#A5D6A7',
};

const actions = {
  200: '#F2F2F3',
};

const divider = neutral[200];

const palette = {
  common,
  primary,
  secondary,
  neutral,
  success,
  actions,
  mode: 'light',
};

export const lightThemeOptions = {
  palette,
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          p: '0 !important',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          '& .MuiIconButton-root': {
            ':hover': {
              background: 'none',
            },
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'initial',
          boxShadow: 'none',
          minWidth: 'fit-content',
          ':hover': {
            boxShadow: 'none',
          },

          '&.MuiButton-text': {
            padding: 0,
            fontSize: '1.75rem',
            lineHeight: '3rem',
            letterSpacing: '0.019rem',
            fontWeight: 500,
            textTransform: 'capitalize',
            ':hover': {
              background: 'none',
              textDecoration: 'underline',
            },
          },

          '&.MuiButton-textPrimary': { color: primary[300] },
          '&.MuiButton-textSecondary': { color: secondary[600] },
        },
      },
    },

    MuiListItem: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: '#FFF4F0',
            color: 'red',
            '&& .MuiTypography-root': { color: '#ED7342' },
          },
        },
        typography: {
          color: 'red',
        },
        button: {
          '&:before': {
            backgroundColor: primary[200],
          },
          '& .MuiSvgIcon-root': {
            color: '#ED7342',
          },
        },
      },
    },

    MuiSvgIcon: {
      styleOverrides: {
        fontSizeMedium: {
          fontSize: 22,
        },
      },
    },

    MuiCheckbox: {
      styleOverrides: {
        root: {
          '&.MuiCheckbox-root': {
            padding: 0,
            margin: 0,

            '& .MuiSvgIcon-fontSizeMedium': {
              fontSize: '3rem',
            },
            '& .MuiSvgIcon-fontSizeSmall': {
              fontSize: '2.5rem',
            },
            '&.MuiFormControlLabel-root': {
              margin: '0!important',
            },
          },

          '&.Mui-checked.Mui-disabled+.MuiSwitch-track': {
            backgroundColor: success[200],
          },
        },

        track: {
          backgroundColor: neutral['500'],
        },
        thumb: {
          backgroundColor: '#ffffff',
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          marginRight: 0,
          padding: 0,
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          padding: '0.75rem 2rem',
          fontWeight: 400,
          fontSize: '1.75rem',
          lineHeight: 1.6,
          letterSpacing: '0.019rem',

          '&:hover': {
            backgroundColor: common.white,
            color: primary[300],
          },
          '&.Mui-selected': {
            backgroundColor: actions[200],
            color: neutral[800],
            '&:hover': {
              backgroundColor: actions[200],
            },
          },
        },
      },
    },

    MuiLinearProgress: {
      styleOverrides: {
        root: {
          '&.MuiLinearProgress-root': {
            height: '1rem',
            borderRadius: '0.5rem',

            '&.MuiLinearProgress-colorPrimary': {
              backgroundColor: '#FFF4F0',
            },

            '& .MuiLinearProgress-barColorPrimary': {
              backgroundColor: primary[300],
            },

            '&.MuiLinearProgress-colorSecondary': {
              backgroundColor: 'rgba(33, 82, 99, 0.6)',
            },

            '& .MuiLinearProgress-barColorSecondary': {
              backgroundColor: secondary[600],
            },
          },
        },
      },
    },
  },
};
