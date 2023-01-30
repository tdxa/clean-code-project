import * as styles from '../search.module.scss';
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';
import React, { FC, useEffect, useRef } from 'react';
import {
  selectTags,
  selectTagsLoading,
} from '../../../redux/selectors/tagsSelectors';
import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import { FiltresForm } from '../types';
import FormInputMultiCheckbox from '../../Common/Inputs/MultiCheckbox';
import Loader from '../../Common/Loader';
import { MultiInputOptions } from '../../Common/Inputs/types';
import PrimaryButton from '../../Common/Buttons/PrimaryButton';
import { fetchTags } from '../../../redux/actions/recipe/tagsActions';
import { muiStylesSearch } from '../muiStylesSearch';
import { setTagFilter } from '../../../redux/reducers/recipe/tagsReducers';
import { useForm } from 'react-hook-form';

interface Props {
  open: boolean;
  handleClose: () => void;
}

const FiltresModal: FC<Props> = ({ open, handleClose }) => {
  const dispatch = useDispatch();
  const options = useRef<MultiInputOptions[]>([]);

  const tags = useSelector(selectTags);
  const loading = useSelector(selectTagsLoading);

  const handleFormOptions = () => {
    if (tags) {
      return tags.map((item: string) => ({
        value: item,
        label: item,
      }));
    }
    return [];
  };

  const { control, handleSubmit, setValue } = useForm({
    defaultValues: { filtres: [] },
  });

  const onSubmit = (data: FiltresForm) => {
    dispatch(setTagFilter(data.filtres));
    handleClose();
  };

  useEffect(() => {
    if (!tags) {
      dispatch(fetchTags());
    }
    options.current = handleFormOptions();
  }, [dispatch, tags]);

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
          {loading ? (
            <Loader loading />
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={styles.formContainer}
            >
              <div className={styles.fieldContainer}>
                <FormInputMultiCheckbox
                  control={control}
                  name='filtres'
                  options={options.current}
                  setValue={setValue}
                />
              </div>
              <div className={styles.fieldContainer} />
              <PrimaryButton text='Wybierz' isSubmit />
            </form>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default FiltresModal;
