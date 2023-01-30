import { Checkbox, FormControl, FormControlLabel } from '@mui/material';
import {
  FormInputOptionsMultiCheckboxProps,
  MultiInputOptions,
} from '../types';
import React, { FC, useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';

import { muiStylesFormInputs } from '../muiStylesInputs';

const FormInputMultiCheckbox: FC<FormInputOptionsMultiCheckboxProps> = ({
  name,
  control,
  setValue,
  options,
  defaultValue,
}) => {
  const [selectedItems, setSelectedItems] = useState<
    Array<number | string | boolean>
  >(defaultValue ? defaultValue : []);

  const handleSelect = (value: string | number | boolean) => {
    const isPresent = selectedItems.indexOf(value);

    if (isPresent !== -1) {
      const remaining = selectedItems.filter(
        (item: number | string | boolean) => item !== value
      );

      setSelectedItems(remaining);
    } else {
      setSelectedItems((prevItems) => [...prevItems, value]);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    setValue(name, selectedItems);
  }, [selectedItems]);

  return (
    <FormControl size={'small'} variant={'outlined'}>
      <div>
        {options.map((option: MultiInputOptions) => (
          <FormControlLabel
            sx={muiStylesFormInputs.checkboxWrapper}
            control={
              <Controller
                name={name}
                render={({ field: { ref, ...field } }) => {
                  return (
                    <Checkbox
                      {...field}
                      inputRef={ref}
                      sx={muiStylesFormInputs.inputCheckbox}
                      checked={selectedItems.includes(option.value)}
                      onChange={() => handleSelect(option.value)}
                    />
                  );
                }}
                control={control}
              />
            }
            label={option.label}
            key={`form-checkbox-option-${option.value as string}`}
          />
        ))}
      </div>
    </FormControl>
  );
};

export default FormInputMultiCheckbox;
