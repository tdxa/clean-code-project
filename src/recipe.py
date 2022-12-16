from src.scraper import Scraper


class Recipe:
    def __init__(self, url):
        """ Collects data from the url and creates a recipe """
        self.url = url
        self.scrapper = Scraper(self.url)
        self.name = self.scrapper.get_name()
        self.ingredients = self.scrapper.get_ingredients()
        self.nutritional_values = self.scrapper.get_nutritional_values()
        self.preparation_method = self.scrapper.get_preparation_method()
        self.tags = self.scrapper.get_tags()

    def print_recipe(self) -> None:
        """ Prints recipe in the console """
        print('url ', self.url)
        print('name ', self.name)
        print('ingredients ', self.ingredients)
        print('nutritional_values ', self.nutritional_values)
        print('preparation_method ', self.preparation_method)
        print('tags ', self.tags)

    def recipe_to_json(self) -> dict:
        """ Returns recipe as a json """
        return {
            'url': self.url,
            "name": self.name,
            "ingredients": self.ingredients,
            "nutritional_values": self.nutritional_values,
            "preparation_method": self.preparation_method,
            "tags": self.tags
        }
