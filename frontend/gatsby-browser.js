/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import './src/styles/main.scss';
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';

export const wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>;
};
