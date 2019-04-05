import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
                      new Recipe('A test Recipe',
                                  'This is a text',
                                  'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png'),
                      new Recipe('A test Recipe',
                                  'This is a text number 2',
                                  'https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_960_720.png'),
                                ];

  constructor() { }
  
  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
