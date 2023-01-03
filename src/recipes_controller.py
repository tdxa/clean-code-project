import requests
from typing import Any
from src.recipe import Recipe
from src.recipes_service import RecipesService


class RecipesController:
    def __init__(self) -> None:
        """ The constructor """
        self.db_service = RecipesService()

    def check_connection(self) -> dict[str, Any]:
        """ Checks if connection to the database is established """
        return self.db_service.check_connection()

    def get_names_of_recipes(self) -> str:
        """ Returns all names of recipes from the database """
        return self.db_service.get_all_names()

    def get_recipes(self) -> str:
        """ Gets all recipes from the database """
        return self.db_service.get_all()

    def get_recipes_by_tag(self, tag) -> str:
        """ Returns all recipes with given tag """
        return self.db_service.get_all_by_tag(tag)

    def save_recipes_from_api(self, url: str) -> bool:
        """ Saves recipes from given url to the database """
        recipes = requests.get(url).json()['recipes']
        for recipe in recipes:
            print('Saving recipe: ' + recipe['title'])
            url = 'https://www.fitczarodziejka.pl/przepis/' + recipe['slug']
            self.db_service.insert_one(Recipe(url).recipe_to_json())
        return True
