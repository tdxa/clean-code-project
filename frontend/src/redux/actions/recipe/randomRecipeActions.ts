import instance, {
  ApiError,
  AsyncThunkConfig,
  isAxiosError,
} from '../../../api/axiosConfig';
import { Recipe } from '../../../api/recipeAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { randomRecipeAPI } from '../../../utils/paths';

export const fetchRandomRecipe = createAsyncThunk<
  Recipe,
  undefined,
  AsyncThunkConfig
>('recipe/random/get', async (_, thunkAPI) => {
  try {
    const response = await instance.get<Recipe>(randomRecipeAPI);

    return response.data;
  } catch (err) {
    if (isAxiosError(err) && err.response != null) {
      const extractedError = err.response.data as ApiError;

      console.log(extractedError.message);

      return thunkAPI.rejectWithValue(extractedError);
    }

    throw err;
  }
});
