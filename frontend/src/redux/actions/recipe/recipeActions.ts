import instance, {
  ApiError,
  AsyncThunkConfig,
  isAxiosError,
} from '../../../api/axiosConfig';
import { Recipe } from '../../../api/recipeAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { recipeAPI } from '../../../utils/paths';

export const fetchRecipeById = createAsyncThunk<
  Recipe,
  string,
  AsyncThunkConfig
>('recipe/id/get', async (id, thunkAPI) => {
  try {
    const response = await instance.get<Recipe>(`${recipeAPI}/${id}`);

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
