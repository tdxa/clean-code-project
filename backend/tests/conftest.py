
import pytest

from models.shared_model import PyObjectId


@pytest.fixture(scope='session')
def default_recipe_kwargs() -> dict:
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
    return {
        "calories": "",
        "carbohydrates": "",
        "fiber": "",
        "protein": "",
        "fat": "",
    }


@pytest.fixture(scope='session')
def default_token_kwargs() -> dict:
    return {
        "access_token": "",
        "token_type": "",
    }


@pytest.fixture(scope='session')
def default_token_data_kwargs() -> dict:
    return {
        "username": None,
    }


@pytest.fixture(scope="session")
def default_user_kwargs() -> dict:
    return {
        "username": "",
        "email": "",
        "first_name": None,
        "last_name": None,
    }


@pytest.fixture(scope="session")
def default_user_create_kwargs(default_user_kwargs: dict) -> dict:
    return default_user_kwargs | {
        "password": "",
    }


@pytest.fixture(scope="session")
def default_user_id_db_kwargs(default_user_kwargs: dict) -> dict:
    return default_user_kwargs | {
        "hashed_password": "",
    }
