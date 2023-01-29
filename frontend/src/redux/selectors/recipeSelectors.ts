import { RootState } from '../store';

export const selectRandomRecipe = (store: RootState) =>
  store.randomRecipe.recipe;

export const selectRandomRecipeLoading = (store: RootState) =>
  store.randomRecipe.loading;

export const selectRecipeById = (store: RootState) => store.recipe.recipe;

export const selectRecipeByIdLoading = (store: RootState) =>
  store.recipe.loading;
