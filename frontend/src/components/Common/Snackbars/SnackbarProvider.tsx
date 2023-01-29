import './snackbars.scss';
import {
  MAX_COEXISTING_SNACKBARS,
  SNACKBAR_AUTO_HIDE_DURATION,
} from '../../../utils';
import React, { FC } from 'react';
import { SnackbarKey, SnackbarProvider } from 'notistack';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

const AppSnackbarProvider: FC = ({ children }) => {
  const notistackRef: React.Ref<SnackbarProvider> = React.createRef();
  const onClickDismiss = (key: SnackbarKey) => () => {
    notistackRef.current?.closeSnackbar(key);
  };

  return (
    <SnackbarProvider
      ref={notistackRef}
      maxSnack={MAX_COEXISTING_SNACKBARS}
      hideIconVariant
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      autoHideDuration={SNACKBAR_AUTO_HIDE_DURATION}
      action={(key) => (
        <IconButton
          size='small'
          aria-label='close'
          color='inherit'
          onClick={onClickDismiss(key)}
        >
          <CloseIcon fontSize='small' />
        </IconButton>
      )}
    >
      {children}
    </SnackbarProvider>
  );
};

export default AppSnackbarProvider;
