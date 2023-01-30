import {
  fetchRecipeByName,
  fetchRecipeByTag,
} from '../../actions/recipe/recipeActions';
import { handlePending, handleReject } from '../../../utils/redux';
import { RecipesState } from '../../../api/recipeAPI';
import { createSlice } from '@reduxjs/toolkit';

const initialState: RecipesState = {
  recipesTag: undefined,
  recipesName: undefined,
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
        state.recipesTag = action.payload;
        state.succeeded = true;
        state.loading = false;
      })
      .addCase(fetchRecipeByTag.pending, handlePending)
      .addCase(fetchRecipeByTag.rejected, handleReject)
      .addCase(fetchRecipeByName.fulfilled, (state, action) => {
        state.recipesName = action.payload;
        state.succeeded = true;
        state.loading = false;
      })
      .addCase(fetchRecipeByName.pending, handlePending)
      .addCase(fetchRecipeByName.rejected, (state) => {
        state.recipesName = undefined;
        state.succeeded = false;
        state.loading = false;
        state.error = true;
        state.errorMessage = undefined;
        state.errorDetails = undefined;
      });
  },
});

export default RecipesSlice.reducer;
