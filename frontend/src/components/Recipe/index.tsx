import * as styles from './recipe.module.scss';
import React, { FC } from 'react';
import CookingSVG from '../../images/cooking.svg';
import Ingredient from '../Ingredient';
import { Link } from '@reach/router';
import { Recipe } from '../../api/recipeAPI';
import WhiteCard from '../Common/WhiteCard';
import { recipePage } from '../../utils/paths';

interface Props {
  recipe: Recipe;
}

const RecipeBox: FC<Props> = ({ recipe }) => {
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
      <Link
        to={`${recipePage}/${recipe._id}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <div
          className={styles.containerRecipe}
          // onClick={() => handleNavigateToRecipePage(recipe._id)}
          // role='button'
        >
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
      </Link>
    </WhiteCard>
  );
};

export default RecipeBox;
