import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExercisesRoutingModule } from './exercises-routing.module';
import { ExercisePluralsComponent } from './exercise-plurals/exercise-plurals.component';


@NgModule({
  declarations: [ExercisePluralsComponent],
  imports: [
    CommonModule,
    ExercisesRoutingModule
  ]
})
export class ExercisesModule { }
