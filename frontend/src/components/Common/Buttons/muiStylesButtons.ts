import {
  borderRadiusButton,
  buttonTypography,
  fontColorInactive,
  fontColorPrimary,
  fontColorSecondary,
  primaryColor,
  primaryColorDisabled,
  primaryColorFocused,
  primaryColorHover,
  secondaryColor,
  secondaryColorDisabled,
  secondaryColorFocused,
  secondaryColorHover,
} from '../../../styles/mui/mui-variables';

const commonButtonProperties = {
  height: '35px',
  padding: '5px 25px',
  borderRadius: borderRadiusButton,
  textAlign: 'center',
  textTransform: 'capitalize',
  marginBottom: 0,
};

export const muiStylesButtons = {
  primaryButton: {
    ...buttonTypography,
    ...commonButtonProperties,
    'backgroundColor': primaryColor,
    'boxShadow': 'none',
    'color': fontColorSecondary,
    ':hover': {
      backgroundColor: primaryColorHover,
    },
    ':disabled': {
      backgroundColor: primaryColorDisabled,
      boxShadow: 'none',
      color: fontColorInactive,
    },
    ':focus': {
      backgroundColor: primaryColorFocused,
    },
  },
  secondaryButton: {
    ...buttonTypography,
    ...commonButtonProperties,
    'backgroundColor': 'white',
    'boxShadow': 'none',
    'color': fontColorPrimary,
    ':hover': {
      backgroundColor: secondaryColorHover,
    },
    ':disabled': {
      backgroundColor: secondaryColorDisabled,
      boxShadow: 'none',
      color: fontColorInactive,
    },
    ':focus': {
      backgroundColor: secondaryColorFocused,
    },
  },
  tertiaryButton: {
    ...buttonTypography,
    ...commonButtonProperties,
    'backgroundColor': secondaryColor,
    'color': fontColorPrimary,
    ':hover': {
      backgroundColor: secondaryColorHover,
    },
    ':disabled': {
      backgroundColor: secondaryColor,
    },
    ':focus': {
      backgroundColor: secondaryColorHover,
    },
  },
};
