import { navigate } from 'gatsby-link';
// request paths
export const recipeAPI = '/recipes';
export const recipeTagAPI = '/recipes/tag';
export const recipeNameAPI = '/recipes/names';
export const recipeNamesAPI = '/recipes-names';
export const tagsAPI = '/recipes-tags';
export const randomRecipeAPI = '/recipes/random';
export const loginAPI = '/token';
export const registerAPI = '/register';
// gatsby pages' paths
export const homepagePath = '/';
export const categoryPath = '/category';
export const recipePage = '/recipe';
export const resultPage = '/result';

// navigation handlers
export const handleNavigateToPreviousPage = () => navigate(-1);

export const handleNavigateToPage = (path: string) => {
  void navigate(path);
};

export const handleNavigateToRecipePage = (id: string) => {
  void navigate(`${recipePage}/${id}`);
};
