import * as styles from '../layout.module.scss';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import React, { FC, useState } from 'react';
import LoginModal from '../../Authentication/Login';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import PrimaryButton from '../../Common/Buttons/PrimaryButton';
import RegisterModal from '../../Authentication/Register';
import SearchBar from '../../SearchEngine/SearchBar';
import { drawerWidth } from '../utils';
import { muiStylesLayout } from '../muiStylesLayout';
import { useIsMobile } from '../../../utils';

interface Props {
  handleDrawerToggle?: () => void;
}

const Topbar: FC<Props> = ({ handleDrawerToggle }) => {
  const isMobile = useIsMobile();

  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  return (
    <>
      <LoginModal
        open={openLogin}
        handleClose={() => setOpenLogin(false)}
        redirect={() => setOpenRegister(true)}
      />
      <RegisterModal
        open={openRegister}
        handleClose={() => setOpenRegister(false)}
        redirect={() => setOpenLogin(true)}
      />
      {isMobile ? (
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
      ) : (
        <div className={styles.topbarSearchContainer}>
          <SearchBar />
          <div className={styles.topbarSearchButtons}>
            <span role='button' onClick={() => setOpenRegister(true)}>
              <h4>Zarejestruj się</h4>
            </span>
            <PrimaryButton
              text='Zaloguj się'
              event={() => setOpenLogin(true)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Topbar;
