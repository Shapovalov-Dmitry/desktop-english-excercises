import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ExercisesRoutingModule } from "./exercises-routing.module";
import { ExercisePluralsComponent } from "./components/exercise-plurals/exercise-plurals.component";
import { ExercisesComponent } from "./exercises.component";
import { MatTabsModule } from "@angular/material/tabs";

@NgModule({
  declarations: [ExercisePluralsComponent, ExercisesComponent],
  imports: [CommonModule, ExercisesRoutingModule, MatTabsModule],
})
export class ExercisesModule {}
