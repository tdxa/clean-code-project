import { ApiError, BaseApiState } from '../api/axiosConfig';
import { PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer/dist/internal';

interface PayloadActionMeta<T> {
  arg: T;
  requestId: string;
  rejectedWithValue: boolean;
  requestStatus: 'rejected';
  aborted: boolean;
  condition: boolean;
}

export type ErrorPayloadAction<T> = PayloadAction<
  ApiError | undefined,
  string,
  PayloadActionMeta<T>,
  SerializedError
>;

export const handleReject = <T>(
  state: WritableDraft<BaseApiState>,
  action: ErrorPayloadAction<T>
) => {
  state.loading = false;
  state.succeeded = false;

  if (action.payload) {
    state.error = action.payload.error;
    state.errorMessage = action.payload.message;
    state.errorDetails = action.payload.details;
  } else {
    state.error = true;
    state.errorMessage = undefined;
    state.errorDetails = undefined;
  }
};

export const clearErrors = (state: WritableDraft<BaseApiState>) => {
  state.error = false;
  state.errorMessage = undefined;
  state.errorDetails = undefined;
};

export const handlePending = (state: WritableDraft<BaseApiState>) => {
  state.loading = true;
  state.succeeded = false;
  clearErrors(state);
};
