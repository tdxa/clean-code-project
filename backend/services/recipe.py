from typing import Any, Mapping

from bson.objectid import ObjectId
from pymongo.cursor import Cursor
from pymongo.database import Database
from pymongo.errors import BulkWriteError, DuplicateKeyError

from exceptions import RecipeAlreadyExist
from models import Recipe
from models.recipe_model import RecipeResponse
from models.shared_model import PyObjectId
from scraper import RecipeScraper


IdType = str | ObjectId | bytes | None


class RecipesService:
    """Class for managing recipes in database"""
    COLLECTION_NAME = 'ExtendedRecipesCollection'

    def __init__(self, database: Database) -> None:
        """Initializes the database connection"""
        self.collection = database[self.COLLECTION_NAME]

    def get_one(self, id: str) -> RecipeResponse:
        """Returns one recipe from the database"""
        return self.collection.find_one({"_id": ObjectId(id)})

    def get_all(self) -> list[RecipeResponse]:
        """Returns all recipes from the database"""
        return list(self.collection.find())

    def get_all_names(self) -> list[str]:
        """Returns all names of recipes from the database"""
        return self.collection.distinct("name")

    def get_one_by_name(self, name: str) -> Cursor[Mapping[str, Any] | Any]:
        """Returns all recipes with given name"""
        return self.collection.find_one({'name': name})

    def get_all_tags(self) -> list[str]:
        """Returns all available tags"""
        return self.collection.distinct("tags")

    def get_all_by_tag(self, tag: str) -> list[RecipeResponse]:
        """Returns all recipes with given tag"""
        return list(self.collection.find({"tags": tag}, {"_id": 0}))

    def get_random_recipe(self) -> RecipeResponse:
        """Returns random recipe from database"""
        return list(self.collection.aggregate(pipeline=[{"$sample": {"size": 1}}]))[0]

    def get_all_by_ingredient(self, ingredient: str) -> Cursor[Mapping[str, Any] | Any]:
        """Returns all recipes with given ingredient"""
        return self.collection.find({'ingredients': ingredient})

    def insert_one(self, recipe: Recipe) -> RecipeResponse:
        """Inserts one recipe to the database"""
        try:
            new_recipe_id = self.collection.insert_one(dict(recipe)).inserted_id
            return self.get_one(new_recipe_id)
        except DuplicateKeyError:
            raise RecipeAlreadyExist(recipe.name)

    def insert_many(self, recipes: list[Recipe]) -> None:
        """Inserts many recipes to the database"""
        recipes_as_dicts = map(lambda x: x.dict(), recipes)
        try:
            return self.collection.insert_many(recipes_as_dicts)
        except (DuplicateKeyError, BulkWriteError):
            for recipe in recipes:
                self.insert_one(recipe)

    def update_one(self, id: PyObjectId, data: Recipe) -> Recipe:
        """Updates one recipe in the database"""
        if (
            self.collection.update_one(
                {"_id": ObjectId(id)}, {"$set": dict(data)}
            ).modified_count
            is not None
        ):
            return data

    def delete_one_by_id(self, id: str) -> None:
        """Deletes one recipe from the database by id"""
        self.collection.delete_one({"_id": ObjectId(id)})

    def delete_all(self) -> None:
        """Deletes all recipes from the database"""
        return self.collection.delete_many({})

    @staticmethod
    def get_recipe_from_scraper(scraper: RecipeScraper) -> Recipe:
        """Calls scraper to get recipe from given url"""
        return Recipe(
            name=scraper.get_name(),
            image_url = scraper.get_image_link(),
            url=scraper.url,
            ingredients=scraper.get_ingredients(),
            nutritional_values=scraper.get_nutritional_values(),
            preparation_method=scraper.get_preparation_instruction(),
            tags=scraper.get_tags(),
        )
