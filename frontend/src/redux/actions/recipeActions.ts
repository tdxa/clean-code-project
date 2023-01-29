import instance, { ApiError, isAxiosError } from '../../api/axiosConfig';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { dispatchNotification } from '../../utils/redux';
import { randomRecipeAPI } from '../../utils/paths';

export const fetchRandomRecipe = createAsyncThunk(
  'recipe/random/get',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get(randomRecipeAPI);
      return response;
    } catch (err) {
      if (isAxiosError(err) && err.response != null) {
        const extractedError = err.response.data as ApiError;

        dispatchNotification('error', extractedError.message, true);

        return thunkAPI.rejectWithValue(extractedError);
      }

      dispatchNotification('error');
      throw err;
    }
  }
);
