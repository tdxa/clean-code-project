import requests
from bs4 import BeautifulSoup
from src.recipe import Recipe
from src.recipes_service import RecipesService


class Crawler:
    def __init__(self, url: str) -> None:
        """
        Gets all recipe links from given url
        param url: url of the page to be scrapped
        """
        self.url = url
        self.soup = self.download_page()
        self.database_service = RecipesService()

    # TODO - Sprawić żeby dojechał na koniec strony (póki co łapie tylko pierwsze 18 przepisów)
    def download_page(self) -> BeautifulSoup:
        """
        Downloads the page and returns the soup
        :return: soup
        """
        response = requests.get(self.url)
        return BeautifulSoup(response.text, "html.parser")

    def get_links(self) -> list[str]:
        """
        Returns all links from the page
        :return: list of links
        """
        links = []
        for link in self.soup.find_all('a', href=True):
            if link['href'].startswith("/przepis/"):
                links.append(f'https://www.fitczarodziejka.pl' + link['href'])
        return links

    def crawl(self) -> None:
        """ Crawls the page and saves recipes to the database """
        links = self.get_links()
        for link in links:
            recipe = Recipe(link)
            self.database_service.add_new(recipe.recipe_to_json())
