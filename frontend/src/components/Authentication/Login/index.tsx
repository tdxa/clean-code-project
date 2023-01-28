import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import React, { FC, useState } from 'react';
import PrimaryButton from '../../Common/Buttons/PrimaryButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface Props {
  open: boolean;
  handleClose: () => void;
}
interface LoginData {
  email: string;
  password: string;
}

const LoginModal: FC<Props> = ({ open, handleClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const onSubmit = (data: LoginData) => console.log(data);

  return (
    <Dialog fullWidth maxWidth='lg' open={open} onClose={handleClose}>
      <DialogTitle>Zaloguj się</DialogTitle>
      <DialogContent>
        <Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name='email'
              control={control}
              render={({ field }) => (
                <TextField
                  type='email'
                  autoComplete='off'
                  label='E-mail'
                  {...field}
                />
              )}
            />
            <Controller
              name='password'
              control={control}
              render={({ field }) => (
                <TextField
                  type={showPassword ? 'text' : 'password'}
                  label='hasło'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton
                          aria-label='toggle password visibility'
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge='end'
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  {...field}
                />
              )}
            />
            <p>Nie posiadasz konta? Zarejestruj się</p>
            <PrimaryButton text='Zaloguj' isSubmit />
          </form>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
