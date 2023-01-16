import { useIsMobile } from '@/src/utils/hooks';
import { Box } from '@mui/material';
import React, { FC, ReactNode, useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

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
          <div className={styles.topbarLogo}>
            <Logo />
          </div>
          <div className={styles.topbarContent}>
            <Topbar handleDrawerToggle={handleToggleDrawer} />
          </div>
        </div>
        <div>
          <div
            style={
              {
                //   backgroundImage: `url(${Background as string})`,
              }
            }
            className={styles.background}
          />
          <div className={styles.content}>{children}</div>
        </div>
      </Box>
    </Box>
  );
};

export default Layout;
