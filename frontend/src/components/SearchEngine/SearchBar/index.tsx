import * as styles from '../search.module.scss';
import { FormProvider, useForm } from 'react-hook-form';
import React, { FC, useState } from 'react';
import FiltresModal from '../FiltresModal';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SecondaryButton from '../../Common/Buttons/SecondaryButton';
import TextField from '@mui/material/TextField';
import { muiStylesSearch } from '../muiStylesSearch';

const SearchBar: FC = () => {
  const [openFiltres, setOpenFiltres] = useState(false);

  const methods = useForm({});

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <FiltresModal
        open={openFiltres}
        handleClose={() => setOpenFiltres(false)}
      />
      <FormProvider {...methods}>
        <form
          className={styles.searchBarForm}
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <TextField
            sx={muiStylesSearch.input}
            id='search-engine-input'
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant='outlined'
            placeholder='Szukaj przepisu'
          />
          <SecondaryButton text='Filtry' event={() => setOpenFiltres(true)} />
        </form>
      </FormProvider>
    </>
  );
};

export default SearchBar;
