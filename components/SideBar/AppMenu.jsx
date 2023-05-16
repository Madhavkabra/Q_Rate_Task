import React from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import List from '@mui/material/List';
import AppMenuItem from './AppMenuItem';
import { mapCourse } from '@/utils';

const AppMenu = () => {
  const classes = useStyles();
  const [appMenuItems, setAppMenuItems] = React.useState([]);

  React.useEffect(() => {
    const menu = mapCourse();
    setAppMenuItems(menu);
  }, []);

  return (
    <List
      component='nav'
      className={classes.appMenu}
      disablePadding
    >
      {appMenuItems.map((item, index) => (
        <AppMenuItem
          {...item}
          key={index}
        />
      ))}
    </List>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    appMenu: {
      width: '100%',
    },
    navList: {
      width: '220px !important',
    },
    menuItem: {
      width: '220px !important',
    },
    menuItemIcon: {
      color: '#97c05c',
    },
  })
);

export default AppMenu;
