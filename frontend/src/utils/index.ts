import { useMediaQuery } from '@mui/material';

export const SNACKBAR_AUTO_HIDE_DURATION = 10000;
export const MAX_COEXISTING_SNACKBARS = 5;

const breakpointValuePx = 768;

export const isBrowser = typeof window !== 'undefined';

export const useIsMobile = (
  resolution: number = breakpointValuePx - 1
): boolean => useMediaQuery(`(max-width: ${resolution}px)`);
