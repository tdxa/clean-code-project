import pytest
from models.nutritional_values import NutritionalValues


def test_init_raise():
    with pytest.raises(Exception):
        NutritionalValues()


@pytest.mark.parametrize("updated_values", [
    ({}),
    ({"calories": "test calories"}),
    ({"carbohydrates": "test carbohydrates"}),
    ({"fiber": "test fiber"}),
    ({"protein": "test protein"}),
    ({"fat": "test fat"}),
])
def test_init(updated_values: dict, default_nutritional_values_kwargs: dict):
    values = default_nutritional_values_kwargs | updated_values
    nutritional_values = NutritionalValues(**values)
    assert isinstance(nutritional_values, NutritionalValues)
    assert nutritional_values.calories == values["calories"]
    assert nutritional_values.carbohydrates == values["carbohydrates"]
    assert nutritional_values.fiber == values["fiber"]
    assert nutritional_values.protein == values["protein"]
    assert nutritional_values.fat == values["fat"]
