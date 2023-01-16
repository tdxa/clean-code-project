import { Button } from '@mui/material';
import React, { FC } from 'react';

import { muiStylesButtons } from '../muiStylesButtons';

interface Props {
  text: string;
  disabled?: boolean;
  event?: () => void;
  isSubmit?: boolean;
}

const PrimaryButton: FC<Props> = ({ text, disabled, event, isSubmit }) => {
  const isDisabled = !!disabled;

  return (
    <Button
      sx={muiStylesButtons.primaryButton}
      disabled={isDisabled}
      onClick={event}
      type={isSubmit ? 'submit' : 'button'}
    >
      {text}
    </Button>
  );
};

export default PrimaryButton;
