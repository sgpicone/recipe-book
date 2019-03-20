import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-method-section',
  templateUrl: './method-section.component.html',
  styleUrls: ['./method-section.component.less']
})
export class MethodSectionComponent implements OnInit {

  @Input()
  public sectionForm: FormGroup;

  @Input()
  public sectionNumber: number;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log(this.sectionForm);
  }

  initMethodStep() {
    // init a method step
    return this.formBuilder.group({
      number: [''],
      description: ['', Validators.required]
    });
  }

  addMethodStep() {
    const ctrl = this.sectionForm.controls.steps as FormArray;
    ctrl.push(this.initMethodStep());
  }

  removeMethodStep(i: number) {
    const ctrl = this.sectionForm.controls.steps as FormArray;
    ctrl.removeAt(i);
  }

}
