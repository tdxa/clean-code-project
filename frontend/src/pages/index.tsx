import * as React from 'react';
import Seo from '../components/seo';
import MyMyLayout from '../components/Layout';

const IndexPage = () => (
  <>
    <Seo title="Home" description={undefined} children={undefined} />
    <MyMyLayout>
      <h1>hello</h1>
    </MyMyLayout>
  </>
);

export default IndexPage;
