import { authReducer } from './authReducers';
import { combineReducers } from '@reduxjs/toolkit';
import randomRecipeReducers from './recipe/randomRecipeReducers';
import recipeReducers from './recipe/recipeReducers';
import { tagsReducers } from './recipe/tagsReducers';

export default combineReducers({
  auth: authReducer,
  randomRecipe: randomRecipeReducers,
  recipe: recipeReducers,
  tags: tagsReducers,
});
