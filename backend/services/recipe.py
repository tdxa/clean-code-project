from typing import Any, Mapping

from bson.objectid import ObjectId
from pymongo.cursor import Cursor
from pymongo.database import Database
from pymongo.errors import BulkWriteError, DuplicateKeyError

from exceptions import RecipeAlreadyExist
from models import Recipe
from scraper import Scraper


IdType = str | ObjectId | bytes | None


class RecipesService:
    """Class for managing recipes in database"""
    COLLECTION_NAME = 'RecipesCollection'

    def __init__(self, database: Database) -> None:
        """Initializes the database connection"""
        self.collection = database[self.COLLECTION_NAME]

    def get_one(self, id: IdType) -> str:
        """Returns one recipe from the database"""
        return self.collection.find_one({'_id': ObjectId(id)})

    def get_all(self) -> Cursor[Mapping[str, Any] | Any]:
        """Returns all recipes from the database"""
        return self.collection.find()

    def get_all_names(self) -> Cursor[Mapping[str, Any] | Any]:
        """Returns all names of recipes from the database"""
        return self.collection.find({}, {'name': 1, '_id': 0})

    def get_one_by_name(self, name: str) -> Cursor[Mapping[str, Any] | Any]:
        """Returns all recipes with given name"""
        return self.collection.find_one({'name': name})

    def get_all_by_tag(self, tag: str) -> Cursor[Mapping[str, Any] | Any]:
        """Returns all recipes with given tag"""
        return self.collection.find({'tags': tag})

    def get_all_by_ingredient(self, ingredient: str) -> Cursor[Mapping[str, Any] | Any]:
        """Returns all recipes with given ingredient"""
        return self.collection.find({'ingredients': ingredient})

    def insert_one(self, recipe: Recipe):
        """Inserts one recipe to the database"""
        try:
            return self.collection.insert_one(recipe.dict())
        except DuplicateKeyError:
            raise RecipeAlreadyExist(recipe.name)

    def insert_many(self, recipes: list[Recipe]):
        """Inserts many recipes to the database"""
        recipes_as_dicts = map(lambda x: x.dict(), recipes)
        try:
            return self.collection.insert_many(recipes_as_dicts)
        except (DuplicateKeyError, BulkWriteError):
            for recipe in recipes:
                self.insert_one(recipe)

    def update_one(self, id: IdType, recipe: Recipe):
        """Updates one recipe in the database"""
        return self.collection.update_one({'_id': ObjectId(id)}, {'$set': recipe.dict()})

    def delete_one(self, id: IdType):
        """Deletes one recipe from the database"""
        return self.collection.delete_one({'_id': ObjectId(id)})

    def delete_all(self):
        """Deletes all recipes from the database"""
        return self.collection.delete_many({})

    @staticmethod
    def get_recipe_from_scraper(scraper: Scraper) -> Recipe:
        """Calls scraper to get recipe from given url"""
        return Recipe(
            name=scraper.get_name(),
            ingredients=scraper.get_ingredients(),
            nutritional_values=scraper.get_nutritional_values(),
            preparation_instruction=scraper.get_preparation_instruction(),
            tags=scraper.get_tags(),
        )
