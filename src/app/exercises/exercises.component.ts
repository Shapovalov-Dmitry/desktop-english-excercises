import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExercisesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
