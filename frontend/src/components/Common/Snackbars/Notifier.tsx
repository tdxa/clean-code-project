import { FC, useEffect } from 'react';
import { SnackbarKey, useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';
import { removeSnackbar } from '../../../redux/reducers/notificationsReducers';

let displayed: SnackbarKey[] = [];

const Notifier: FC = () => {
  const dispatch = useDispatch();
  const notifiactions = useSelector(selectNotifications);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const storeDisplayed = (id: SnackbarKey) => {
    displayed = [...displayed, id];
  };

  const removeDisplayed = (id: SnackbarKey) => {
    displayed = [...displayed.filter((key) => id !== key)];
  };

  useEffect(() => {
    notifiactions.forEach(({ key, notification, dismissed = false }) => {
      if (dismissed) {
        closeSnackbar(key);

        return;
      }

      if (displayed.includes(key)) {
        return;
      }

      const { message, options } = notification;

      enqueueSnackbar(message, {
        key,
        ...options,
        onClose: (event, reason, myKey) => {
          if (options?.onClose) {
            options.onClose(event, reason, myKey);
          }
        },
        onExited: (event, myKey) => {
          dispatch(removeSnackbar({ key: myKey }));
          removeDisplayed(myKey);
        },
      });

      storeDisplayed(key);
    });
  }, [notifiactions, closeSnackbar, enqueueSnackbar, dispatch]);

  return null;
};

export default Notifier;
