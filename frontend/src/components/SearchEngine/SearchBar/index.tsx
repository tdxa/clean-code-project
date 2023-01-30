import * as styles from '../search.module.scss';
import { FormProvider, useForm } from 'react-hook-form';
import React, { FC } from 'react';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import { muiStylesSearch } from '../muiStylesSearch';

const SearchBar: FC = () => {
  const methods = useForm({});

  const onSubmit = (data: string) => console.log(data);

  return (
    <>
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
        </form>
      </FormProvider>
    </>
  );
};

export default SearchBar;
