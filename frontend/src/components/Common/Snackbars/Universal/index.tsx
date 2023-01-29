import React, { FC } from 'react';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { SNACKBAR_AUTO_HIDE_DURATION } from '../../../../utils';

interface Props {
  snackbarOpened: boolean;
  handleClose: CallableFunction;
  snackbarMessage?: string;
}

const UniversalAppSnackbar: FC<Props> = ({
  snackbarOpened,
  handleClose,
  snackbarMessage,
}) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={snackbarOpened}
      autoHideDuration={SNACKBAR_AUTO_HIDE_DURATION}
      onClose={() => {
        handleClose();
      }}
      message={snackbarMessage || ''}
      action={
        <IconButton
          size='small'
          aria-label='close'
          color='inherit'
          onClick={() => {
            handleClose();
          }}
        >
          <CloseIcon fontSize='small' />
        </IconButton>
      }
    />
  );
};

export default UniversalAppSnackbar;
