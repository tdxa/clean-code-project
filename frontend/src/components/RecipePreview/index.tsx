import * as styles from './recipePreview.module.scss';
import React, { FC, useEffect } from 'react';
import {
  selectRecipeById,
  selectRecipeByIdLoading,
} from '../../redux/selectors/recipeSelectors';
import { useDispatch, useSelector } from 'react-redux';
import CookingSVG from '../../images/cooking.svg';
import { Divider } from '@mui/material';
import Loader from '../Common/Loader';
import WhiteCard from '../Common/WhiteCard';
import { fetchRecipeById } from '../../redux/actions/recipe/recipeActions';

interface Props {
  id: string;
}
const RecipePreview: FC<Props> = ({ id }) => {
  const dispatch = useDispatch();

  const recipe = useSelector(selectRecipeById);
  const loading = useSelector(selectRecipeByIdLoading);

  useEffect(() => {
    dispatch(fetchRecipeById(id));
  }, [dispatch, id]);

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
                <div className={styles.containerIngredients}>
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
              <Divider />
              <div>
                <h3>Kategorie</h3>
                {recipe.tags.map((tag, index) => (
                  <div key={index}>{tag}</div>
                ))}
              </div>
            </div>
          </WhiteCard>
        </div>
      )}
    </>
  );
};

export default RecipePreview;
