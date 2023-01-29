import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import RecipeBanner from '../components/Banner';
import Seo from '../components/seo';
import { fetchRandomRecipe } from '../redux/actions/recipeActions';
import { useDispatch } from 'react-redux';

const IndexPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRandomRecipe());
  }, []);

  return (
    <>
      <Seo title='Home' />
      <Layout>
        <h1> </h1>
        <RecipeBanner />
      </Layout>
    </>
  );
};

export default IndexPage;
