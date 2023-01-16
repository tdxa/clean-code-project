from pymongo import MongoClient

from backend.core.config import settings


_client = MongoClient(settings.MONGO_CONNECTION_STRING)
database = _client[settings.MONGO_DB]
