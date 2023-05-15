const common = {
  white: '#ffffff',
  black: '#000000',
};

const primary = {
  100: '#FFF4F0',
  200: '#FD9972',
  300: '#ED7342',
};

const secondary = {
  100: '#FFF4F0',
  200: '#BCE2E2',
  300: '#86C8C8',
  400: '#0F9292',
  500: '#187B96',
  600: '#215263',
};

const neutral = {
  100: '#F3F4F7',
  200: '#E1E3EA',
  300: '#D5D8E1',
  400: '#B7BDCC',
  500: '#9AA1B7',
  600: '#7C85A2',
  700: '#3F455A',
  800: '#2A2F3C',
  900: '#1E212A',
};

const error = {
  100: '#FDEDED',
  200: '#F5A5A2',
  300: '#EF6F6B',
  400: '#EC4C47',
  500: '#A53531',
  600: '#832500',
  700: '#5E1E1C',
};

const warning = {
  100: '#FBF2EA',
  200: '#FFE8C5',
  300: '#EFA12D',
  400: '#E09B55',
  500: '#975B1E',
  600: '#573411',
};

const success = {
  100: '#EDF7ED',
  200: '#A5D6A7',
  300: '#7BC67E',
  400: '#27AB6E',
  500: '#3B873E',
  600: '#1E4620',
};

const info = {
  100: '#F0F9F9',
  200: '#3F8CD4',
  300: '#0B4E8D',
  400: '#062D51',
};

const actions = {
  100: '#F6F6F6',
  200: '#F2F2F3',
  300: '#EEEEEF',
  400: '#E4E5E6',
  500: '#C6C7CA',
  600: '#697789',
};

const other = {
  100: '#E8E8EA',
  200: '#CDD2DC',
  300: '#565867',
  400: '#7D7D7D',
};

const divider = neutral[200];

