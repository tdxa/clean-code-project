import pytest
from models.token_model import Token, TokenData


def test_init_raise():
    with pytest.raises(Exception):
        Token()


@pytest.mark.parametrize("updated_values", [
    ({}),
    ({"access_token": "test access_token"}),
    ({"token_type": "test token_type"}),
])
def test_init(updated_values: dict, default_token_kwargs: dict):
    values = default_token_kwargs | updated_values
    token = Token(**values)
    assert isinstance(token, Token)
    assert token.access_token == values["access_token"]


@pytest.mark.parametrize("updated_values", [
    ({}),
    ({"username": "test username"}),
])
def test_token_data_init(updated_values: dict, default_token_data_kwargs: dict):
    values = default_token_data_kwargs | updated_values
    token_data = TokenData(**values)
    assert isinstance(token_data, TokenData)
    assert token_data.username == values["username"]
