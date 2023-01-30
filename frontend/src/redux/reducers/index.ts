import { authReducer } from './authReducers';
import { combineReducers } from '@reduxjs/toolkit';
import randomRecipeReducers from './recipe/randomRecipeReducers';
import recipeReducers from './recipe/recipeReducers';

export default combineReducers({
  auth: authReducer,
  randomRecipe: randomRecipeReducers,
  recipe: recipeReducers,
});
