import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useParams } from 'next/navigation';
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
  const { name, link, Icon, id, disabledItem, items = [] } = props;
  const classes = useStyles();
  const isExpandable = items && items.length > 0;
  const [open, setOpen] = React.useState(false);

  const { course: courseId } = useParams();
  const { activeLessons } = useSelector((state) => state.progress);

  const findActiveLessonIndex = () => {
    const itemIndex = items.findIndex(
      (item) =>
        item.id === activeLessons[courseId][activeLessons[courseId].length - 1]
    );

    if (itemIndex === -1) {
      return 0;
    }

    return itemIndex + 1;
  };

  const activeLessonIndex = items.length
    ? activeLessons?.[courseId]
      ? findActiveLessonIndex()
      : 0
    : 0;

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
      disabled={disabledItem}
    >
      {!!Icon && (
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
      )}
      <ListItemText
        primary={name}
        inset={!Icon}
      />
    </AppMenuItemComponent>
  );

  const MenuItemChildren = isExpandable ? (
    <Collapse
      in={open}
      timeout='auto'
      unmountOnExit
    >
      <List
        component='div'
        sx={{ paddingX: 2 }}
      >
        {items.map((item, index) => (
          <AppMenuItem
            {...item}
            key={index}
            disabledItem={index > activeLessonIndex}
          />
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
