import * as styles from './recipe.module.scss';
import React, { FC } from 'react';
import CookingSVG from '../../../images/cooking.svg';
import Ingredient from '../Ingredient';
import { Recipe } from '../../../api/recipeAPI';
import WhiteCard from '../../Common/WhiteCard';

interface Props {
  recipe: Recipe;
}

const RecipePreview: FC<Props> = ({ recipe }) => {
  const generateIngredients = () => {
    if (recipe.ingredients.length > 6) {
      const slicedIngredients = recipe.ingredients.slice(0, 5);

      return (
        <>
          {slicedIngredients.map((ingredient, index) => (
            <Ingredient key={`ingredient-${index}`} name={ingredient[1]} />
          ))}
          <div className={styles.containerMore}>
            + {recipe.ingredients.length - 5} więcej
          </div>
        </>
      );
    } else {
      return (
        <>
          {recipe.ingredients.map((ingredient, index) => (
            <Ingredient key={`ingredient-${index}`} name={ingredient[1]} />
          ))}
        </>
      );
    }
  };

  return (
    <WhiteCard>
      <div className={styles.containerRecipe}>
        <div className={styles.containerTitle}>
          <CookingSVG />
          <div>
            <h3>{recipe.name}</h3>
            <p>{recipe.nutritional_values.calories}</p>
          </div>
        </div>
        <div className={styles.containerIngredients}>
          {generateIngredients()}
        </div>
      </div>
    </WhiteCard>
  );
};

export default RecipePreview;
