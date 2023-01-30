import { InputProps } from '@mui/material';

export interface MultiInputOptions {
  label: string;
  value: string;
}

export interface FormInputProps {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  label?: string;
  error?: boolean;
  type?: string;
  disabled?: boolean;
  inputProps?: InputProps;
}

export interface FormInputOptionsMultiCheckboxProps extends FormInputProps {
  options: MultiInputOptions[];
  setValue?: any;
  defaultValue?: Array<number | string | boolean>;
  row?: boolean;
}
