import * as styles from '../layout.module.scss';
import { IconButton, MenuItem } from '@mui/material';
import React, { FC, useState } from 'react';
import LoginModal from '../../Authentication/Login';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import PrimaryButton from '../../Common/Buttons/PrimaryButton';
import RegisterModal from '../../Authentication/Register';
import TertiaryButton from '../../Common/Buttons/TertiaryButton';
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
              <TertiaryButton
                text='Zaloguj się'
                event={() => setOpenLogin(true)}
              />
              <PrimaryButton
                text='Zarejestruj się'
                event={() => setOpenRegister(true)}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Topbar;
