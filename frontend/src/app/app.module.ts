import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes/recipes.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule } from 'api.module';
import { MaterialModule } from './material/material.module';
import { RecipeCreateComponent } from './recipe-create/recipe-create.component';
import { IngredientComponent } from './recipe-create/ingredient/ingredient.component';
import { MethodSectionComponent } from './recipe-create/method-section/method-section.component';
import { MethodStepComponent } from './recipe-create/method-step/method-step.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RecipeDetailComponent,
    RecipesComponent,
    RecipeCreateComponent,
    IngredientComponent,
    MethodSectionComponent,
    MethodStepComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
