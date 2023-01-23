import * as React from 'react';
import Seo from '../components/Common/seo';
import AppLayout from '../components/Layout';

const IndexPage = () => (
  <>
    <Seo title="Home" description={undefined} children={undefined} />
    <AppLayout>
      <h1>hello</h1>
    </AppLayout>
  </>
);

export default IndexPage;
