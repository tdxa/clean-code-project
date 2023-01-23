from pydantic import BaseModel, Field
from bson import ObjectId
from models.shared_model import PyObjectId


class Recipe(BaseModel):
    url: str
    name: str
    ingredients: list
    nutritional_values: dict
    preparation_method: list
    tags: list


class RecipeResponse(Recipe):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}