from src.scraper import Scraper


class Recipe:
    def __init__(self):
        """ The constructor """
        self.url = None
        self.scrapper = None
        self.name = None
        self.ingredients = None
        self.nutritional_values = None
        self.preparation_method = None
        self.tags = None

    def create_recipe_from_json(self, json: dict) -> bool:
        """ Creates recipe from given json """
        self.url = json['url']
        self.name = json['name']
        self.ingredients = json['ingredients']
        self.nutritional_values = json['nutritional_values']
        self.preparation_method = json['preparation_method']
        self.tags = json['tags']
        return True

    def create_recipe_from_url(self, url: str) -> bool:
        """ Calls scrapper to get recipe from given url """
        self.url = url
        self.scrapper = Scraper(self.url)
        self.name = self.scrapper.get_name()
        self.ingredients = self.scrapper.get_ingredients()
        self.nutritional_values = self.scrapper.get_nutritional_values()
        self.preparation_method = self.scrapper.get_preparation_method()
        self.tags = self.scrapper.get_tags()
        return True

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
