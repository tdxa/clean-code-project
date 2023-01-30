import * as styles from './loader.module.scss';
import React, { FC } from 'react';
import { CircularProgress } from '@mui/material';
import clsx from 'clsx';

const Loader: FC<{ loading: boolean; text?: string; covering?: boolean }> = ({
  loading,
  text,
  covering,
}) => {
  return (
    <div
      className={clsx(
        loading ? styles.container : styles.hidden,
        covering && styles.covering
      )}
    >
      <CircularProgress size={64} thickness={2.8} color='inherit' />
      {text && <h3 className={styles.loaderText}>{text}</h3>}
    </div>
  );
};

export default Loader;
