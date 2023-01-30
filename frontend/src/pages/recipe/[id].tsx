import Layout from '../../components/Layout';
import React from 'react';
import RecipePreview from '../../components/RecipePreview';
import Seo from '../../components/seo';

const RecipePage = (props: { params: { id: string } }) => {
  return (
    <>
      <Seo title='Przepis' />
      <Layout>
        <RecipePreview id={props.params.id} />
      </Layout>
    </>
  );
};

export default RecipePage;
