import * as React from 'react';
import AppLayout from '../components/Layout';
import Seo from '../components/Common/seo';

const NotFoundPage = () => (
  <AppLayout>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </AppLayout>
);

export const Head = () => <Seo title="404: Not Found" />;

export default NotFoundPage;
