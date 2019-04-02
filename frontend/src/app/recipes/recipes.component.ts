import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'api/recipe.service';
import { Recipe } from 'model/recipe';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.less']
})
export class RecipesComponent implements OnInit {

  public recipeList: Array<Recipe>;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipeService.getRecipes()
      .subscribe(recipes => this.recipeList = recipes);
  }

}
