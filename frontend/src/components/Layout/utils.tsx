import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import React from 'react';

export const drawerWidth = 240;

export const sideBarListUpperItems = [
  {
    name: 'homepage',
    icon: <HomeIcon />,
    text: 'Strona główna',
    event: () => console.log('folders'),
  },
  {
    name: 'favorite',
    icon: <FavoriteIcon />,
    text: 'Ulubione przepisy',
    event: () => console.log('folders'),
  },
];

export const sideBarListBottomItems = [];
