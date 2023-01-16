from typing import Any, Mapping

import pymongo
from bson.objectid import ObjectId
from pymongo.cursor import Cursor
from pymongo.server_api import ServerApi


_DB_CONNECTION_URL = (
    'mongodb+srv://cleanuser:cleanpassword@recipescluster.bapblqj.mongodb.net/?retryWrites=true'
)
_MONGO_API_VERSION = '1'


class RecipesService:
    """Service responsible for recipes management"""
    def __init__(self) -> None:
        """Initializes the database connection"""
        self.client = pymongo.MongoClient(_DB_CONNECTION_URL, server_api=ServerApi(_MONGO_API_VERSION))
        self.db = self.client['RecipesDatabase']
        self.collection = self.db['RecipesCollection']

    def check_connection(self) -> dict[str, Any]:
        """Checks if connection to the database is established"""
        return self.client.server_info()

    def get_one(self, id) -> str:
        """Returns one recipe from the database"""
        return self.collection.find_one({'_id': ObjectId(id)})

    def get_all(self) -> Cursor[Mapping[str, Any] | Any]:
        """Returns all recipes from the database"""
        return self.collection.find()

    def get_all_names(self) -> Cursor[Mapping[str, Any] | Any]:
        """Returns all names of recipes from the database"""
        return self.collection.find({}, {'name': 1, '_id': 0})

    def get_one_by_name(self, name) -> Cursor[Mapping[str, Any] | Any]:
        """Returns all recipes with given name"""
        return self.collection.find_one({'name': name})

    def get_all_by_tag(self, tag) -> Cursor[Mapping[str, Any] | Any]:
        """Returns all recipes with given tag"""
        return self.collection.find({'tags': tag})

    def get_all_by_ingredient(self, ingredient) -> Cursor[Mapping[str, Any] | Any]:
        """Returns all recipes with given ingredient"""
        return self.collection.find({'ingredients': ingredient})

    def insert_one(self, data):
        """Inserts one recipe to the database"""
        try:
            data = dict(data)
            return self.collection.insert_one(data)
        except pymongo.errors.DuplicateKeyError:
            print('Recipe already exists in the database')

    def update_one(self, id, data):
        """Updates one recipe in the database"""
        return self.collection.update_one({'_id': ObjectId(id)}, {'$set': data})

    def delete_one(self, id):
        """Deletes one recipe from the database"""
        return self.collection.delete_one({'_id': ObjectId(id)})

    def delete_all(self):
        """Deletes all recipes from the database"""
        return self.collection.delete_many({})
