import client, {
  ApiError,
  ApiResponse,
  AsyncThunkConfig,
  isAxiosError,
} from '../../api/axiosConfig';
import { LoginData } from '../../components/Authentication/types';
import { User } from '../../api/userAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginAPI } from '../../utils/paths';

// export const logout = createAsyncThunk<undefined, undefined, AsyncThunkConfig>(
//   'user/logout',
//   async (arg_, thunkAPI) => {
//     try {
//       await client.post(logoutURL);
//     } catch (err) {
//       if (isAxiosError(err) && err.response != null) {
//         return thunkAPI.rejectWithValue(err.response.data as ApiError);
//       }

//       throw err;
//     }
//   }
// );

type loginResponse = {
  user: User;
};

export const login = createAsyncThunk<
  loginResponse,
  LoginData,
  AsyncThunkConfig
>('login', async (data, thunkAPI) => {
  try {
    const response = await client.post<ApiResponse<loginResponse>>(
      loginAPI,
      data
    );

    return response.data.results;
  } catch (error) {
    if (isAxiosError(error) && error.response != null) {
      const extractedError = error.response.data as ApiError;

      return thunkAPI.rejectWithValue(extractedError);
    }

    throw error;
  }
});
