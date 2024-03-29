import { handlePending, handleReject } from '../../../utils/redux';
import { RecipeState } from '../../../api/recipeAPI';
import { createSlice } from '@reduxjs/toolkit';
import { fetchRandomRecipe } from '../../actions/recipe/randomRecipeActions';

const initialState: RecipeState = {
  recipe: undefined,
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
        state.recipe = action.payload;
        state.succeeded = true;
        state.loading = false;
      })
      .addCase(fetchRandomRecipe.pending, handlePending)
      .addCase(fetchRandomRecipe.rejected, handleReject);
  },
});

export default RandomRecipeSlice.reducer;
