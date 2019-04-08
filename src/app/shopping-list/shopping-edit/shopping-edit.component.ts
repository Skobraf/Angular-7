import { ShoppingListService } from './../shopping-list.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }
  onAddItem() {
    const ngName = this.nameInputRef.nativeElement.value;
    const ngAmount = this.nameInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ngName, ngAmount);
    this.slService.addIngredient(newIngredient);
  }

}
