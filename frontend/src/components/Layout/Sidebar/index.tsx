import * as styles from '../layout.module.scss';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React, { FC } from 'react';
import {
  drawerWidth,
  sideBarListBottomItems,
  sideBarListUpperItems,
} from '../utils';
import CloseIcon from '@mui/icons-material/Close';
import GarnuszekLogo from '../../../images/logo/logo-full-green.svg';
import { muiStylesLayout } from '../muiStylesLayout';

interface Props {
  open: boolean;
  toggleDrawer: () => void;
}

const Sidebar: FC<Props> = ({ open, toggleDrawer }) => {
  const handleLogout = () => {
    console.log('logout');
  };

  const drawerItemsMobile = () => {
    return (
      <div className={styles.sidebarContainer}>
        <div>
          <ListItem sx={muiStylesLayout.iconMenu}>
            <ListItemIcon
              onClick={toggleDrawer}
              sx={muiStylesLayout.iconMenu.svg}
            >
              <CloseIcon />
            </ListItemIcon>
          </ListItem>
          <div className={styles.topbarLogo}>
            <GarnuszekLogo />
          </div>
          <List>
            {sideBarListUpperItems.map((item) => {
              return (
                <ListItemButton
                  key={`${item.name}-item-upper-sidebar`}
                  onClick={item.event}
                >
                  <ListItemIcon sx={muiStylesLayout.iconItem}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              );
            })}
          </List>
        </div>
      </div>
    );
  };

  const drawerItemsDesktop = () => {
    return (
      <div className={styles.sidebarContainer}>
        <div>
          <div className={styles.topbarLogo}>
            <GarnuszekLogo />
          </div>
          <List>
            {sideBarListUpperItems.map((item) => {
              return (
                <ListItemButton
                  key={`${item.name}-item-upper-sidebar`}
                  onClick={item.event}
                >
                  <ListItemIcon sx={muiStylesLayout.iconItem}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              );
            })}
          </List>
        </div>
      </div>
    );
  };

  return (
    <Box
      component='nav'
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        anchor='left'
        variant='temporary'
        open={open}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          'display': { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawerItemsMobile()}
      </Drawer>
      <Drawer
        variant='permanent'
        sx={{
          'display': { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
        {drawerItemsDesktop()}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
