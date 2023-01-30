import * as styles from './recipe.module.scss';
import React, { FC } from 'react';
import CookingSVG from '../../../images/cooking.svg';
import { Link } from 'gatsby';
import { Recipe } from '../../../api/recipeAPI';
import WhiteCard from '../../Common/WhiteCard';
import { recipePage } from '../../../utils/paths';

interface Props {
  recipe: Recipe;
}

const RecipeListItem: FC<Props> = ({ recipe }) => {
  return (
    <div className={styles.containerRecipe}>
      <WhiteCard>
        <Link
          to={`${recipePage}/${recipe._id}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div className={styles.containerTitle}>
            <CookingSVG />
            <div>
              <h3>{recipe.name}</h3>
              <p>{recipe.nutritional_values.calories}</p>
            </div>
          </div>
        </Link>
      </WhiteCard>
    </div>
  );
};

export default RecipeListItem;
