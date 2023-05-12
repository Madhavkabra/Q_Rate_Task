import PropTypes from 'prop-types';
import { styled, useTheme } from '../Mui/styles';
import {
  Drawer as MuiDrawer,
  List,
  useMediaQuery,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '../Mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const Drawer = styled(
  MuiDrawer,
  {}
)(({ theme }) => ({
  zIndex: theme.zIndex.drawer - 1,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  '& .MuiDrawer-paper': {
    width: theme.constants.majorSidebarWidth,
    overflow: 'hidden',
    borderRight: 'none',
    [theme.breakpoints.up('sm')]: {
      top: '8rem',
      left: theme.constants.miniSidebarWidth,
    },
  },
}));

const MainSidebar = ({ open, drawerToggle }) => {
  const theme = useTheme();
  const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Drawer
      variant={matchUpSm ? 'persistent' : 'temporary'}
      anchor='left'
      open={open}
      onClose={drawerToggle}
    >
      <List>
        {['Inbox', 'Starred', 'Send email'].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            sx={{ display: 'block' }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                px: 2.5,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                }}
              >
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

MainSidebar.propTypes = {
  drawerToggle: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default MainSidebar;
