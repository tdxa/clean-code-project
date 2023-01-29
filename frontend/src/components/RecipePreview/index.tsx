import * as styles from './recipePreview.module.scss';
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CookingSVG from '../../images/cooking.svg';
import { Divider } from '@mui/material';
import WhiteCard from '../Common/WhiteCard';
import { fetchRecipeById } from '../../redux/actions/recipe/recipeActions';
import {
  selectRecipeById,
  selectRecipeByIdLoading,
} from '../../redux/selectors/recipeSelectors';
import Loader from '../Common/Loader';
interface Props {
  path: string;
}

const RecipePreview: FC<Props> = ({ path }) => {
  const dispatch = useDispatch();

  const recipe = useSelector(selectRecipeById);
  const loading = useSelector(selectRecipeByIdLoading);

  useEffect(() => {
    dispatch(fetchRecipeById(path));
  }, [dispatch, path]);

  return (
    <>
      {loading || !recipe ? (
        <Loader loading />
      ) : (
        <div className={styles.container}>
          <WhiteCard>
            <div className={styles.containerRecipe}>
              <div className={styles.containerHeader}>
                <CookingSVG />
                <div>
                  <h1>{recipe?.name}</h1>
                  <div className={styles.containerNutritionalValues}>
                    {Object.keys(recipe.nutritional_values).map(
                      (keyName, index) => (
                        <p
                          key={index}
                        >{`${keyName} : ${recipe.nutritional_values[keyName]}`}</p>
                      )
                    )}
                  </div>
                </div>
              </div>
              <Divider />
              <div className={styles.containerDetails}>
                <div>
                  <h3>Składniki</h3>
                  {recipe.ingredients.map((ingredients, index) =>
                    index > 0 ? (
                      <p key={`ingredients-${index}`}>{ingredients}</p>
                    ) : (
                      ''
                    )
                  )}
                </div>
                <Divider orientation='vertical' flexItem />
                <div>
                  <h3>Sposób przygotowania</h3>
                  <div>
                    {recipe.preparation_method.map((step, index) => (
                      <p key={`preparation-method-${index}`}>{step}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </WhiteCard>
        </div>
      )}
    </>
  );
};

export default RecipePreview;
