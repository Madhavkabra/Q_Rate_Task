import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, createStyles } from '@mui/styles';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import AppMenuItemComponent from './AppMenuItemComponent';

export const AppMenuItemPropTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
  Icon: PropTypes.elementType,
  items: PropTypes.array,
};

const AppMenuItem = (props) => {
  const { name, link, Icon, id, items = [] } = props;
  const classes = useStyles();
  const isExpandable = items && items.length > 0;
  const [open, setOpen] = React.useState(false);

  function handleClick() {
    setOpen(!open);
  }

  const MenuItemRoot = (
    <AppMenuItemComponent
      className={classes.menuItem}
      name={name}
      id={id}
      link={link}
      onClick={handleClick}
    >
      {!!Icon && (
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
      )}
      <ListItemText primary={name} inset={!Icon} />
    </AppMenuItemComponent>
  );

  const MenuItemChildren = isExpandable ? (
    <Collapse in={open} timeout='auto' unmountOnExit>
      <List component='div' sx={{ paddingX: 2 }}>
        {items.map((item, index) => (
          <AppMenuItem {...item} key={index} />
        ))}
      </List>
      <Divider />
    </Collapse>
  ) : null;

  return (
    <>
      {MenuItemRoot}
      {MenuItemChildren}
    </>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    menuItem: {
      '&.active': {
        background: 'rgba(0, 0, 0, 0.08)',
        '& .MuiListItemIcon-root': {
          color: '#fff',
        },
      },
    },
    menuItemIcon: {
      color: '#97c05c',
      minWidth: '30px',
    },
  })
);

export default AppMenuItem;