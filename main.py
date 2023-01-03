from src.recipes_controller import RecipesController

if __name__ == '__main__':
    """ The main function """
    controller = RecipesController()
    print(controller.check_connection())
    print(controller.get_names_of_recipes())
    print(controller.get_recipes_by_tag('zupa'))
