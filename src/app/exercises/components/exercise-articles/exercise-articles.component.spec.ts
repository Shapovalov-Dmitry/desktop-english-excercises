import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseArticlesComponent } from './exercise-articles.component';

describe('ExerciseArticlesComponent', () => {
  let component: ExerciseArticlesComponent;
  let fixture: ComponentFixture<ExerciseArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
