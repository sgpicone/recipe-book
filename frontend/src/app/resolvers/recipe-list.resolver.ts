import { Injectable } from '@angular/core';
import { RecipeService } from 'api/recipe.service';
import { Recipe } from 'model/recipe';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class RecipeListResolver implements Resolve<Recipe[]> {
    constructor(private recipeService: RecipeService) {

    }

    resolve(route: ActivatedRouteSnapshot): Observable<Recipe[]> {
        return this.recipeService.getRecipes();
    }
}
