import { RandomRecipeState } from '../../api/recipeAPI';
import { createSlice } from '@reduxjs/toolkit';
import { fetchRandomRecipe } from '../actions/recipeActions';
import { handlePending } from '../../utils/redux';

const initialState: RandomRecipeState = {
  recipe: {},
  succeeded: false,
  loading: false,
  error: false,
  errorMessage: undefined,
  errorDetails: undefined,
};

const RandomRecipeSlice = createSlice({
  name: 'randomRecipeSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomRecipe.fulfilled, (state, action) => {
        console.log(action);
      })
      .addCase(fetchRandomRecipe.pending, handlePending);
  },
});

export default RandomRecipeSlice.reducer;
