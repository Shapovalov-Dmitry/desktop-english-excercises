import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ExercisePluralsComponent } from "./exercise-plurals/exercise-plurals.component";

const routes: Routes = [
  {
    path: "exercise/plurals",
    component: ExercisePluralsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExercisesRoutingModule {}
