import { handlePending, handleReject } from '../../../utils/redux';
import { RecipeState } from '../../../api/recipeAPI';
import { createSlice } from '@reduxjs/toolkit';
import { fetchRecipeById } from '../../actions/recipe/recipeActions';

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
      .addCase(fetchRecipeById.fulfilled, (state, action) => {
        state.recipe = action.payload;
        state.succeeded = true;
        state.loading = false;
      })
      .addCase(fetchRecipeById.pending, handlePending)
      .addCase(fetchRecipeById.rejected, handleReject);
  },
});

export default RandomRecipeSlice.reducer;
