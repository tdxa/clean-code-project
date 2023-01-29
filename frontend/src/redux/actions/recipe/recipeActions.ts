import instance, {
  ApiError,
  ApiResponse,
  AsyncThunkConfig,
  isAxiosError,
} from '../../../api/axiosConfig';
import { Recipe } from '../../../api/recipeAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { dispatchNotification } from '../../../utils/redux';
import { recipeAPI } from '../../../utils/paths';

export const fetchRecipeById = createAsyncThunk<
  ApiResponse<Recipe>,
  string,
  AsyncThunkConfig
>('recipe/id/get', async (id, thunkAPI) => {
  try {
    const response = await instance.get<ApiResponse<Recipe>>(
      `${recipeAPI}/${id}`
    );

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