const palette = {
  common,
  primary,
  secondary,
  neutral,
  error,
  warning,
  success,
  info,
  actions,
  other,
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
          '&.MuiButton-textError': { color: error[400] },
          '&.MuiButton-textInfo': { color: neutral[600] },

          '&.MuiButton-containedPrimary': {
            background: primary[300],
            color: common.white,
            ':hover': {
              background: secondary[600],
            },
            '&.Mui-disabled': {
              background: actions[500],
              color: common.white,
            },
          },

          '&.MuiButton-containedSecondary': {
            background: secondary[600],
            color: common.white,
            ':hover': {
              background: primary[300],
            },
            '&.Mui-disabled': {
              background: actions[500],
              color: common.white,
            },
          },

          '&.MuiButton-containedInfo': {
            background: neutral[300],
            color: neutral[600],
            ':hover': {
              background: neutral[600],
              color: common.white,
            },
            '&.Mui-disabled': {
              background: actions[500],
              color: common.white,
            },
          },

          '&.MuiButton-containedSizeSmall': {
            fontSize: '1.625rem',
            lineHeight: '2.75rem',
            letterSpacing: '0.019rem',
            fontWeight: 500,
            padding: '0.5rem 1.25rem',
            borderRadius: '0.375rem',
          },

          '&.MuiButton-containedSizeMedium': {
            fontSize: '1.75rem',
            lineHeight: '3rem',
            letterSpacing: '0.019rem',
            fontWeight: 500,
            padding: '0.75rem 2rem',
            borderRadius: '0.375rem',
          },

          '&.MuiButton-containedSizeLarge': {
            fontSize: '1.875rem',
            lineHeight: '3.25rem',
            letterSpacing: '0.019rem',
            fontWeight: 500,
            padding: '1rem 4rem',
            borderRadius: '0.375rem',
          },

          '&.MuiButton-containedSizeExtraLarge': {
            fontSize: '1.875rem',
            lineHeight: '3.25rem',
            letterSpacing: '0.019rem',
            fontWeight: 500,
            padding: '1.875rem 8.75rem',
            borderRadius: '0.375rem',
          },

          '&.MuiButton-outlinedPrimary': {
            background: common.white,
            color: primary[300],
            borderColor: primary[300],
            ':hover': {
              background: primary[300],
              color: common.white,
              borderColor: common.white,
            },
            '&.Mui-disabled': {
              background: neutral[100],
              color: neutral[500],
              borderColor: neutral[500],
            },
          },

          '&.MuiButton-outlinedSecondary': {
            background: common.white,
            color: secondary[600],
            borderColor: secondary[600],
            ':hover': {
              background: primary[300],
              color: common.white,
              borderColor: common.white,
            },
            '&.Mui-disabled': {
              background: neutral[100],
              color: neutral[500],
              borderColor: neutral[500],
            },
          },

          '&.MuiButton-outlinedInfo': {
            background: common.white,
            color: neutral[600],
            borderColor: neutral[300],
            ':hover': {
              background: neutral[600],
              color: common.white,
              borderColor: neutral[300],
            },
            '&.Mui-disabled': {
              background: neutral[100],
              color: neutral[500],
              borderColor: neutral[500],
            },
          },

          '&.MuiButton-outlinedError': {
            ':hover': {
              background: error[400],
              color: common.white,
              borderColor: error[400],
            },
          },

          '&.MuiButton-outlinedSizeSmall': {
            fontSize: '1.625rem',
            lineHeight: '2.75rem',
            letterSpacing: '0.019rem',
            fontWeight: 500,
            padding: '0.375rem 1.25rem',
            borderRadius: '0.375rem',
            borderWidth: 1,
          },

          '&.MuiButton-outlinedSizeMedium': {
            fontSize: '1.75rem',
            lineHeight: '3rem',
            letterSpacing: '0.019rem',
            fontWeight: 500,
            padding: '0.625rem 2rem',
            borderRadius: '0.375rem',
            borderWidth: 1,
          },

          '&.MuiButton-outlinedSizeLarge': {
            fontSize: '1.875rem',
            lineHeight: '3.25rem',
            letterSpacing: '0.019rem',
            fontWeight: 500,
            padding: '0.875rem 4rem',
            borderRadius: '0.375rem',
            borderWidth: 1,
          },
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          width: '100%',
          '& label': {
            fontSize: '1.75rem',
          },

          '& label.Mui-focused': {
            color: primary[300],
          },

          '& .MuiOutlinedInput-root': {
            borderRadius: '0.75rem',

            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: neutral[600],
              borderWidth: '0.125rem',
            },

            '& .error .MuiOutlinedInput-notchedOutline': {
              borderColor: error[400],
              color: error[400],
            },

            ':hover': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: primary[300],
                borderWidth: '0.25rem',
              },
            },
            '&.Mui-focused': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: primary[300],
                borderWidth: '0.25rem',
              },
            },
          },
          input: {
            fontWeight: 400,
            fontSize: '1.75rem',
            lineHeight: 1.6,
            padding: '1.75rem 1.5rem 1.875rem 1.5rem',
            '&:-webkit-autofill': {
              WebkitBoxShadow: '0 0 0 100px #fff inset',
              WebkitTextFillColor: neutral[700],
            },
          },
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          '&.MuiList-root': {
            fontWeight: 400,
            fontSize: '1.75rem',
            lineHeight: '3rem',
            color: secondary[600],
            cursor: 'pointer',
            backgroundColor: 'red',
          },
        },
      },
    },

    MuiAlert: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          '&.MuiAlert-outlinedError': {
            background: error[100],
            borderColor: error[400],
          },
          '&.MuiAlert-outlinedWarning': {
            background: warning[100],
            borderColor: warning[300],
            '& .MuiAlert-icon': {
              color: warning[300],
            },
          },
          '&.MuiAlert-outlinedInfo': {
            background: info[100],
            borderColor: secondary[400],
          },
          '&.MuiAlert-outlinedSuccess': {
            background: success[100],
            borderColor: success[400],
          },
          '& .MuiButtonBase-root': {
            ':hover': {
              background: 'transparent',
            },
          },
          '& .MuiTypography-alertTitle': {
            fontSize: 16,
            fontWeight: 500,
            letterSpacing: 0.15,
            lineHeight: '3rem',
          },
        },
      },
    },

    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          border: `0.125rem solid ${divider}`,
        },
      },
    },

    MuiAvatar: {
      styleOverrides: {
        root: {
          background: neutral[200],
          color: neutral[600],
          cursor: 'pointer',

          '& .MuiBadge-anchorOriginTopRight': {
            '&.MuiBadge-dot': {
              position: 'relative',
            },
          },
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          '&.MuiChip-root': {
            height: 'auto',
            '&.MuiChip-sizeMedium': {
              padding: '0.875rem 1.25rem',
              borderRadius: '0.75rem',
            },
            '& .MuiChip-labelMedium': {
              fontSize: '1.5rem',
              lineHeight: '2.25rem',
              padding: '0',
            },
            '& .MuiSvgIcon-fontSizeMedium': {
              fontSize: '2.25rem',
              marginRight: '0',
              marginLeft: '1rem',
            },

            '&.MuiChip-sizeSmall': {
              padding: '0.375rem 1.25rem',
              borderRadius: '0.75rem',
            },
            '& .MuiChip-labelSmall': {
              fontSize: '1.5rem',
              lineHeight: '2.25rem',
              padding: '0',
            },
            '& .MuiSvgIcon-fontSizeSmall': {
              fontSize: '1.5rem',
              marginRight: '0',
              marginLeft: '1rem',
            },
          },
          '&.MuiChip-colorDefault': {
            backgroundColor: neutral[100],
          },
          '&.MuiChip-outlinedDefault': {
            borderColor: neutral[300],
          },
          '&.MuiChip-filledPrimary': {
            backgroundColor: primary[300],
          },
          '&.MuiChip-outlinedPrimary': {
            borderColor: primary[100],
            '& .MuiChip-label': {
              color: primary[300],
            },
            '& .MuiSvgIcon-root': {
              color: '#ED7342',
            },
          },
          '&.MuiChip-filledSecondary': {
            backgroundColor: secondary[600],
          },
          '&.MuiChip-outlinedSecondary': {
            borderColor: secondary[200],
            '& .MuiChip-label': {
              color: secondary[600],
            },
            '& .MuiSvgIcon-root': {
              color: '#ED7342',
            },
          },
          '&.MuiChip-filledError': {
            backgroundColor: error[200],
            color: neutral[800],
            '& .MuiSvgIcon-root': {
              color: neutral[800],
            },
          },
          '&.MuiChip-outlinedError': {
            borderColor: error[100],
            '& .MuiChip-label': {
              color: error[200],
            },
            '& .MuiSvgIcon-root': {
              color: error[200],
            },
          },
          '&.MuiChip-filledWarning': {
            backgroundColor: warning[200],
            color: neutral[800],
            '& .MuiSvgIcon-root': {
              color: '#ED7342',
            },
          },
          '&.MuiChip-outlinedWarning': {
            borderColor: warning[100],
            '& .MuiChip-label': {
              color: warning[300],
            },
            '& .MuiSvgIcon-root': {
              color: '#ED7342',
            },
          },
          '&.MuiChip-filledSuccess': {
            backgroundColor: secondary[200],
            color: neutral[800],
            '& .MuiSvgIcon-root': {
              color: '#ED7342',
            },
          },
          '&.MuiChip-outlinedSuccess': {
            borderColor: secondary[100],
            '& .MuiChip-label': {
              color: secondary[300],
            },
            '& .MuiSvgIcon-root': {
              color: '#ED7342',
            },
          },
          '&.Mui-disabled': {
            backgroundColor: secondary[100],
            '& .MuiChip-label': {
              color: neutral[800],
            },
            '& .MuiSvgIcon-root': {
              color: '#ED7342',
            },
          },
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

    MuiDialog: {
      styleOverrides: {
        root: {
          paper: {
            backgroundColor: common.white,
            borderRadius: '0.5rem',
            boxShadow: '0px 36px 46px rgba(9, 30, 66, 0.12)',
            margin: '0',
            maxWidth: '51.25rem',
          },

          '& .MuiDialogTitle-root': {
            color: neutral[800],
            fontWeight: 600,
            fontSize: '3rem',
            lineHeight: 1.5,
            textAlign: 'center',
            textTransform: 'capitalize',
            padding: '4rem 4rem 1.5rem 4rem',
          },

          '& .MuiDialogContent-root': {
            textAlign: 'center',
            padding: '1rem 3rem 0rem 3rem',
          },

          '& .MuiDialogContentText-root': {
            color: neutral[600],
            fontWeight: 400,
            fontSize: '2rem',
            lineHeight: 1.6,
            textAlign: 'center',
            padding: 0,
          },

          '& .MuiDialogActions-root': {
            padding: '0rem 4rem 4rem 4rem',
          },
        },
      },
    },

    MuiSvgIcon: {
      styleOverrides: {
        fontSizeLarge: {
          fontSize: 32,
        },

        fontSizeSmall: {
          fontSize: 16,
        },

        fontSizeMedium: {
          fontSize: 22,
        },
      },
    },

    MuiBreadcrumbs: {
      styleOverrides: {
        separator: {
          margin: '0 1rem',
          fontSize: '2.5rem',
          color: neutral[600],
        },
        ol: {
          justifyContent: 'flex-start',
          '& .MuiLink-root': {
            color: neutral[600],
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            fontSize: '2rem',
            fontWeight: 400,
            lineHeight: 1.5,
          },
        },
      },
    },

    MuiCheckbox: {
      styleOverrides: {
        root: {
          '&.MuiCheckbox-root': {
            padding: 0,
            margin: 0,
            '&.MuiCheckbox-colorPrimary': {
              color: primary[300],
            },
            '&.MuiCheckbox-colorSecondary': {
              color: secondary[600],
            },
            '&.MuiCheckbox-colorInfo': {
              color: neutral[600],
            },
            '&.Mui-disabled': {
              color: neutral[200],
            },
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

    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          margin: 0,
        },
      },
    },

    MuiBadge: {
      styleOverrides: {
        root: {
          '& .MuiBadge-anchorOriginTopRight': {
            right: '-1rem',
            '&.MuiBadge-dot': {
              right: '-0.75rem',
            },
            '&.MuiBadge-colorSecondary': {
              backgroundColor: secondary[600],
            },
            '&.MuiBadge-colorWarning': {
              backgroundColor: warning[300],
            },
            '&.MuiBadge-colorInfo': {
              backgroundColor: secondary[300],
            },
            '&.MuiBadge-colorSuccess': {
              backgroundColor: success[300],
            },
          },
          '& .MuiBadge-standard': {
            fontWeight: 500,
            fontSize: '1.25rem',
            lineHeight: '1.5rem',
            color: common.white,
            borderRadius: '8rem',
          },
        },
      },
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontWeight: 500,
          fontSize: '1.25rem',
          lineHeight: '1.75rem',
          background: neutral[300],
          color: neutral[800],
          borderRadius: '0.5rem',
          padding: '0.5rem 1rem',

          '&.MuiTooltip-tooltipArrow': {
            '& .MuiTooltip-arrow': {
              color: neutral[300],
            },
            '&.MuiTooltip-tooltipPlacementTop': {
              marginTop: '0.625rem',
              marginBottom: '0.625rem',
            },
            '&.MuiTooltip-tooltipPlacementBottom': {
              marginTop: '0.625rem',
            },
            '&.MuiTooltip-tooltipPlacementLeft': {
              marginLeft: '0.625rem',
            },
            '&.MuiTooltip-tooltipPlacementRight': {
              marginRight: '0.625rem',
              marginLeft: '0.625rem',
            },
          },
        },
      },
    },

    MuiTabs: {
      styleOverrides: {
        root: {
          borderBottom: '0.125rem solid',
          borderColor: other[200],

          '& .MuiTab-root': {
            fontWeight: 600,
            fontSize: '1.75rem',
            color: neutral[600],
            textTransform: 'capitalize',
            padding: 0,
            margin: '0 2rem',
            lineHeight: 1.4,
            '&.Mui-selected': {
              color: secondary[600],
            },
            '& .MuiTouchRipple-root': {
              color: primary[600],
            },
            '& .MuiSvgIcon-root': {
              fontSize: '3rem',
            },
          },
          '& .MuiTabs-indicator': {
            backgroundColor: secondary[600],
          },
          '& .MuiTabs-scrollableX': {
            padding: '0 1.5rem',
            '& .MuiTabs-flexContainer': {
              borderBottom: '0.125rem solid #CDD2DC',
            },
            '& .MuiTab-root': {
              lineHeight: '1.7',
            },
          },
          '& .MuiTabScrollButton-root': {
            color: secondary[600],
            boxShadow: '0 0.125rem 0.375rem rgba(9, 30, 66, 0.12)',

            '&.Mui-disabled': {
              color: actions[500],
            },
            '& .MuiSvgIcon-root': {
              fontSize: '2.5rem',
            },
          },
          '&.MuiTabs-vertical': {
            borderBottom: 'none',

            '& .MuiTabs-flexContainerVertical': {
              display: 'block',
              minWidth: '35rem',
              maxWidth: '35rem',

              '& .MuiTab-root': {
                display: 'flex',
                width: '100%',
                justifyContent: 'flex-start',
                margin: 0,
                padding: '1.875rem',
                minHeight: '6.75rem',
                fontWeight: '400',
                boxShadow: 'inset 0 -0.125rem 0 rgba(225, 227, 234,1)',

                '&.Mui-selected ': {
                  background: primary[100],
                  color: primary[300],
                },
              },
            },
            '& .MuiTabs-indicator': {
              display: 'none',
            },
          },
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

    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: neutral['50'],

          borderBottom: `0.125rem solid ${divider}`,
          '.MuiTableCell-root': {
            color: neutral[600],
          },
        },
      },
    },

    MuiTable: {
      styleOverrides: {
        root: {
          '&.MuiTable-root': {
            '& .MuiTableCell-root': {
              padding: '1.375rem 2rem',
            },
            '& .MuiTableHead-root': {
              backgroundColor: neutral['100'],
              whiteSpace: 'pre',
              '& .MuiTableCell-root': {
                padding: '2rem',
              },
              '& .MuiSvgIcon-fontSizeMedium': {
                color: primary[600],
              },
              '& .MuiTypography-overline': {
                color: neutral['600'],
              },
            },
          },
        },
      },
    },

    MuiTablePagination: {
      styleOverrides: {
        root: {
          fontSize: 14,
        },
      },
    },

    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: 'error.400',
          fontWeight: 400,
          fontSize: 14,
          letterSpacing: '0.019rem',
          lineHeight: '2.75rem',
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: neutral[200],
        },
      },
    },

    shadows: [
      'none',
      '0px 36px 46px rgba(9, 30, 66, 0.12)',
      '0px 1px 2px rgba(9, 30, 66, 0.12)',
    ],
  },
};
