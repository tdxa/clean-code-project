from typing import Any, Mapping

import requests
from pymongo.cursor import Cursor

from src.recipe import Recipe
from src.recipes_service import RecipesService


class RecipesController:
    def __init__(self) -> None:
        """ The constructor """
        self.db_service = RecipesService()

    def check_connection(self) -> dict[str, Any]:
        """ Checks if connection to the database is established """
        return self.db_service.check_connection()

    def get_recipe(self, id) -> Recipe:
        """ Returns one recipe from the database """
        json = self.db_service.get_one(id)
        recipe = Recipe()
        recipe.create_recipe_from_json(json)
        return recipe

    def get_recipe_by_name(self, name: str) -> Recipe:
        """ Returns recipe with given name """
        json = self.db_service.get_one_by_name(name)
        recipe = Recipe()
        recipe.create_recipe_from_json(json)
        return recipe

    def get_all_recipes(self) -> list[Recipe]:
        """ Gets all recipes from the database """
        json = self.db_service.get_all()
        recipes = []
        for recipe in json:
            rec = Recipe()
            rec.create_recipe_from_json(recipe)
            recipes.append(recipe)
        return recipes

    def get_recipes_by_tag(self, tag) -> Cursor[Mapping[str, Any] | Any]:
        """ Returns all recipes with given tag """
        return self.db_service.get_all_by_tag(tag)

    def get_names_of_recipes(self) -> Cursor[Mapping[str, Any] | Any]:
        """ Returns all names of recipes from the database """
        return self.db_service.get_all_names()

    def download_recipes(self, url: str) -> bool:
        """ Saves recipes from given url to the database """
        recipes = requests.get(url).json()['recipes']
        rec = Recipe()
        for recipe in recipes:
            rec.create_recipe_from_url('https://www.fitczarodziejka.pl/przepis/' + recipe['slug'])
            print('Saving recipe: ' + recipe['title'])
            self.db_service.insert_one(rec.recipe_to_json())
        return True
