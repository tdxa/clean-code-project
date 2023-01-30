import { RootState } from '../store';

export const selectRandomRecipe = (store: RootState) =>
  store.randomRecipe.recipe;

export const selectRandomRecipeLoading = (store: RootState) =>
  store.randomRecipe.loading;

export const selectRecipeById = (store: RootState) => store.recipe.recipe;

export const selectRecipeByIdLoading = (store: RootState) =>
  store.recipe.loading;

export const selectRecipeByTag = (store: RootState) => store.recipes.recipes;

export const selectRecipeByTagLoading = (store: RootState) =>
  store.recipes.loading;
