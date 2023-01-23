import { Button } from '@mui/material';
import React, { FC } from 'react';
import { muiStylesButtons } from '../muiStylesButtons';

interface Props {
  text: string;
  disabled?: boolean;
  event?: () => void;
  icon?: JSX.Element;
}

const TertiaryButton: FC<Props> = ({ text, disabled, event, icon }) => {
  const isDisabled = !!disabled;

  return (
    <Button
      sx={muiStylesButtons.tertiaryButton}
      disabled={isDisabled}
      onClick={event}
      startIcon={icon}
    >
      {text}
    </Button>
  );
};

export default TertiaryButton;
