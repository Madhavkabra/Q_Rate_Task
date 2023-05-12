import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

// project import
import LogoSection from '../LogoSection/index.jsx';

const Header = ({ handleLeftDrawerToggle }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: 330,
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
          width: 'auto',
        },
      }}
    >
      <Box
        component='span'
        sx={{ flexGrow: 1 }}
      >
        <LogoSection />
      </Box>
      <IconButton
        disableRipple
        onClick={handleLeftDrawerToggle}
        edge='start'
        sx={{
          transition: 'all .2s ease-in-out',
          background: theme.palette.primary.main,
          color: theme.palette.primary.contrast,
          '&:hover': {
            background: theme.palette.secondary.main,
            color: theme.palette.secondary.contrast,
          },
          mr: 3,
        }}
        aria-label='open drawer'
      >
        <MenuIcon />
      </IconButton>
    </Box>
  );
};

Header.propTypes = {
  handleLeftDrawerToggle: PropTypes.func.isRequired,
};

export default Header;
