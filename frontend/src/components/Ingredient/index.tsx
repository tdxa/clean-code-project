import * as styles from './ingredient.module.scss';
import React, { FC } from 'react';

interface Props {
  name: string;
}
const Ingredient: FC<Props> = ({ name }) => {
  return (
    <div className={styles.container}>
      <p>{name}</p>
    </div>
  );
};

export default Ingredient;
