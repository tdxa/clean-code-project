import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton, MenuItem } from '@mui/material';
import React, { FC } from 'react';

import styles from '@/src/components/Layout/layout.module.scss';
import { useIsMobile } from '@/src/utils/hooks';

import PrimaryButton from '../../Common/Buttons/PrimaryButton';
import TertiaryButton from '../../Common/Buttons/TertinaryButton';
import { muiStylesLayout } from '../muiStylesLayout';

interface Props {
  handleDrawerToggle?: () => void;
}

const Topbar: FC<Props> = ({ handleDrawerToggle }) => {
  const isMobile = useIsMobile();

  return (
    <div className={styles.topbarMain}>
      {isMobile ? (
        <div>
          <IconButton
            onClick={handleDrawerToggle}
            sx={muiStylesLayout.iconMenu}
          >
            <MenuRoundedIcon />
          </IconButton>
        </div>
      ) : (
        <>
          <MenuItem>Home</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>How it works</MenuItem>
          <div className={styles.topbarButtons}>
            <TertiaryButton text='Log in' />
            <PrimaryButton text='Sign up' />
          </div>
        </>
      )}
    </div>
  );
};

export default Topbar;
