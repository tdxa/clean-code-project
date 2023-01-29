import {
  borderColor,
  borderRadiusButton,
} from '../../styles/mui/mui-variables';

export const muiStylesSearch = {
  input: {
    'borderRadius': borderRadiusButton,
    'backgroundColor': 'white',
    'width': '80%',
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: borderColor,
      },
      '&.Mui-focused fieldset': {
        borderColor: borderColor,
      },
    },
  },
  modal: {
    container: { display: 'flex', padding: '10px' },
    title: {
      textAlign: 'center',
    },
  },
};
