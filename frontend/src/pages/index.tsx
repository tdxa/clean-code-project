import Layout from '../components/Layout';
import React from 'react';
import ReccomendationRecipe from '../components/Reccomendation';
import RecipeBanner from '../components/Banner';
import Seo from '../components/seo';

const IndexPage = () => {
  return (
    <>
      <Seo title='Home' />
      <Layout>
        <h1> </h1>
        <RecipeBanner />

          <ReccomendationRecipe />

      </Layout>s
    </>
  );
};

export default IndexPage;
