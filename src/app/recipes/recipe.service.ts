import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('A test Recipe',
                    'This is a text',
                    'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png',
                    [
                        new Ingredient('Meat',1),
                        new Ingredient('Frensh Fries', 20)
                    ]
                    ),
        new Recipe('A test Recipe',
                    'This is a text number 2',
                    'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png',
                    [
                        new Ingredient('Meat',1),
                        new Ingredient('Frensh Fries', 20)
                    ]
        )
                  ];
    constructor(private slService: ShoppingListService) {}
    getRecipes() {
        return this.recipes.slice();
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}
