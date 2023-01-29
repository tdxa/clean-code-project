import * as styles from '../authentication.module.scss';
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { LoginData, ModalProps } from '../types';
import React, { FC, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import FormInputText from '../../Common/Inputs/TextInput';
import PrimaryButton from '../../Common/Buttons/PrimaryButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { muiStylesAuthentication } from '../muiStylesAuthentication';
import { useForm } from 'react-hook-form';

const LoginModal: FC<ModalProps> = ({ open, handleClose, redirect }) => {
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
    <Dialog fullWidth maxWidth='sm' open={open} onClose={handleClose}>
      <DialogTitle sx={muiStylesAuthentication.title}>
        Zaloguj się{' '}
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
        <Box sx={muiStylesAuthentication.container}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.formContainer}
          >
            <div className={styles.fieldContainer}>
              <FormInputText
                control={control}
                name='email'
                type='email'
                label='E-mail'
              />
            </div>
            <div className={styles.fieldContainer}>
              <FormInputText
                control={control}
                name='password'
                type='password'
                label='Hasło'
                inputProps={{
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
              />
            </div>
            <p>
              Nie posiadasz konta?{' '}
              <span
                role='button'
                onClick={() => {
                  handleClose();
                  redirect();
                }}
              >
                Zarejestruj się
              </span>
            </p>
            <PrimaryButton text='Zaloguj' isSubmit />
          </form>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
