import * as styles from './whitecard.module.scss';
import React, { FC } from 'react';

const WhiteCard: FC = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default WhiteCard;
