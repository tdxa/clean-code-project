import { handlePending, handleReject } from '../../../utils/redux';
import { RecipesState } from '../../../api/recipeAPI';
import { createSlice } from '@reduxjs/toolkit';
import { fetchRecipeByTag } from '../../actions/recipe/recipeActions';

const initialState: RecipesState = {
  recipes: undefined,
  succeeded: false,
  loading: false,
  error: false,
  errorMessage: undefined,
  errorDetails: undefined,
};

const RecipesSlice = createSlice({
  name: 'recipesSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchRecipeByTag.fulfilled, (state, action) => {
        state.recipes = action.payload;
        state.succeeded = true;
        state.loading = false;
      })
      .addCase(fetchRecipeByTag.pending, handlePending)
      .addCase(fetchRecipeByTag.rejected, handleReject);
  },
});

export default RecipesSlice.reducer;
