
import pytest

from models.shared_model import PyObjectId


@pytest.fixture(scope='session')
def default_recipe_kwargs() -> dict:
    """Default kwargs for recipe model"""
    return {
        "url": "",
        "name": "",
        "ingredients": [],
        "nutritional_values": {},
        "preparation_method": [],
        "tags": [],
    }


@pytest.fixture(scope='session')
def default_recipe_response_kwargs() -> dict:
    """Default kwargs for recipe response model"""
    return {
        "id": PyObjectId(oid="BCF97CB7FD005CC23A7962A4"),
        "url": "",
        "name": "",
        "ingredients": [],
        "nutritional_values": {},
        "preparation_method": [],
        "tags": [],
    }


@pytest.fixture(scope='session')
def default_nutritional_values_kwargs() -> dict:
    """Default kwargs for nutritional values model"""
    return {
        "calories": "",
        "carbohydrates": "",
        "fiber": "",
        "protein": "",
        "fat": "",
    }


@pytest.fixture(scope='session')
def default_token_kwargs() -> dict:
    """Default kwargs for token model"""
    return {
        "access_token": "",
        "token_type": "",
    }


@pytest.fixture(scope='session')
def default_token_data_kwargs() -> dict:
    """Default kwargs for token data model"""
    return {
        "username": None,
    }


@pytest.fixture(scope="session")
def default_user_kwargs() -> dict:
    """Default kwargs for user model"""
    return {
        "username": "",
        "email": "",
        "first_name": None,
        "last_name": None,
    }


@pytest.fixture(scope="session")
def default_user_create_kwargs(default_user_kwargs: dict) -> dict:
    """Default kwargs for user create model"""
    return default_user_kwargs | {
        "password": "",
    }


@pytest.fixture(scope="session")
def default_user_id_db_kwargs(default_user_kwargs: dict) -> dict:
    """Default kwargs for user in db model"""
    return default_user_kwargs | {
        "hashed_password": "",
    }
