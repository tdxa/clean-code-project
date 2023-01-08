from src.recipes_controller import RecipesController

if __name__ == '__main__':
    """ The main function """
    controller = RecipesController()
    # print(controller.check_connection())

    szarlotka = controller.get_recipe_by_name('Zdrowa szarlotka')
    szarlotka.print_recipe()

    makaron = controller.get_recipe('63a5a8699633a47ccc92dea6')
    makaron.print_recipe()
