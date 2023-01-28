import React, { FC } from 'react';
import * as styles from './whitecard.module.scss';

const WhiteCard: FC = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default WhiteCard;
