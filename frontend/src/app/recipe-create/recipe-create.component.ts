import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Recipe } from 'model/recipe';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.less']
})
export class RecipeCreateComponent implements OnInit {
  public recipeForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

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
      ingredients: this.formBuilder.array([
        this.initIngredient()
      ]),
      method: this.formBuilder.array([
        this.initMethodSection()
      ]),
      src: [''],
      tags: [''], // need to add tag bois
      links: [''] // need to add link bois
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
      section: ['', Validators.required],
      time: this.formBuilder.group({
        value: ['', Validators.required],
        unit: ['', Validators.required]
      }),
      steps: this.formBuilder.array([
        this.initMethodStep()
      ])
    });
  }

  initMethodStep() {
    // init a method step
    return this.formBuilder.group({
      number: ['', Validators.required],
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

  save(model: Recipe) {
    console.log(model);
  }

}
