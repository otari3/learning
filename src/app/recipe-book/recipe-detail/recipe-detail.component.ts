import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../shared/recipeService';
import { Ingredient } from '../../shared/ingrediants.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.scss',
})
export class RecipeDetailComponent implements OnInit {
  constructor(
    private manegingDetail: RecipeService,
    private activtedRouter: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}
  recipe: Recipe;
  id: number;
  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.activtedRouter });
  }
  ngOnInit(): void {
    this.activtedRouter.params.subscribe((data: Params) => {
      this.id = Number(data['id']);
      this.recipe = this.recipeService.gettingSingleRecipe(this.id);
    });
  }
  sendingIngredientData() {
    this.manegingDetail.addingToShopingService();
    this.manegingDetail.gettingIngrediant.emit(this.recipe.ingrdients);
  }
}
