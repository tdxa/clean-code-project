import React, { FC } from 'react';
import { Button } from '@mui/material';
import { muiStylesButtons } from '../muiStylesButtons';

interface Props {
  text: string;
  disabled?: boolean;
  event?: () => void;
}

const SecondaryButton: FC<Props> = ({ text, disabled, event }) => {
  const isDisabled = !!disabled;

  return (
    <Button
      sx={muiStylesButtons.secondaryButton}
      disabled={isDisabled}
      onClick={event}
    >
      {text}
    </Button>
  );
};

export default SecondaryButton;
