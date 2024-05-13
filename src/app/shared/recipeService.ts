import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Recipe } from '../recipe-book/recipe.model';
import { Ingredient } from './ingrediants.model';
import { ShopingListService } from './shopingListService';
@Injectable()
export class RecipeService {
  constructor(private shopingService: ShopingListService) {}
  gettingIngrediant = new EventEmitter<Ingredient[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'test Recipe 0',
      'this is simply a test 0',
      'https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe-500x500.jpg',
      [new Ingredient('beef', 2), new Ingredient('french Fries', 20)]
    ),
    new Recipe(
      'test Recipe1',
      'this is simply a test1',
      'https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe-500x500.jpg',
      [new Ingredient('salt', 3), new Ingredient('buns', 2)]
    ),
  ];
  addingToShopingService() {
    this.gettingIngrediant.subscribe((data: Ingredient[]) => {
      this.shopingService.gettingDataFromRecipeService = data;
    });
  }
  getRecipe() {
    return this.recipes.slice();
  }
  gettingSingleRecipe(index: number) {
    return this.recipes[index];
  }
  gettingData = new EventEmitter<Recipe>();
}
