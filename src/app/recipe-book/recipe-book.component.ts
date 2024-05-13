import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from '../shared/recipeService';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrl: './recipe-book.component.scss',
  providers: [RecipeService],
})
export class RecipeBookComponent {}
