import React, { FC } from 'react';
import { IconButton, MenuItem } from '@mui/material';
import * as styles from '../layout.module.scss';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useIsMobile } from '../../../utils/hooks';
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
            {/* <TertiaryButton text="Log in" /> */}
            {/* <PrimaryButton text="Sign up" /> */}
          </div>
        </>
      )}
    </div>
  );
};

export default Topbar;
