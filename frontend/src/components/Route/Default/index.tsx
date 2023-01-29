import { FC } from 'react';
import { isBrowser } from '../../../utils';
import { navigate } from 'gatsby-link';

interface DefaultRouteProps {
  default: boolean;
}

export const DefaultRoute: FC<DefaultRouteProps> = () => {
  if (isBrowser) {
    void navigate('/404');
  }

  return null;
};
