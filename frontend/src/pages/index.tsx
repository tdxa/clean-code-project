import React, { FC } from 'react';
import Layout from '../components/Layout';
import ReccomendationRecipe from '../components/Reccomendation';
import RecipeBanner from '../components/Banner';
import Seo from '../components/seo';

const IndexPage: FC = () => {
  return (
    <>
      <Seo title='Home' />
      <Layout>
        <h1> </h1>
        <RecipeBanner />
        <ReccomendationRecipe />
      </Layout>
    </>
  );
};

export default IndexPage;
