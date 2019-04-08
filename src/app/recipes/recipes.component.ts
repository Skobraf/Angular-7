import { RecipeService } from './recipe.service';
import { Component, OnInit, DoCheck} from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit, DoCheck {
  selectedRecipe;
  constructor() {
    console.log(this.selectedRecipe);
  }

  ngOnInit() {
  }
  ngDoCheck(): void {
    console.log(this.selectedRecipe);
    
  }

}
