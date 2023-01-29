import { BaseApiState } from './axiosConfig';

export type NutritionalValue =
  | 'calories'
  | 'carbohydrates'
  | 'fiber'
  | 'protein'
  | 'fat';

type Ingredient = string[];

export interface Recipe {
  url: string;
  name: string;
  ingredients: Ingredient[];
  nutritional_values: Record<NutritionalValue, string>;
}

export interface RandomRecipeState extends BaseApiState {
  recipe: Recipe;
}
