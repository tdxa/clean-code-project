from typing import Any

import requests
from bs4 import BeautifulSoup


class Scraper:
    """Represents a scraper"""
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

    def get_nutritional_values(self) -> dict[str, Any]:
        """
        Returns all nutritional values of the recipe
        :return: dict of nutritional values
        """
        nv_container = self.soup.find('table', {'class': 'nutritionalValues'})

        calories = nv_container.find_all('tr', {'data-test': 'recipeDetail__calorieCount'})
        calories = calories[0].find_all('td')[1].text

        carbohydrates = nv_container.find_all('tr', {'data-test': 'recipeDetail__carbohydrateCount'})
        carbohydrates = carbohydrates[0].find_all('td')[1].text

        fiber = nv_container.find_all('tr', {'data-test': 'recipeDetail__fiberCount'})
        fiber = fiber[0].find_all('td')[1].text

        protein = nv_container.find_all('tr', {'data-test': 'recipeDetail__proteinCount'})
        protein = protein[0].find_all('td')[1].text

        fat = nv_container.find_all('tr', {'data-test': 'recipeDetail__fatCount'})
        fat = fat[0].find_all('td')[1].text
        return {
            'calories': calories,
            'carbohydrates': carbohydrates,
            'fiber': fiber,
            'protein': protein,
            'fat': fat
        }

    def get_preparation_method(self) -> list[str]:
        """
        Returns preparation method of the recipe
        :return: list of steps
        """
        preparation_method_container = self.soup.find('div', {
            'data-test': 'recipeDetail__instructionsContainer',
        })
        preparation_method = preparation_method_container.find_all('li')
        return [step.text for step in preparation_method]

    def get_tags(self) -> list[str]:
        """
        Returns tags of the recipe
        :return: list of tags
        """
        tags_container = self.soup.find('div', {'class': 'recipeDetailTags'})
        tags = tags_container.find_all('a')
        return [tag.text for tag in tags]
