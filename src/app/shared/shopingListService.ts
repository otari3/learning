import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Ingredient } from './ingrediants.model';

@Injectable()
export class ShopingListService {
  informingDataAdd = new EventEmitter<Ingredient[]>();

  private ingredient: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 4),
  ];
  displayingIngrediants() {
    return this.ingredient.slice();
  }
  names: string[] = [];
  set gettingDataFromRecipeService(item: Ingredient[]) {
    for (let i = 0; i < item.length; i++) {
      if (!this.names.includes(item[i].name)) {
        this.names.push(item[i].name);
        this.ingredient.push(item[i]);
      }
    }
  }
  addingIngredients(item: Ingredient) {
    this.ingredient.push(item);
    this.informingDataAdd.emit(this.ingredient.slice());
  }
}
