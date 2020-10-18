import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTabsModule } from "@angular/material/tabs";
import { ExercisePluralsComponent } from "./components/exercise-plurals/exercise-plurals.component";
import { ExercisesRoutingModule } from "./exercises-routing.module";
import { ExercisesComponent } from "./exercises.component";
import { ExerciseArticlesComponent } from "./components/exercise-articles/exercise-articles.component";
import { SharedModule } from "app/shared/shared.module";

@NgModule({
  declarations: [
    ExercisePluralsComponent,
    ExercisesComponent,
    ExerciseArticlesComponent,
  ],
  imports: [
    CommonModule,
    ExercisesRoutingModule,
    SharedModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class ExercisesModule {}
