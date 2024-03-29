import React, { FC, useEffect } from 'react';
import {
  selectRandomRecipe,
  selectRandomRecipeLoading,
} from '../../redux/selectors/recipeSelectors';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Common/Loader';
import RecipeBox from '../Recipe';
import { fetchRandomRecipe } from '../../redux/actions/recipe/randomRecipeActions';
import { useIsMobile } from '../../utils';

const ReccomendationRecipe: FC = () => {
  const dispatch = useDispatch();
  const isMobile = useIsMobile();

  const recipe = useSelector(selectRandomRecipe);
  const loading = useSelector(selectRandomRecipeLoading);

  useEffect(() => {
    if (!recipe) {
      dispatch(fetchRandomRecipe());
    }
  }, [dispatch, recipe]);

  return (
    <>
      {loading || !recipe ? (
        <Loader loading />
      ) : (
        <div>
          {isMobile ? (
            <h2>A może dzisiaj spróbujesz...</h2>
          ) : (
            <h1>A może dzisiaj spróbujesz...</h1>
          )}
          <RecipeBox recipe={recipe} />
        </div>
      )}
    </>
  );
};

export default ReccomendationRecipe;
