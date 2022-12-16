from src.crawler import Crawler
from src.recipes_service import RecipesService

if __name__ == '__main__':
    """ The main function """
    database_service = RecipesService()
    crawler = Crawler("https://www.fitczarodziejka.pl/przepisy")
    crawler.crawl()
