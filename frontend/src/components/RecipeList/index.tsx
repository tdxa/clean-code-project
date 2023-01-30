import React, { FC, useEffect } from 'react';
import {
  selectRecipeByTag,
  selectRecipeaLoading,
} from '../../redux/selectors/recipeSelectors';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Common/Loader';
import RecipeListItem from './RecipeListItem';
import { fetchRecipeByTag } from '../../redux/actions/recipe/recipeActions';

interface Props {
  category: string;
}

const RecipeList: FC<Props> = ({ category }) => {
  const dispatch = useDispatch();

  const recipes = useSelector(selectRecipeByTag);
  const loading = useSelector(selectRecipeaLoading);

  useEffect(() => {
    dispatch(fetchRecipeByTag(category));
  }, []);

  return (
    <>
      {loading ? (
        <Loader loading />
      ) : (
        <>
          {recipes?.map((recipe) => (
            <RecipeListItem key={recipe._id} recipe={recipe} />
          ))}
        </>
      )}
    </>
  );
};

export default RecipeList;
