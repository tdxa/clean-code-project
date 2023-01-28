import { useMediaQuery } from '@mui/material';
import { navigate } from 'gatsby-link';

const breakpointValuePx = 768;

export const useIsMobile = (
  resolution: number = breakpointValuePx - 1
): boolean => useMediaQuery(`(max-width: ${resolution}px)`);
