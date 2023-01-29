from pydantic import BaseModel
from models import RecipeResponse
from bson import ObjectId

class PaginationContent(BaseModel):
    content: list[RecipeResponse]
    page: int
    size: int
    total_count: int

    class Config:
        json_encoders = {ObjectId: str}