import { SnackbarKey } from 'notistack';
import { WritableDraft } from 'immer/dist/internal';
import { createSlice } from '@reduxjs/toolkit';

interface NotificationState {
  key: SnackbarKey;
  notification: Notification;
  dismissed?: boolean;
}

const initialState: {
  notifications: NotificationState[];
} = { notifications: [] };

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    enqueueSnackbar(
      state,
      action: { payload: { notification: Notification }; type: string }
    ) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const key = action.payload.notification.options?.key;

      if (key) {
        const notification: WritableDraft<Notification> = {
          ...action.payload.notification,
        } as WritableDraft<Notification>;

        state.notifications = [...state.notifications, { key, notification }];
      }
    },
    closeSnackbar(
      state,
      action: { payload: { key: SnackbarKey }; type: string }
    ) {
      state.notifications = state.notifications.map((notification) => {
        return notification.key === action.payload.key
          ? { ...notification, dismissed: true }
          : { ...notification };
      });
    },
    removeSnackbar(
      state,
      action: { payload: { key: SnackbarKey }; type: string }
    ) {
      state.notifications = state.notifications.filter(
        (notification) => notification.key !== action.payload.key
      );
    },
  },
  extraReducers: {},
});

export default notificationsSlice.reducer;

export const { enqueueSnackbar, closeSnackbar, removeSnackbar } =
  notificationsSlice.actions;
