from pydantic import BaseModel


class NutritionalValues(BaseModel):
    """
    Model class for representing a nutritional values
    """
    calories: str
    carbohydrates: str
    fiber: str
    protein: str
    fat: str
