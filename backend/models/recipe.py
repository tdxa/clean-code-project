from pydantic import BaseModel

from models.nutritional_values import NutritionalValues


class Recipe(BaseModel):
    """
    Model class for representing a recipe
    """
    url: str | None = None
    scraper: str | None = None
    name: str | None = None
    ingredients: list[list[str]] | None = None
    nutritional_values: NutritionalValues | None = None
    preparation_method: list[str] | None = None
    tags: list[str] | None = None
