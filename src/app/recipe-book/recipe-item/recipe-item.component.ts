import { Component, EventEmitter, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../shared/recipeService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.scss',
})
export class RecipeItemComponent {
  constructor(private manegingItem: RecipeService) {}
  @Input() recipe: Recipe;
  @Input() index: number;
}
