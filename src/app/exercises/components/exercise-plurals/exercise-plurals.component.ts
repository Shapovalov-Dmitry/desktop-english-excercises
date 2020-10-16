import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-exercise-plurals',
  templateUrl: './exercise-plurals.component.html',
  styleUrls: ['./exercise-plurals.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExercisePluralsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
