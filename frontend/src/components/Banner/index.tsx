import * as styles from './banner.module.scss';
import React, { FC } from 'react';
import ManImg from '../../images/man.png';

const RecipeBanner: FC = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.containerText}>
          <h2>Dodaj swój własny przepis</h2>
          <h3>
            Prześlij swój własny przepis i podziel się nim z innymi członkami
            naszej społeczności!
          </h3>
        </div>
      </div>
      <img
        src={ManImg}
        alt='Man holding lettuce'
        className={styles.imgBanner}
      />
    </div>
  );
};

export default RecipeBanner;
