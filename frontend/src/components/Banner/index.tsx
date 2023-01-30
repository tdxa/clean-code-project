import * as styles from './banner.module.scss';
import React, { FC, useState } from 'react';
import ManImg from '../../images/man.png';
import PrimaryButton from '../Common/Buttons/PrimaryButton';

const RecipeBanner: FC = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerText}>
          <h2>Dodaj swój własny przepis</h2>
          <h3>
            Prześlij swój własny przepis i podziel się nim z innymi członkami
            naszej społeczności!
          </h3>
          <span>
            <PrimaryButton text='Dodaj' event={() => setOpenModal(true)} />
          </span>
        </div>
        <div>
          <img
            src={ManImg}
            alt='Man holding lettuce'
            className={styles.imgBanner}
          />
        </div>
      </div>
    </>
  );
};

export default RecipeBanner;
