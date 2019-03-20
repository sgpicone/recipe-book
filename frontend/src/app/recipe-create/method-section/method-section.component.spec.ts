import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodSectionComponent } from './method-section.component';

describe('MethodSectionComponent', () => {
  let component: MethodSectionComponent;
  let fixture: ComponentFixture<MethodSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
