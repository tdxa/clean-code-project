
import pytest

from models.user_model import User, UserCreate, UserInDB


def test_init_raise():
    with pytest.raises(Exception):
        User()


@pytest.mark.parametrize("updated_values", [
    ({}),
    ({"username": "test username"}),
    ({"email": "test email"}),
    ({"first_name": "test first_name"}),
    ({"last_name": "test last_name"}),
])
def test_init(updated_values: dict, default_user_kwargs: dict):
    values = default_user_kwargs | updated_values
    user = User(**values)
    assert isinstance(user, User)
    assert user.username == values["username"]
    assert user.email == values["email"]
    assert user.first_name == values["first_name"]
    assert user.last_name == values["last_name"]


@pytest.mark.parametrize("updated_values", [
    ({}),
    ({"password": "test password"}),
])
def test_user_create_init(updated_values: dict, default_user_create_kwargs: dict):
    values = default_user_create_kwargs | updated_values
    user_create = UserCreate(**values)
    assert isinstance(user_create, UserCreate)
    assert user_create.password == values["password"]


@pytest.mark.parametrize("updated_values", [
    ({}),
    ({"hashed_password": "test hashed_password"}),
])
def test_user_id_db_init(updated_values: dict, default_user_id_db_kwargs: dict):
    values = default_user_id_db_kwargs | updated_values
    user_create = UserInDB(**values)
    assert isinstance(user_create, UserInDB)
    assert user_create.hashed_password == values["hashed_password"]
