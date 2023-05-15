import React from 'react';
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import { Box } from '@mui/material';
import AppMenu from './AppMenu';

const Header = () => {
  const classes = useStyles();

  return (
    <Drawer
      variant='permanent'
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Box
        mt='-22px'
        height='119px'
        width='219px'
        component='img'
        src='/download.png'
      ></Box>
      <AppMenu />
    </Drawer>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: '220px !important',
    paddingBottom: theme.spacing(4),
    color: '#fff',
    height: '100vh',
    fontSize: '2rem',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

export default Header;
