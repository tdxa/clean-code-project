import * as styles from '../layout.module.scss';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import React, { FC } from 'react';
import LogoText from '../../../images/logo/logo-text-green.svg';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { drawerWidth } from '../utils';
import { muiStylesLayout } from '../muiStylesLayout';
import { useIsMobile } from '../../../utils';

interface Props {
  handleDrawerToggle?: () => void;
}

const Topbar: FC<Props> = ({ handleDrawerToggle }) => {
  const isMobile = useIsMobile();

  return (
    <>
      {isMobile && (
        <AppBar
          position='fixed'
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            backgroundColor: '#fcf5ee',
          }}
        >
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              sx={muiStylesLayout.iconMenu}
            >
              <MenuRoundedIcon />
            </IconButton>
            <h2 className={styles.topbarText}>Garnuszek</h2>
          </Toolbar>
        </AppBar>
      )}
    </>
  );
};

export default Topbar;
