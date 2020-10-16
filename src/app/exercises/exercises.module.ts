import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTabsModule } from "@angular/material/tabs";
import { ExercisePluralsComponent } from "./components/exercise-plurals/exercise-plurals.component";
import { ExercisesRoutingModule } from "./exercises-routing.module";
import { ExercisesComponent } from "./exercises.component";

@NgModule({
  declarations: [ExercisePluralsComponent, ExercisesComponent],
  imports: [
    CommonModule,
    ExercisesRoutingModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class ExercisesModule {}
