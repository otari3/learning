import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingrediants.model';
import { ShopingListService } from '../shared/shopingListService';
import { RecipeService } from '../shared/recipeService';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrl: './shoping-list.component.scss',
})
export class ShopingListComponent implements OnInit {
  constructor(
    private displayingIngrdients: ShopingListService,
    private recipes: RecipeService
  ) {}
  ingredient: Ingredient[] = [];
  ngOnInit(): void {
    this.ingredient = this.displayingIngrdients.displayingIngrediants();
    this.displayingIngrdients.informingDataAdd.subscribe(
      (data: Ingredient[]) => {
        this.ingredient = data;
      }
    );
  }
}
