import { Alert, Snackbar } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import React, { FC } from 'react';
import muiStylesSnackbar from './muiStylesSnackbar';

interface Props {
  isOpen: boolean;
  message: string;
  onClose: () => void;
}
const autoHideDurationTimeMS = 2000;

const SuccessSnackbar: FC<Props> = ({ isOpen, message, onClose }) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      autoHideDuration={autoHideDurationTimeMS}
      open={isOpen}
      onClose={onClose}
    >
      <div>
        <Alert
          severity='success'
          icon={<CheckCircleIcon sx={muiStylesSnackbar.icon} />}
          sx={muiStylesSnackbar.container}
        >
          {message}
        </Alert>
      </div>
    </Snackbar>
  );
};

export default SuccessSnackbar;
