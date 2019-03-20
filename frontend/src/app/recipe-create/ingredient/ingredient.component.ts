import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.less']
})
export class IngredientComponent {

  @Input()
  public ingredientForm: FormGroup;

}
