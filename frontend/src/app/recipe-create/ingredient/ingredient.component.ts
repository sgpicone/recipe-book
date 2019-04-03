import { Component, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MeasurementUnit } from 'model/measurementUnit';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.less']
})
export class IngredientComponent {

  @Input()
  public ingredientForm: FormGroup;

  @Output()
  public addEvent = new EventEmitter();

  public units = MeasurementUnit;
  public keys = Object.keys;

  constructor() { }

  onEnter(): void {
    this.addEvent.emit(null);
  }

}
