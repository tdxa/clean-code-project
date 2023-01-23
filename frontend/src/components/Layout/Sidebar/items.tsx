import React from 'react';
import FolderIcon from '@mui/icons-material/Folder';
import HelpIcon from '@mui/icons-material/Help';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';

export const sideBarListUpperItems = [
  {
    name: 'dashboard',
    icon: <HomeIcon />,
    text: 'Strona główna',
    event: () => console.log('folders'),
  },
  {
    name: 'folders',
    icon: <FolderIcon />,
    text: 'Opcja 1',
    event: () => console.log('folders'),
  },
];

export const sideBarListBottomItems = [
  {
    name: 'help',
    icon: <HelpIcon />,
    text: 'Opcja 2',
    event: () => console.log('folders'),
  },
  {
    name: 'settings',
    icon: <SettingsIcon />,
    text: 'Opcja 3',
    event: () => console.log('settings'),
  },
  {
    name: 'logout',
    icon: <LogoutIcon />,
    text: 'Log out',
  },
];
