import instance, {
  ApiError,
  AsyncThunkConfig,
  isAxiosError,
} from '../../../api/axiosConfig';
import { recipeAPI, recipeNameAPI, recipeTagAPI } from '../../../utils/paths';
import { Recipe } from '../../../api/recipeAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';

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

export const fetchRecipeByTag = createAsyncThunk<
  Recipe[],
  string,
  AsyncThunkConfig
>('recipe/tag/get', async (tag, thunkAPI) => {
  try {
    const response = await instance.get<Recipe[]>(`${recipeTagAPI}/${tag}`);

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

export const fetchRecipeByName = createAsyncThunk<
  Recipe,
  string,
  AsyncThunkConfig
>('recipe/name/get', async (name, thunkAPI) => {
  try {
    const response = await instance.get<Recipe>(`${recipeNameAPI}/${name}`);

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
