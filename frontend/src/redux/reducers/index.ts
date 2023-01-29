import { authReducer } from './authReducers';
import { combineReducers } from '@reduxjs/toolkit';
import notificationsReducers from './notificationsReducers';
import randomRecipeReducers from './recipe/randomRecipeReducers';
import recipeReducers from './recipe/recipeReducers';

export default combineReducers({
  auth: authReducer,
  notifications: notificationsReducers,
  randomRecipe: randomRecipeReducers,
  recipe: recipeReducers,
});
