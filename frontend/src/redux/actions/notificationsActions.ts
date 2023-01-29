import { Omit, OptionsObject, SnackbarMessage } from 'notistack';
import { enqueueSnackbar } from '../reducers/notificationsReducers';
import store from '../store';
export interface Notification {
  message: SnackbarMessage;
  options?: Omit<OptionsObject, 'defaultValue'>;
}

export const dispatchEnqueueSnackbar = ({ message, options }: Notification) => {
  const { dispatch } = store;

  dispatch(
    enqueueSnackbar({
      notification: {
        message,
        options: {
          ...options,
          key: new Date().getTime() + Math.random(),
        },
      },
    })
  );
};
