import { handlePending, handleReject } from '../../utils/redux';
import { BaseApiState } from '../../api/axiosConfig';
import { User } from '../../api/userAPI';
import { WritableDraft } from 'immer/dist/internal';
import { createSlice } from '@reduxjs/toolkit';
import { homepagePath } from '../../utils/paths';
import { login } from '../actions/authActions';
import { navigate } from 'gatsby-link';

export interface AuthState extends BaseApiState {
  user?: User;
}

const initialState: AuthState = {
  user: undefined,
  succeeded: false,
  loading: false,
  error: false,
  errorMessage: undefined,
  errorDetails: undefined,
};

const handleLogout = (state: WritableDraft<AuthState>) => {
  state.user = undefined;
  state.loading = false;

  void navigate(homepagePath);
};

const handleLogoutFulfilled = (state: WritableDraft<AuthState>) => {
  state.succeeded = true;
  handleLogout(state);
};

const handleLogoutRejected = (state: WritableDraft<AuthState>) => {
  state.succeeded = false;
  handleLogout(state);
};

const authSlice = createSlice({
  name: 'authUser',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, handlePending)
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.loading = false;
        state.succeeded = true;
      })
      .addCase(login.rejected, handleReject);
    //   .addCase(logout.pending, handlePending)
    //   .addCase(logout.fulfilled, handleLogoutFulfilled)
    //   .addCase(logout.rejected, handleLogoutRejected);
  },
});

export const authReducer = authSlice.reducer;
