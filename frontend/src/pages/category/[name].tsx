import Layout from '../../components/Layout';
import React from 'react';
import RecipeList from '../../components/RecipeList';
import Seo from '../../components/seo';

const CategoryPage = (props: { params: { name: string } }) => {
  return (
    <>
      <Seo title='Kategorie przepisów' />
      <Layout>
        <h1> </h1>
        <h2>Kategoria: {props.params.name}</h2>
        <RecipeList category={props.params.name} />
      </Layout>
    </>
  );
};

export default CategoryPage;
