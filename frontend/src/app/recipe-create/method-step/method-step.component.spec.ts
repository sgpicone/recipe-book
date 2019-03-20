import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodStepComponent } from './method-step.component';

describe('MethodStepComponent', () => {
  let component: MethodStepComponent;
  let fixture: ComponentFixture<MethodStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
