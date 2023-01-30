import React, { FC } from 'react';
import CategoryList from '../components/CategoryList';
import Layout from '../components/Layout';
import Seo from '../components/seo';

const CategoryPage: FC = () => {
  return (
    <>
      <Seo title='Kategorie przepisów' />
      <Layout>
        <h1> </h1>
        <h2>Kategorie przepisów</h2>
        <CategoryList />
      </Layout>
    </>
  );
};

export default CategoryPage;
