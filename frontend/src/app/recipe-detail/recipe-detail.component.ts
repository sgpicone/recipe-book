import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'model/recipe';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RecipeService } from 'api/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.less']
})
export class RecipeDetailComponent implements OnInit {

  @Input()
  public recipe: Recipe;

  constructor(
    private route: ActivatedRoute, // for finding the route link with the recipe id in it
    private recipeService: RecipeService,
    private location: Location
  ) { }

  ngOnInit(): void {
    if(!this.recipe) {
      console.log('doin it gangsta style');
      this.getRecipe();
    }
  }

  getRecipe(): void {
    const id = +this.route.snapshot.paramMap.get('id'); // + converts it into a number
    this.recipeService.findRecipeById(id)
      .subscribe(recipe => this.recipe = recipe);
  }

  goBack(): void {
    this.location.back();
  }



}
