import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeCreateComponent } from './recipe-create/recipe-create.component';

const routes: Routes = [
  { path: '', redirectTo: '/dash', pathMatch: 'full' },
  { path: 'dash', component: DashboardComponent },
  { path: 'recipes/view/:id', component: RecipeDetailComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'recipes/create', component: RecipeCreateComponent },
  { path: 'recipes/edit/:id', component: RecipeCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
