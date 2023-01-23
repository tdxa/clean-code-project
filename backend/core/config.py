import os

from pydantic import BaseSettings


class Settings(BaseSettings):
    """
    A class that extends BaseSettings with custom ones
    """
    API_V1_STR: str = '/api/v1'
    MONGO_CONNECTION_STRING: str = os.getenv(
        'MONGO_CONNECTION_STRING', 'mongodb://localhost:27017'
    )
    MONGO_DB: str = 'RecipesDatabase'
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    SECRET_KEY: str = os.getenv('APP_SECRET_KEY', 'secret')
    ALGORITHM: str = 'HS256'


settings = Settings()
