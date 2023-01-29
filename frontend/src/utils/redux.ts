import { ApiError, BaseApiState } from '../api/axiosConfig';
import { PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer/dist/internal';
import { dispatchEnqueueSnackbar } from '../redux/actions/notificationsActions';

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

export type UniversalSnackbarVariants =
  | 'default'
  | 'success'
  | 'error'
  | 'warning'
  | 'info';

export const getNotificationMessage = (
  variant: UniversalSnackbarVariants,
  message?: string,
  getTranslatedFromBackend?: boolean
) => {
  if (getTranslatedFromBackend && message) {
    switch (variant) {
      case 'error':
        return `Nieudane zapytanie: ${getTranslatedBackendMessage(message)}`;
      case 'success':
        return getTranslatedBackendMessage(message);
    }
  }

  if (!getTranslatedFromBackend && message) {
    return message;
  }

  if (!getTranslatedFromBackend && !message) {
    switch (variant) {
      case 'success':
        return 'OK';
      case 'error':
        return 'Nierpoznany błąd';
    }
  }
};

export const dispatchNotification = (
  variant: UniversalSnackbarVariants,
  message?: string,
  getTranslatedFromBackend?: boolean
) => {
  dispatchEnqueueSnackbar({
    message: getNotificationMessage(variant, message, getTranslatedFromBackend),
    options: { variant },
  });
};

export const getTranslatedBackendMessage = (backendMessage: string) => {
  return backendMessage;
};
