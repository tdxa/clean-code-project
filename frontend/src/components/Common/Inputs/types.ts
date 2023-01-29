import { InputProps } from '@mui/material';

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
