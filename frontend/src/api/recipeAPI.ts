import { BaseApiState } from './axiosConfig';

export type NutritionalValue =
  | 'calories'
  | 'carbohydrates'
  | 'fiber'
  | 'protein'
  | 'fat';

type Ingredient = string[];

export interface Recipe {
  _id: string;
  url: string;
  name: string;
  ingredients: Ingredient[];
  nutritional_values: Record<string, string>;
  preparation_method: string[];
  tags: string[];
}

export interface RecipeState extends BaseApiState {
  recipe?: Recipe;
}
export interface RecipesState extends BaseApiState {
  recipes?: Recipe[];
}

export interface TagsState extends BaseApiState {
  tags?: string[];
  filtres?: string[];
}
