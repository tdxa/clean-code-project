import { RootState } from '../store';

export const selectRandomRecipe = (store: RootState) =>
  store.randomRecipe.recipe;

export const selectRandomRecipeLoadings = (store: RootState) =>
  store.randomRecipe.loading;
