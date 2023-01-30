import * as styles from '../search.module.scss';
import { Controller, useForm } from 'react-hook-form';
import React, { FC } from 'react';
import { handleNavigateToPage, resultPage } from '../../../utils/paths';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import { fetchRecipeByName } from '../../../redux/actions/recipe/recipeActions';
import { muiStylesSearch } from '../muiStylesSearch';
import store from '../../../redux/store';

const SearchBar: FC = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: { name: '' },
  });

  const onSubmit = async (data: { name: string }) => {
    await store
      .dispatch(fetchRecipeByName(data.name))
      .then(() => handleNavigateToPage(resultPage));
  };

  return (
    <form className={styles.searchBarForm} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name='name'
        render={({ field: { onChange, value } }) => (
          <TextField
            autoComplete='off'
            sx={muiStylesSearch.input}
            id='search-engine-input'
            onChange={onChange}
            value={value ?? ''}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </form>
  );
};

export default SearchBar;
