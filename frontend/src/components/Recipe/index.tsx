// import * as styles from './recipe.module.scss';
import React, { FC } from 'react';
import Ingredient from '../Ingredient';
import WhiteCard from '../Common/WhiteCard';

interface Recipe {
  url: string;
  name: string;
  ingredients: string[];
  nutritional_values: Record<string, any>;
  preparation_method: string[];
  tags: string[];
}
interface Props {
  recipe: Recipe;
}

const Recipe: FC<Props> = ({ recipe }) => {
  const generateIngredients = () => {
    if (recipe.ingredients.length > 6) {
      const slicedIngredients = recipe.ingredients.slice(0, 5);

      return (
        <>
          {slicedIngredients.map((ingredient, index) => (
            <Ingredient key={`ingredient-${index}`} name={ingredient} />
          ))}
          <div>+ {recipe.ingredients.length - 5} więcej</div>
        </>
      );
    } else {
      return (
        <>
          {recipe.ingredients.map((ingredient, index) => (
            <Ingredient key={`ingredient-${index}`} name={ingredient} />
          ))}
        </>
      );
    }
  };

  return (
    <WhiteCard>
      <div>{recipe.name}</div>
      <div>{generateIngredients()}</div>
    </WhiteCard>
  );
};

export default Recipe;
