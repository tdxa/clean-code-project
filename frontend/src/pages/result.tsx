import {
  selectRecipeByName,
  selectRecipeaLoading,
} from '../redux/selectors/recipeSelectors';
import Layout from '../components/Layout';
import Loader from '../components/Common/Loader';
import React from 'react';
import RecipeListItem from '../components/RecipeList/RecipeListItem';
import SearchInformation from '../components/SearchEngine/EmptyState';

import Seo from '../components/seo';
import { useSelector } from 'react-redux';

const SearchResultPage = () => {
  const recipe = useSelector(selectRecipeByName);
  const loading = useSelector(selectRecipeaLoading);

  return (
    <>
      <Seo title='Kategorie przepisów' />
      <Layout>
        <h1> </h1>
        {loading ? (
          <Loader loading />
        ) : !recipe ? (
          <SearchInformation />
        ) : (
          <>
            <h2>Wyniki wyszukiwania</h2>
            <RecipeListItem recipe={recipe} />
          </>
        )}
      </Layout>
    </>
  );
};

export default SearchResultPage;
