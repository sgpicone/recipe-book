import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Recipe } from 'model/recipe';
import { MeasurementUnit, TimeUnit } from 'model/models';
import { RecipeService } from 'api/recipe.service';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.less']
})
export class RecipeCreateComponent implements OnInit {
  public recipeForm: FormGroup;

  public timeUnits = TimeUnit;
  public keys = Object.keys;

  constructor(
    private formBuilder: FormBuilder,
    private recipeService: RecipeService) { }

  ngOnInit() {
    // init the form
    this.recipeForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: [''],
      serves: [''],
      servingSize: this.formBuilder.group({
        qty: [''],
        unit: ['']
      }),
      time: this.formBuilder.group({
        time: [''],
        unit: ['']
      }),
      ingredients: this.formBuilder.array([
        this.initIngredient()
      ]),
      method: this.formBuilder.array([
        this.initMethodStep()
      ]),
      src: [''],
      tags: [''],
      links: this.formBuilder.array([]) // need to add link bois
    });
  }

  initIngredient() {
    // initialize an ingredient
    return this.formBuilder.group({
      name: ['', Validators.required],
      qty: ['', Validators.required],
      unit: ['']
    });
  }

  initMethodSection() {
    // init a method section
    return this.formBuilder.group({
      steps: this.formBuilder.array([
        this.initMethodStep()
      ])
    });
  }

  initMethodStep() {
    // init a method step
    return this.formBuilder.group({
      description: ['', Validators.required]
    });
  }

  addIngredient() {
    const ctrl = this.recipeForm.controls.ingredients as FormArray;
    ctrl.push(this.initIngredient());
  }

  removeIngredient(i: number) {
    const ctrl = this.recipeForm.controls.ingredients as FormArray;
    ctrl.removeAt(i);
  }

  addMethodSection() {
    const ctrl = this.recipeForm.controls.method as FormArray;
    ctrl.push(this.initMethodSection());
  }

  removeMethodSection(i: number) {
    const ctrl = this.recipeForm.controls.method as FormArray;
    ctrl.removeAt(i);
  }

  addMethodStep() {
    const ctrl = this.recipeForm.controls.method as FormArray;
    ctrl.push(this.initMethodStep());
  }

  removeMethodStep(i: number) {
    const ctrl = this.recipeForm.controls.method as FormArray;
    ctrl.removeAt(i);
  }

  save(recipe: FormGroup) {
    console.log(recipe.value);
    this.recipeService.addRecipe(recipe.value)
      .subscribe(recipe => console.log(recipe));
  }

}
