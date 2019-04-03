import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-method-step',
  templateUrl: './method-step.component.html',
  styleUrls: ['./method-step.component.less']
})
export class MethodStepComponent implements OnInit {

  @Input()
  public stepForm: FormGroup;

  @Input()
  public stepNumber: number;

  constructor() { }

  ngOnInit() {
    console.log(this.stepForm);
  }

}
