from fastapi import APIRouter

from database import database
from exceptions import RecipeNotFoundException
from models.recipe_model import PyObjectId, Recipe, RecipeResponse
from services import RecipesService


recipe_service = RecipesService(database)
recipes_router = APIRouter()


@recipes_router.post("/recipes", status_code=201)
async def add_recipe(recipe: Recipe) -> RecipeResponse:
    """
    Endpoint to add recipe to db

    :param recipe: recipe
    :return: recipe response
    """
    return recipe_service.insert_one(recipe)


@recipes_router.get("/recipes/random")
async def get_random_recipe() -> RecipeResponse:
    """
    Endpoint to get a random recipe

    :return: recipe response
    """
    return recipe_service.get_random_recipe()


@recipes_router.get("/recipes/{id}")
async def get_recipe_by_id(id: PyObjectId) -> RecipeResponse:
    """
    Endpoint to get recipe by id

    :param id: recipe id
    :return: recipe response
    """
    res = recipe_service.get_one(id)
    if res is None:
        raise RecipeNotFoundException(f"Recipe with id {id} not found")

    return res


@recipes_router.get("/recipes")
async def get_all_recipes() -> list[RecipeResponse]:
    """
    Enpoint to get all recipes

    :return: list of all recipes
    """
    return recipe_service.get_all()


@recipes_router.get("/recipes/name/{name}")
async def get_recipe_by_name(name: str) -> RecipeResponse:
    """
    Endpoint to get recipe by name

    :param name: recipe name
    :return: recipe response
    """
    res = recipe_service.get_one_by_name(name)
    if not res:
        raise RecipeNotFoundException(f"Recipe with name {name} not found")

    return res


@recipes_router.get("/recipes-names")
async def get_all_recipes_names() -> list[str]:
    """
    Endpoint to get all recipes names

    :return: list of names
    """
    return recipe_service.get_all_names()


@recipes_router.get("/recipes-tags")
async def get_all_recipes_tags() -> list[str]:
    """
    Endpoint to get all recipes tags

    :return: list of tags
    """
    return recipe_service.get_all_tags()


@recipes_router.get("/recipes/tag/{tag}")
async def get_all_recipes_by_tag(tag: str) -> list[RecipeResponse]:
    """
    Endpoint to get all recipes by tag

    :param tag: recipe tag
    :return: list of recipes
    """
    return recipe_service.get_all_by_tag(tag)


@recipes_router.patch("/recipes/{id}")
async def patch_recipe(id: PyObjectId, data: RecipeResponse) -> RecipeResponse:
    """
    Endpoint to modify a recipe

    :param id: recipe id
    :param data: recipe data
    :return: recipe response
    """
    return recipe_service.update_one(id, data)


@recipes_router.delete("/recipes/{id}", status_code=204)
async def delete_recipy_by_id(id: PyObjectId) -> None:
    """
    Endpoint to delete recipe by id

    :param id: recipe id
    """
    recipe_service.delete_one_by_id(id)
