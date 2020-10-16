import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercisePluralsComponent } from './exercise-plurals.component';

describe('ExercisePluralsComponent', () => {
  let component: ExercisePluralsComponent;
  let fixture: ComponentFixture<ExercisePluralsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercisePluralsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercisePluralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
