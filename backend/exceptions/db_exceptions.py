class RecipeAlreadyExist(ValueError):
    def __init__(self) -> None:
        super().__init__('Recipe already exists in the database')
