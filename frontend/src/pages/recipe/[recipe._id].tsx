import React, { FC } from 'react';
import Layout from '../../components/Layout';
import RecipePreview from '../../components/RecipePreview';
import Seo from '../../components/seo';

const RecipePage: FC = (props) => {
  console.log(props);
  return (
    <>
      <Seo title='Home' />
      <Layout>
        <RecipePreview />
      </Layout>
    </>
  );
};

export default RecipePage;
