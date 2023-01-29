import { navigate } from 'gatsby-link';
// request paths

// gatsby pages' paths
export const homepagePath = '/';

// navigation handlers
export const handleNavigateToPreviousPage = () => navigate(-1);

export const handleNavigateToPage = (path: string) => {
  void navigate(path);
};
