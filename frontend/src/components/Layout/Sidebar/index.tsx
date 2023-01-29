import * as styles from '../layout.module.scss';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import React, { FC } from 'react';
import { sideBarListBottomItems, sideBarListUpperItems } from '../utils';
import MenuIcon from '@mui/icons-material/Menu';
import { muiStylesLayout } from '../muiStylesLayout';

interface Props {
  open: boolean;
  toggleDrawer: () => void;
}

const Sidebar: FC<Props> = ({ open, toggleDrawer }) => {
  const handleLogout = () => {
    console.log('logout');
  };

  const drawerItems = () => {
    return (
      <div className={styles.sidebarContainer}>
        <div>
          <ListItem>
            <ListItemIcon onClick={toggleDrawer} sx={muiStylesLayout.iconItem}>
              <MenuIcon />
            </ListItemIcon>
          </ListItem>
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
        <List sx={muiStylesLayout.bottomItems}>
          {sideBarListBottomItems.map((item) => {
            return (
              <ListItemButton
                key={`${item.name}-item-bottom-sidebar`}
                onClick={item.name !== 'logout' ? item.event : handleLogout}
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
    );
  };

  return (
    <Drawer anchor='right' open={open} onClose={toggleDrawer}>
      {drawerItems()}
    </Drawer>
  );
};

export default Sidebar;
