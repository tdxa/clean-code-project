import * as React from 'react';
import { Link } from 'gatsby';

import Seo from '../components/seo';
import MyMyLayout from '../components/Layout';

const SecondPage = () => (
  <MyMyLayout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </MyMyLayout>
);

export const Head = () => <Seo title="Page two" />;

export default SecondPage;
