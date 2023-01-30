from bson import ObjectId
from pydantic import BaseModel, Field

from models.shared_model import PyObjectId
from models.nutritional_values import NutritionalValues


class Recipe(BaseModel):
    """
    Model class for representing a recipe
    """
    url: str | None = None
    image_url: str | None = None
    name: str | None = None
    ingredients: list[str] | None = None
    nutritional_values: NutritionalValues | None = None
    preparation_method: list[str] | None = None
    tags: list[str] | None = None


class RecipeResponse(Recipe):
    """
    Model class for RecipeResponse
    """
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")

    class Config:
        """
        Config for RecipeResponse class
        """
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
