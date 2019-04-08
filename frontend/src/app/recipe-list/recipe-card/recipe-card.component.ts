import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'model/recipe';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.less']
})
export class RecipeCardComponent {

  @Input()
  private recipe: Recipe;

  @Input()
  private recipeId: Number;

  constructor() { }

}
