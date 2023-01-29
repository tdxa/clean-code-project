import * as styles from '../layout.module.scss';
import { IconButton, MenuItem } from '@mui/material';
import React, { FC } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import PrimaryButton from '../../Common/Buttons/PrimaryButton';
import TertiaryButton from '../../Common/Buttons/TertiaryButton';
import { muiStylesLayout } from '../muiStylesLayout';
import { useIsMobile } from '../../../utils';

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
            <TertiaryButton text='Zaloguj się' />
            <PrimaryButton text='Zarejestruj się' />
          </div>
        </>
      )}
    </div>
  );
};

export default Topbar;
