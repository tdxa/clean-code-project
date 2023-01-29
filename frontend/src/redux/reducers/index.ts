import { authReducer } from './authReducers';
import { combineReducers } from '@reduxjs/toolkit';
import notificationsReducers from './notificationsReducers';
import recipesReducers from './recipesReducers';

export default combineReducers({
  auth: authReducer,
  notifications: notificationsReducers,
  randomRecipe: recipesReducers,
});
