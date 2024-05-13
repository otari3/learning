import { Ingredient } from '../shared/ingrediants.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagPath: string;
  public ingrdients: Ingredient[];
  constructor(
    name: string,
    description: string,
    imagPath: string,
    ingredients: Ingredient[]
  ) {
    this.name = name;
    this.description = description;
    this.imagPath = imagPath;
    this.ingrdients = ingredients;
  }
}
