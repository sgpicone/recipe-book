import { Component, OnInit } from '@angular/core';
import { Recipe } from 'model/recipe';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.less']
})
export class RecipeListComponent implements OnInit {

  public recipeList: Array<Recipe>;

  public groupedRecipeList: Array<Recipe[]>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: { recipes: Recipe[] }) => {
      this.recipeList = data.recipes;
      this.groupedRecipeList = this.separateArrayIntoGroups(this.recipeList, 3);
    });
  }

  separateArrayIntoGroups(recipes: Array<Recipe>, groupingSize: number): Array<Recipe[]> {
    const group = new Array<Recipe[]>();

    for (let i = 0, j = 0; i < recipes.length; i++) {
      if (i >= groupingSize && i % groupingSize === 0) {
        j++;
      }
      group[j] = group[j] || [];
      group[j].push(recipes[i]);
    }
    return group;
  }

}
