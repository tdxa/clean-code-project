import * as React from 'react';
import Layout from '../components/Layout';
import RecipeBanner from '../components/Banner';
import Seo from '../components/seo';

const IndexPage = () => (
  <>
    <Seo title='Home' />
    <Layout>
      <h1>hello</h1>
      <RecipeBanner />
    </Layout>
  </>
);

export default IndexPage;
