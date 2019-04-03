import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'api/recipe.service';
import { Recipe } from 'model/recipe';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.less']
})
export class RecipeListComponent implements OnInit {

  public recipeList: Array<Recipe>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: { recipes: Recipe[] }) => {
      this.recipeList = data.recipes;
    });
  }

}
