import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'model/recipe';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NewRecipe } from 'model/models';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.less']
})
export class RecipeDetailComponent implements OnInit {

  @Input()
  public recipe: NewRecipe;

  public viewRecipe: Recipe;

  constructor(
    private route: ActivatedRoute, // for finding the route link with the recipe id in it
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data: {recipe: Recipe}) => {
      this.recipe = data.recipe.recipe;
    });
  }

  goBack(): void {
    this.location.back();
  }



}
