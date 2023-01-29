import re
from typing import Any, Mapping

from bson.objectid import ObjectId
from exceptions import RecipeAlreadyExist
from models import Recipe
from models.pagination_model import PaginationContent
from models.recipe_model import RecipeResponse
from models.shared_model import CommonQueryParams, PyObjectId
from pymongo.collection import Collection
from pymongo.cursor import Cursor
from pymongo.database import Database
from pymongo.errors import BulkWriteError, DuplicateKeyError
from scraper import RecipeScraper
from utils import paginate_content

IdType = str | ObjectId | bytes | None


class RecipesService:
    """Class for managing recipes in database"""

    COLLECTION_NAME = "RecipesCollection"

    def __init__(self, database: Database) -> None:
        """Initializes the database connection"""
        self.collection: Collection = database[self.COLLECTION_NAME]

    def get_one(self, id: str) -> RecipeResponse:
        """Returns one recipe from the database"""
        return self.collection.find_one({"_id": ObjectId(id)})

    def get_all(self, params: CommonQueryParams) -> PaginationContent:
        """Returns all recipes from the database"""
        return paginate_content(self.collection, page=params.page, size=params.size)

    def get_all_names(self) -> list[str]:
        """Returns all names of recipes from the database"""
        return self.collection.distinct("name")

    def get_one_by_name(self, name: str) -> Cursor[Mapping[str, Any] | Any]:
        """Returns all recipes with given name"""
        return self.collection.find_one({"name": name})

    def get_all_tags(self) -> list[str]:
        """Returns all available tags"""
        return self.collection.distinct("tags")

    def get_all_by_tag(self, params: CommonQueryParams, tag: str) -> PaginationContent:
        """Returns all recipes with given tag"""
        return paginate_content(
            self.collection,
            params.page,
            params.size,
            filter={"tags": re.compile(f"{tag}", re.IGNORECASE)},
        )

    def get_random_recipe(self) -> RecipeResponse:
        """Returns random recipe from database"""
        return list(self.collection.aggregate(pipeline=[{"$sample": {"size": 1}}]))[0]

    def get_all_by_ingredient(self, ingredient: str) -> Cursor[Mapping[str, Any] | Any]:
        """Returns all recipes with given ingredient"""
        return self.collection.find({"ingredients": ingredient})

    def get_one_by_name(self, name: str):
        """Returns recipe with a given name"""
        return self.collection.find_one({"name": name})

    def insert_one(self, recipe: Recipe) -> RecipeResponse:
        """Inserts one recipe to the database"""
        try:
            new_recipe_id = self.collection.insert_one(dict(recipe)).inserted_id
            return self.get_one(new_recipe_id)
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

    def update_one(self, id: PyObjectId, data: Recipe):
        """Updates one recipe in the database"""
        if (
            self.collection.update_one(
                {"_id": ObjectId(id)}, {"$set": dict(data)}
            ).modified_count
            is not None
        ):
            return data

    def delete_one_by_id(self, id: str):
        """Deletes one recipe from the database by id"""
        self.collection.delete_one({"_id": ObjectId(id)})

    def delete_all(self):
        """Deletes all recipes from the database"""
        return self.collection.delete_many({})

    @staticmethod
    def get_recipe_from_scraper(scraper: RecipeScraper) -> Recipe:
        """Calls scraper to get recipe from given url"""
        return Recipe(
            name=scraper.get_name(),
            ingredients=scraper.get_ingredients(),
            nutritional_values=scraper.get_nutritional_values(),
            preparation_instruction=scraper.get_preparation_instruction(),
            tags=scraper.get_tags(),
        )
