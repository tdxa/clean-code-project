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
import CloseIcon from '@mui/icons-material/Close';
import PrimaryButton from '../../Common/Buttons/PrimaryButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface Props {
  open: boolean;
  handleClose: () => void;
  redirect: () => void;
}
interface RegisterData {
  email: string;
  firstName: string;
  password: string;
}

const RegisterModal: FC<Props> = ({ open, handleClose, redirect }) => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      firstName: '',
      password: '',
    },
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const onSubmit = (data: RegisterData) => console.log(data);

  return (
    <Dialog fullWidth maxWidth='lg' open={open} onClose={handleClose}>
      <DialogTitle>
        Zarejestruj się
        <IconButton
          aria-label='close'
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name='email'
              control={control}
              render={({ field }) => (
                <TextField
                  autoComplete='off'
                  type='email'
                  label='E-mail'
                  {...field}
                />
              )}
            />
            <Controller
              name='firstName'
              control={control}
              render={({ field }) => (
                <TextField
                  autoComplete='off'
                  type='text'
                  label='Imię'
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
            <p>
              Posiadasz już konto?{' '}
              <span
                role='button'
                onClick={() => {
                  handleClose();
                  redirect();
                }}
              >
                Zaloguj się
              </span>
            </p>
            <PrimaryButton text='Zarejestruj się' isSubmit />
          </form>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterModal;
