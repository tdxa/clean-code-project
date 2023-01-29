import React, { FC } from 'react';

interface Props {
  name: string;
}
const Ingredient: FC<Props> = ({ name }) => {
  return (
    <div>
      <p>{name}</p>
    </div>
  );
};

export default Ingredient;
