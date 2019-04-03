import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule } from 'api.module';
import { MaterialModule } from './material/material.module';
import { RecipeCreateComponent } from './recipe-create/recipe-create.component';
import { IngredientComponent } from './recipe-create/ingredient/ingredient.component';
import { MethodStepComponent } from './recipe-create/method-step/method-step.component';

import { TagInputModule } from 'ngx-chips';
import { RecipeResolver } from './resolvers/recipe.resolver';
import { RecipeListResolver } from './resolvers/recipe-list.resolver';
import { RecipeCardComponent } from './recipe-list/recipe-card/recipe-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeCreateComponent,
    IngredientComponent,
    MethodStepComponent,
    RecipeCardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ApiModule,
    TagInputModule
  ],
  providers: [
    RecipeResolver,
    RecipeListResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
