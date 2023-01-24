class RecipeAlreadyExist(ValueError):
    """Raise when a certain recipe name already exist in the database"""
    def __init__(self) -> None:
        super().__init__('Recipe already exists in the database')
