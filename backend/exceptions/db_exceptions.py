class RecipeAlreadyExist(ValueError):
    """Raise when a certain recipe name already exist in the database"""
    def __init__(self, name: str) -> None:
        super().__init__(f'Recipe `{name}` already exists in the database')
