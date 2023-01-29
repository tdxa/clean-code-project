export const commonFormBase = {
  input: {
    'width': '100%',
    'heigth': '56px',
    '& label': {
      //   'color': inputBorder,
      '&.Mui-focused': {
        // color: inputBorderFocused,
      },
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        // borderColor: inputBorder,
        // borderWidth: '2px',
      },
      '&:focus fieldset': {
        // borderColor: inputBorderFocused,
      },
      '&:hover fieldset': {
        // borderColor: inputBorderHovered,
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
