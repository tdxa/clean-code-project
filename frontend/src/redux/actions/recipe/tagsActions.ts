import instance, {
  ApiError,
  AsyncThunkConfig,
  isAxiosError,
} from '../../../api/axiosConfig';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { tagsAPI } from '../../../utils/paths';

export const fetchTags = createAsyncThunk<
  string[],
  undefined,
  AsyncThunkConfig
>('tags/get', async (_, thunkAPI) => {
  try {
    const response = await instance.get<string[]>(tagsAPI);

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
