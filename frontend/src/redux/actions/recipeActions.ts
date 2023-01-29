import instance, {
  ApiError,
  ApiResponse,
  AsyncThunkConfig,
  isAxiosError,
} from '../../api/axiosConfig';
import { Recipe } from '../../api/recipeAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { dispatchNotification } from '../../utils/redux';
import { randomRecipeAPI } from '../../utils/paths';

export const fetchRandomRecipe = createAsyncThunk<
  ApiResponse<Recipe>,
  undefined,
  AsyncThunkConfig
>('recipe/random/get', async (_, thunkAPI) => {
  try {
    const response = await instance.get<ApiResponse<Recipe>>(randomRecipeAPI);

    return response.data;
  } catch (err) {
    if (isAxiosError(err) && err.response != null) {
      const extractedError = err.response.data as ApiError;

      dispatchNotification('error', extractedError.message, true);

      return thunkAPI.rejectWithValue(extractedError);
    }

    dispatchNotification('error');
    throw err;
  }
});
