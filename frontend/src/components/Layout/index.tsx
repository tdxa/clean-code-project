import * as styles from './layout.module.scss';
import React, { FC, ReactNode, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { useIsMobile } from '../../utils';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleToggleDrawer = () => setIsSideBarOpen(!isSideBarOpen);

  useEffect(() => setIsSideBarOpen(false), [isMobile]);

  return (
    <Box
      sx={{
        display: 'flex',
        background: '#F9F9FB',
        flexGrow: 1,
        padding: '10px 24px 24px',
      }}
    >
      <Sidebar open={isSideBarOpen} toggleDrawer={handleToggleDrawer} />
      <Box component='main' sx={{ flexGrow: 1 }}>
        <div className={styles.topbar}>
          <div className={styles.topbarContent}>
            <Topbar handleDrawerToggle={handleToggleDrawer} />
          </div>
        </div>
        <div>
          <div className={styles.content}>{children}</div>
        </div>
      </Box>
    </Box>
  );
};

export default Layout;
