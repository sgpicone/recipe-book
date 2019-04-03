import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeCreateComponent } from './recipe-create/recipe-create.component';
import { RecipeResolver } from './resolvers/recipe.resolver';
import { RecipeListResolver } from './resolvers/recipe-list.resolver';

const routes: Routes = [
  { path: '', redirectTo: '/dash', pathMatch: 'full' },
  { path: 'dash', component: DashboardComponent },
  {
    path: 'recipes/view/:id',
    component: RecipeDetailComponent,
    resolve: { recipe: RecipeResolver }
  },
  {
    path: 'recipes',
    component: RecipeListComponent,
    resolve: { recipes: RecipeListResolver }
  },
  { path: 'recipes/create', component: RecipeCreateComponent },
  { path: 'recipes/edit/:id', component: RecipeCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
