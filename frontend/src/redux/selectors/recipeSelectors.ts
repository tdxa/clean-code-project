import { RootState } from '../store';

export const selectRandomRecipe = (store: RootState) =>
  store.randomRecipe.recipe;
