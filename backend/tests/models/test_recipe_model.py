import pytest

from models.recipe_model import Recipe, RecipeResponse
from models.shared_model import PyObjectId


def test_init_raise():
    with pytest.raises(Exception):
        Recipe()


@pytest.mark.parametrize("updated_values", [
    ({}),
    ({"url": "test url"}),
    ({"name": "test name"}),
    ({"ingredients": ["test ingredients"]}),
    ({"nutritional_values": {"test": "test nutritional_values"}}),
    ({"preparation_method": ["test preparation_method"]}),
    ({"tags": ["test tags"]}),
])
def test_init(updated_values: dict, default_recipe_kwargs: dict):
    values = default_recipe_kwargs | updated_values
    recipe = Recipe(**values)
    assert isinstance(recipe, Recipe)
    assert recipe.url == values["url"]
    assert recipe.name == values["name"]
    assert recipe.ingredients == values["ingredients"]
    assert recipe.nutritional_values == values["nutritional_values"]
    assert recipe.preparation_method == values["preparation_method"]
    assert recipe.tags == values["tags"]


def test_recipe_response_init_raise():
    with pytest.raises(Exception):
        RecipeResponse()


@pytest.mark.parametrize("updated_values", [
    ({}),
    ({"id": PyObjectId(oid="05284793EB2CBE8E1AECCECD")}),
    ({"_id": PyObjectId(oid="05284793EB2CBE8E1AECCECD")}),
    ({"url": "test url"}),
    ({"name": "test name"}),
    ({"ingredients": ["test ingredients"]}),
    ({"nutritional_values": {"test": "test nutritional_values"}}),
    ({"preparation_method": ["test preparation_method"]}),
    ({"tags": ["test tags"]}),
])
def test_recipe_response_init(updated_values: dict, default_recipe_response_kwargs: dict):
    values = default_recipe_response_kwargs | updated_values
    recipe = RecipeResponse(**values)
    assert isinstance(recipe, Recipe)
    assert recipe.url == values["url"]
    assert recipe.name == values["name"]
    assert recipe.ingredients == values["ingredients"]
    assert recipe.nutritional_values == values["nutritional_values"]
    assert recipe.preparation_method == values["preparation_method"]
    assert recipe.tags == values["tags"]
