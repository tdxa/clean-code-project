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
  nutritional_values: Record<NutritionalValue, string>;
  preparation_method: string[];
  tags: string[];
}

export interface RandomRecipeState extends BaseApiState {
  recipe?: Recipe;
}
