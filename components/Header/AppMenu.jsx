import React from 'react';
import { makeStyles, createStyles } from '@mui/styles';
import List from '@mui/material/List';
import SchoolIcon from '@mui/icons-material/School';
import AppMenuItem from './AppMenuItem';

const AppMenu = () => {
  const classes = useStyles();
  const [appMenuItems, setAppMenuItems] = React.useState([]);

  React.useEffect(() => {
    fetch('../data.json')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const menuItems = data.map((m) => {
          return {
            ['name']: m.course_name,
            ['Icon']: SchoolIcon,
            ['items']: m.lessons.map((l) => {
              return {
                ['name']: l.lesson_name,
                ['id']: l.lesson_id,
                ['link']: `/${m.course_id}/${l.lesson_id}`,
              };
            }),
          };
        });
        setAppMenuItems(menuItems);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return (
    <List component='nav' className={classes.appMenu} disablePadding>
      {appMenuItems.map((item, index) => (
        <AppMenuItem {...item} key={index} />
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