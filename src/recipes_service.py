import pymongo
from typing import Any
from bson.json_util import dumps
from bson.objectid import ObjectId
from pymongo.server_api import ServerApi


class RecipesService:
    def __init__(self) -> None:
        """ Initializes the database connection """
        connection_url = "mongodb+srv://cleanuser:cleanpassword@recipescluster.bapblqj.mongodb.net" \
                         "/?retryWrites=true"
        self.client = pymongo.MongoClient(connection_url, server_api=ServerApi('1'))
        self.db = self.client["RecipesDatabase"]
        self.collection = self.db["RecipesCollection"]

    def check_connection(self) -> dict[str, Any]:
        """ Checks if connection to the database is established """
        return self.client.server_info()

    def get_one(self, id) -> str:
        """ Returns one recipe from the database """
        return dumps(self.collection.find_one({"_id": ObjectId(id)}))

    def get_all(self) -> str:
        """ Returns all recipes from the database """
        return dumps(self.collection.find())

    def get_all_by_name(self, name) -> str:
        """ Returns all recipes with given name """
        return dumps(self.collection.find({"name": name}))

    def get_all_by_tag(self, tag) -> str:
        """ Returns all recipes with given tag """
        return dumps(self.collection.find({"tags": tag}))

    def get_all_by_ingredient(self, ingredient) -> str:
        """ Returns all recipes with given ingredient """
        return dumps(self.collection.find({"ingredients": ingredient}))

    def add_new(self, recipe) -> bool:
        """
        Adds new recipe to the database
        :param recipe:
        :return:
        """
        if self.get_all_by_name(recipe["name"]) != "[]":
            return False
        if self.insert_one(recipe) is None:
            return True

    def insert_one(self, data):
        """ Inserts one recipe to the database """
        data = dict(data)
        return self.collection.insert_one(data)

    def update_one(self, id, data):
        """ Updates one recipe in the database """
        return self.collection.update_one({"_id": ObjectId(id)}, {"$set": data})

    def delete_one(self, id):
        """ Deletes one recipe from the database """
        return self.collection.delete_one({"_id": ObjectId(id)})
