import React, { FC } from 'react';
import { Controller } from 'react-hook-form';
import { FormInputProps } from '../types';
import { TextField } from '@mui/material';
import { muiStylesFormInputs } from '../muiStylesInputs';

const FormInputText: FC<FormInputProps> = ({
  control,
  disabled,
  name,
  label,
  error,
  type = 'text',
  inputProps,
}) => {
  return (
    <Controller
      render={({ field: { onChange, value } }) => (
        <TextField
          autoComplete='off'
          onChange={onChange}
          value={value ?? ''}
          disabled={!!disabled}
          label={label}
          error={error}
          type={type}
          sx={muiStylesFormInputs.inputText}
          onWheel={(e) => e.target instanceof HTMLElement && e.target.blur()}
          InputProps={inputProps}
        />
      )}
      control={control}
      name={name}
    />
  );
};

export default FormInputText;
