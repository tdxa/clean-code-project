import FolderIcon from '@mui/icons-material/Folder';
import HelpIcon from '@mui/icons-material/Help';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import React from 'react';

export const sideBarListUpperItems = [
  {
    name: 'dashboard',
    icon: <HomeIcon />,
    text: 'oe',
    event: () => console.log('folders'),
  },
  {
    name: 'folders',
    icon: <FolderIcon />,
    text: 'fsjfksxkjfs',
    event: () => console.log('folders'),
  },
];

export const sideBarListBottomItems = [
  {
    name: 'help',
    icon: <HelpIcon />,
    text: 'lalala',
    event: () => console.log('folders'),
  },
  {
    name: 'settings',
    icon: <SettingsIcon />,
    text: 'hhehe',
    event: () => console.log('settings'),
  },
  {
    name: 'logout',
    icon: <LogoutIcon />,
    text: 'Log out',
  },
];