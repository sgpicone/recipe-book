import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Recipe } from 'model/recipe';
import { RecipeService } from 'api/api';
import { Observable } from 'rxjs';

@Injectable()
export class RecipeResolver implements Resolve<Recipe> {

  constructor(private recipeService: RecipeService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Recipe> {
    return this.recipeService.findRecipeById(+route.paramMap.get('id'));
  }

}
