import { fontColorPrimary } from '../../styles/mui/mui-variables';

export const muiStylesLayout = {
  iconMenu: {
    justifyContent: 'end',
    svg: {
      color: fontColorPrimary,
      justifyContent: 'end',
    },
  },
  iconItem: {
    color: fontColorPrimary,
  },
  bottomItems: {
    bottom: 0,
  },
  drawer: {
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
  },
};
