import React, { FC, useEffect } from 'react';
import {
  selectRandomRecipe,
  selectRandomRecipeLoadings,
} from '../../redux/selectors/recipeSelectors';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Common/Loader';
import RecipePreview from './Recipe';
import { fetchRandomRecipe } from '../../redux/actions/recipeActions';
import { useIsMobile } from '../../utils';

const ReccomendationRecipe: FC = () => {
  const dispatch = useDispatch();
  const isMobile = useIsMobile();

  const recipe = useSelector(selectRandomRecipe);
  const loading = useSelector(selectRandomRecipeLoadings);

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
          <RecipePreview recipe={recipe} />
        </div>
      )}
    </>
  );
};

export default ReccomendationRecipe;
