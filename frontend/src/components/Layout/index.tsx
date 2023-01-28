import React, { FC, ReactNode, useEffect, useState } from 'react';

import { Box } from '@mui/material';
import GarnuszekLogo from '../../images/logo/logo-full-green.svg';
import BlueBackground from '../../images/background.png';
import * as styles from './layout.module.scss';
import Topbar from './Topbar';
import { useIsMobile } from '../../utils';
import Sidebar from './Sidebar';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleToggleDrawer = () => setIsSideBarOpen(!isSideBarOpen);

  useEffect(() => setIsSideBarOpen(false), [isMobile]);

  return (
    <Box sx={{ display: 'flex', background: '#FAFAFA' }}>
      {isMobile && (
        <Sidebar open={isSideBarOpen} toggleDrawer={handleToggleDrawer} />
      )}
      <Box component='main' sx={{ flexGrow: 1 }}>
        <div className={styles.topbar}>
          <GarnuszekLogo className={styles.topbarLogo} />
          <div className={styles.topbarContent}>
            <Topbar handleDrawerToggle={handleToggleDrawer} />
          </div>
        </div>
        <div>
          <div
            style={{
              backgroundImage: `url(${BlueBackground as string})`,
            }}
            className={styles.blueBackground}
          />
          <div className={styles.content}>{children}</div>
        </div>
      </Box>
    </Box>
  );
};

export default Layout;
