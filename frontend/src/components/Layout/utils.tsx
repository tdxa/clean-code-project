import {
  categoryPath,
  handleNavigateToPage,
  homepagePath,
} from '../../utils/paths';
import CategoryIcon from '@mui/icons-material/Category';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import React from 'react';

export const drawerWidth = 240;

export const sideBarListUpperItems = [
  {
    name: 'homepage',
    icon: <HomeIcon />,
    text: 'Strona główna',
    event: () => handleNavigateToPage(homepagePath),
  },
  {
    name: 'category',
    icon: <CategoryIcon />,
    text: 'Kategorie przepisów',
    event: () => handleNavigateToPage(categoryPath),
  },
];

export const sideBarListLoggedItems = [
  {
    name: 'homepage',
    icon: <HomeIcon />,
    text: 'Strona główna',
    event: () => handleNavigateToPage(homepagePath),
  },
  {
    name: 'favorite',
    icon: <FavoriteIcon />,
    text: 'Ulubione przepisy',
    event: () => console.log('favs'),
  },
  {
    name: 'category',
    icon: <CategoryIcon />,
    text: 'Kategorie przepisów',
    event: () => handleNavigateToPage(categoryPath),
  },
];
