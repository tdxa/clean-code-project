import * as styles from '../search.module.scss';
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';
import React, { FC, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import PrimaryButton from '../../Common/Buttons/PrimaryButton';
import { muiStylesSearch } from '../muiStylesSearch';
import { useForm } from 'react-hook-form';

interface Props {
  open: boolean;
  handleClose: () => void;
}

const FiltresModal: FC<Props> = ({ open, handleClose }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => console.log(data);

  return (
    <Dialog fullWidth maxWidth='sm' open={open} onClose={handleClose}>
      <DialogTitle sx={muiStylesSearch.modal.title}>
        Wybierz filtry wyszukiwania{' '}
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
        <Box sx={muiStylesSearch.modal.container}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.formContainer}
          >
            <div className={styles.fieldContainer}></div>
            <div className={styles.fieldContainer}></div>
            <PrimaryButton text='Wybierz' isSubmit />
          </form>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default FiltresModal;
