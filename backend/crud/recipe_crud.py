from database import database
from pymongo.collection import Collection
from bson.objectid import ObjectId
from models.recipe_model import RecipeResponse, Recipe
from models.shared_model import PyObjectId


class RecipeService:
    def __init__(self) -> None:
        """Initializes recipe collection"""
        self.collection: Collection = database["RecipesCollection"]

    def insert_one(self, recipe: Recipe) -> RecipeResponse:
        """Inserts one recipe to the database"""
        new_recipe_id = self.collection.insert_one(dict(recipe)).inserted_id
        return self.get_one(new_recipe_id)

    def get_one(self, id: str) -> RecipeResponse:
        """Returns one recipe from the database"""
        return self.collection.find_one({"_id": ObjectId(id)})

    def get_all(self) -> list[RecipeResponse]:
        """Returns all recipes from the database"""
        return list(self.collection.find())

    def get_all_names(self) -> list[str]:
        """Returns all names of recipes from the database"""
        return self.collection.distinct("name")

    def get_all_tags(self) -> list[str]:
        """Returns all available tags"""
        return self.collection.distinct("tags")

    def get_all_by_tag(self, tag: str) -> list[RecipeResponse]:
        """Returns all recipes with given tag"""
        return list(self.collection.find({"tags": tag}, {"_id": 0}))

    def get_random_recipe(self) -> RecipeResponse:
        """Returns random recipe from database"""
        res = list(self.collection.aggregate(pipeline=[{"$sample": {"size": 1}}]))[0]
        return res

    def get_one_by_name(self, name: str):
        """Returns recipe with a given name"""
        return self.collection.find_one({"name": name})

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
