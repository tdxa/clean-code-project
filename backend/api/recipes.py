from fastapi import APIRouter
from services import RecipesService
from models.recipe_model import RecipeResponse, Recipe, PyObjectId
from exceptions import RecipeNotFoundException
from database import database

recipe_service = RecipesService(database)
recipes_router = APIRouter()


@recipes_router.post("/recipes", status_code=201)
async def add_recipe(recipe: Recipe) -> RecipeResponse:
    return recipe_service.insert_one(recipe)


@recipes_router.get("/recipes/random")
async def get_random_recipe() -> RecipeResponse:
    return recipe_service.get_random_recipe()


@recipes_router.get("/recipes/{id}")
async def get_recipe_by_id(id: PyObjectId) -> RecipeResponse:
    res = recipe_service.get_one(id)
    if res is None:
        raise RecipeNotFoundException(f"Recipe with id {id} not found")

    return res


@recipes_router.get("/recipes")
async def get_all_recipes() -> list[RecipeResponse]:
    return recipe_service.get_all()


@recipes_router.get("/recipes/name/{name}")
async def get_recipe_by_name(name: str) -> RecipeResponse:
    res = recipe_service.get_one_by_name(name)
    if not res:
        raise RecipeNotFoundException(f"Recipe with name {name} not found")

    return res


@recipes_router.get("/recipes-names")
async def get_all_recipes_names() -> list[str]:
    return recipe_service.get_all_names()


@recipes_router.get("/recipes-tags")
async def get_all_recipes_tags():
    return recipe_service.get_all_tags()


@recipes_router.get("/recipes/tag/{tag}")
async def get_all_recipes_by_tag(tag: str):
    return recipe_service.get_all_by_tag(tag)


@recipes_router.patch("/recipes/{id}")
async def patch_recipe(id: PyObjectId, data: Recipe):
    return recipe_service.update_one(id, data)


@recipes_router.delete("/recipes/{id}", status_code=204)
async def delete_recipy_by_id(id: PyObjectId):
    recipe_service.delete_one_by_id(id)
