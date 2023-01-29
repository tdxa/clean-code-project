import { borderColor } from '../../../styles/mui/mui-variables';

export const commonFormBase = {
  input: {
    'width': '100%',
    'heigth': '56px',
    '& label': {
      '&.Mui-focused': {
        color: borderColor,
      },
    },
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: borderColor,
      },
      '&.Mui-focused fieldset': {
        borderColor: borderColor,
      },
    },
  },
  passwordVisibility: {
    // color: tertiaryColor,
  },
};

export const muiStylesFormInputs = {
  inputText: {
    ...commonFormBase.input,
  },
};
