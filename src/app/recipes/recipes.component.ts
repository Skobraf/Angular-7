import { RecipeService } from './recipe.service';
import { Component, OnInit} from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit, DoCheck {
  selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService ) {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        // recipe value comes with the event
        this.selectedRecipe = recipe;
      }
    )   
  }

  ngOnInit() {
  }

}
