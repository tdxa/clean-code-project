import { createTheme } from '@mui/system';

const mobileBreakpointValuePx = 768;

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: mobileBreakpointValuePx,
      lg: 1024,
      xl: 1920,
    },
  },
});
