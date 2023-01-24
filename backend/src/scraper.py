from typing import Any

import requests
from bs4 import BeautifulSoup

from models import NutritionalValues

class Scraper:
    def __init__(self, url: str) -> None:
        """
        Gets recipe data from given url
        param url: url of the page to be scrapped
        """
        self.url = url
        self.soup = self.download_page()

    def download_page(self) -> BeautifulSoup:
        """
        Downloads the page and returns the soup
        :return: soup
        """
        response = requests.get(self.url)
        return BeautifulSoup(response.text, 'html.parser')

    def get_name(self) -> str:
        """
        Returns name of the recipe
        :return: name of the recipe
        """
        return self.soup.find('h1').text

    def get_ingredients(self) -> list[list[str]]:
        """
        Returns all ingredients of the recipe
        :return: list of ingredients
        """
        ingredients_container = self.soup.find('div', {'class': 'recipeDetailIngredients'})
        ingredients = ingredients_container.find_all('li')
        ingredients = [ingredient.text for ingredient in ingredients]
        return [ingredient.split(' ', 1) for ingredient in ingredients]

    def get_nutritional_values(self) -> NutritionalValues:
        """
        Returns all nutritional values of the recipe
        :return: nutritional values
        """
        nv_container = self.soup.find('table', {'class': 'nutritionalValues'})

        data_names_mapper = {
            'calorie': 'calories',
            'carbohydrate': 'carbohydrate',
            'fiber': 'fiber',
            'protein': 'protein',
            'fat': 'fat',
        }

        values_container = {}
        for data_name in data_names_mapper:
            value_tr = nv_container.find_all('tr', {'data-test': f'recipeDetail__{data_name}Count'})
            value = value_tr[0].find_all('td')[1].text
            values_container[data_names_mapper[data_name]] = value

        return NutritionalValues(**values_container)

    def get_preparation_instruction(self) -> list[str]:
        """
        Returns preparation instruction of the recipe
        :return: list of steps
        """
        preparation_instruction_container = self.soup.find('div', {
            'data-test': 'recipeDetail__instructionsContainer',
        })
        preparation_instruction = preparation_instruction_container.find_all('li')
        return [step.text for step in preparation_instruction]

    def get_tags(self) -> list[str]:
        """
        Returns tags of the recipe
        :return: list of tags
        """
        tags_container = self.soup.find('div', {'class': 'recipeDetailTags'})
        tags = tags_container.find_all('a')
        return [tag.text for tag in tags]
